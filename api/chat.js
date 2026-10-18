function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function normalizeMessage(value, maxLength) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter(function (entry) {
      return entry && (entry.role === 'user' || entry.role === 'assistant');
    })
    .map(function (entry) {
      return {
        role: entry.role,
        content: normalizeMessage(entry.content, 500)
      };
    })
    .filter(function (entry) {
      return entry.content;
    })
    .slice(-6);
}

function buildFallbackReply(message) {
  const lowerMessage = message.toLowerCase();
  const isBulgarian = /[а-я]/i.test(message);

  if (lowerMessage.includes('bali') || lowerMessage.includes('бали')) {
    return isBulgarian
      ? 'За Бали бих препоръчал Убуд за култура и природа, Семиняк за по-оживена атмосфера и Нуса Дуа за по-спокойна почивка.'
      : 'For Bali, I recommend Ubud for culture and nature, Seminyak for a livelier atmosphere, and Nusa Dua for a calmer stay.';
  }

  if (lowerMessage.includes('jakarta') || lowerMessage.includes('джакарта')) {
    return isBulgarian
      ? 'За Джакарта можеш да комбинираш Gelora Bung Karno, Kota Tua и модерните зони около Sudirman за добър еднодневен маршрут.'
      : 'For Jakarta, a good one-day route is Gelora Bung Karno, Kota Tua, and the modern Sudirman area.';
  }

  if (lowerMessage.includes('lombok') || lowerMessage.includes('ломбок')) {
    return isBulgarian
      ? 'Ломбок е силен избор за по-спокойни плажове, гледки към Ринджани и по-лежерна атмосфера от Бали.'
      : 'Lombok is a strong choice for quieter beaches, Mount Rinjani views, and a more relaxed vibe than Bali.';
  }

  if (lowerMessage.includes('wildlife') || lowerMessage.includes('animal') || lowerMessage.includes('живот') || lowerMessage.includes('природ')) {
    return isBulgarian
      ? 'За природни теми можеш да разгледаш орангутани, морски костенурки, коралови рифове и националните паркове в Комодо и Раджа Ампат.'
      : 'For wildlife topics, explore orangutans, sea turtles, coral reefs, and national parks around Komodo and Raja Ampat.';
  }

  return isBulgarian
    ? 'Мога да помогна с идеи за градове, плажове, маршрути, сезон за пътуване и природни забележителности в Индонезия. Задай ми по-конкретен въпрос.'
    : 'I can help with cities, beaches, routes, travel timing, and nature highlights across Indonesia. Ask me a more specific question.';
}

async function getOpenAIReply(message, history) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return '';
  }

  const baseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
  const systemPrompt = 'You are a concise travel assistant for the Indonesia Explorer website. Give practical, friendly travel guidance focused on Indonesia. Keep answers under 120 words unless the user asks for more detail.';
  const messages = [{ role: 'system', content: systemPrompt }]
    .concat(history)
    .concat([{ role: 'user', content: message }]);

  const response = await fetch(baseUrl + '/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: 0.7,
      max_tokens: 250
    })
  });

  if (!response.ok) {
    throw new Error('OpenAI request failed with status ' + response.status);
  }

  const data = await response.json();
  return normalizeMessage(
    data &&
    data.choices &&
    data.choices[0] &&
    data.choices[0].message &&
    data.choices[0].message.content,
    1200
  );
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const message = normalizeMessage(body.message, 500);
    const history = normalizeHistory(body.history);

    if (!message) {
      return sendJson(res, 400, { error: 'Message is required' });
    }

    let reply = '';

    try {
      reply = await getOpenAIReply(message, history);
    } catch (error) {
      console.error('AI provider unavailable:', error);
    }

    if (!reply) {
      reply = buildFallbackReply(message);
    }

    return sendJson(res, 200, { reply: reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return sendJson(res, 200, {
      reply: 'Мога да помогна с идеи за пътуване в Индонезия. Опитай с по-кратък въпрос за град, плаж, природа или маршрут.'
    });
  }
};
