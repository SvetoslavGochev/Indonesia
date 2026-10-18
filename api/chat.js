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

function normalizeLanguage(value) {
  if (typeof value !== 'string') {
    return 'bg';
  }

  const normalized = value.toLowerCase();
  return ['bg', 'en', 'de', 'fr', 'es', 'id'].includes(normalized) ? normalized : 'bg';
}

function buildFallbackReply(message, language) {
  const lang = normalizeLanguage(language);
  const lowerMessage = message.toLowerCase();
  const isBulgarian = /[а-я]/i.test(message);
  const isGerman = /[äöüß]/i.test(message) || /deutsch|dein|du bist|berlin|bali|jakarta|lombok/i.test(lowerMessage);
  const isFrench = /[éèàçùêîôûëïüÿœ]/i.test(message) || /bonjour|merci|france|bali|jakarta|lombok/i.test(lowerMessage);
  const isSpanish = /[áéíóúñü]/i.test(message) || /hola|gracias|bali|jakarta|lombok/i.test(lowerMessage);
  const isIndonesian = /bali|jakarta|lombok|liburan|wisata|indonesia/i.test(lowerMessage) && /[aiueo]/i.test(message);

  const replyBundles = {
    bg: {
      bali: 'За Бали бих препоръчал Убуд за култура и природа, Семиняк за по-оживена атмосфера и Нуса Дуа за по-спокойна почивка.',
      jakarta: 'За Джакарта можеш да комбинираш Gelora Bung Karno, Kota Tua и модерните зони около Sudirman за добър еднодневен маршрут.',
      lombok: 'Ломбок е силен избор за по-спокойни плажове, гледки към Ринджани и по-лежерна атмосфера от Бали.',
      wildlife: 'За природни теми можеш да разгледаш орангутани, морски костенурки, коралови рифове и националните паркове в Комодо и Раджа Ампат.',
      generic: 'Мога да помогна с идеи за градове, плажове, маршрути, сезон за пътуване и природни забележителности в Индонезия. Задай ми по-конкретен въпрос.'
    },
    en: {
      bali: 'For Bali, I recommend Ubud for culture and nature, Seminyak for a livelier atmosphere, and Nusa Dua for a calmer stay.',
      jakarta: 'For Jakarta, a good one-day route is Gelora Bung Karno, Kota Tua, and the modern Sudirman area.',
      lombok: 'Lombok is a strong choice for quieter beaches, Mount Rinjani views, and a more relaxed vibe than Bali.',
      wildlife: 'For wildlife topics, explore orangutans, sea turtles, coral reefs, and national parks around Komodo and Raja Ampat.',
      generic: 'I can help with cities, beaches, routes, travel timing, and nature highlights across Indonesia. Ask me a more specific question.'
    },
    de: {
      bali: 'Für Bali empfehle ich Ubud für Kultur und Natur, Seminyak für eine lebendigere Atmosphäre und Nusa Dua für einen ruhigeren Urlaub.',
      jakarta: 'In Jakarta kombinierst du am besten Gelora Bung Karno, Kota Tua und die modernen Viertel rund um Sudirman für einen gelungenen Stadttag.',
      lombok: 'Lombok ist eine gute Wahl für ruhigere Strände, Aussichten auf den Mount Rinjani und eine entspanntere Atmosphäre als Bali.',
      wildlife: 'Wenn du Natur und Tiere suchst, beginne mit Orang-Utans, Meeresschildkröten, Korallenriffen und den Nationalparks bei Komodo und Raja Ampat.',
      generic: 'Ich kann dir bei Routen, Städten, Stränden, Natur, Unterkunft und der besten Reisezeit in Indonesien helfen. Stelle mir eine konkretere Frage.'
    },
    fr: {
      bali: 'Pour Bali, je recommande Ubud pour la culture et la nature, Seminyak pour une ambiance plus animée et Nusa Dua pour un séjour plus calme.',
      jakarta: 'À Jakarta, tu peux combiner Gelora Bung Karno, Kota Tua et les quartiers modernes autour de Sudirman pour une bonne journée en ville.',
      lombok: 'Lombok est un excellent choix pour des plages plus calmes, des vues sur le mont Rinjani et une ambiance plus détendue que Bali.',
      wildlife: 'Pour la nature, commence par les orangs-outans, les tortues de mer, les récifs coralliens et les parcs nationaux autour de Komodo et Raja Ampat.',
      generic: 'Je peux t’aider avec des idées de routes, villes, plages, nature, hébergement et la meilleure période pour voyager en Indonésie.'
    },
    es: {
      bali: 'Para Bali, recomiendo Ubud por la cultura y la naturaleza, Seminyak para un ambiente más animado y Nusa Dua para una estancia más tranquila.',
      jakarta: 'En Yakarta, puedes combinar Gelora Bung Karno, Kota Tua y los barrios modernos alrededor de Sudirman para un gran día en la ciudad.',
      lombok: 'Lombok es una excelente opción para playas más tranquilas, vistas al monte Rinjani y un ambiente más relajado que Bali.',
      wildlife: 'Si te interesa la naturaleza, empieza con orangutanes, tortugas marinas, arrecifes de coral y parques nacionales cerca de Komodo y Raja Ampat.',
      generic: 'Puedo ayudarte con rutas, ciudades, playas, naturaleza, alojamiento y la mejor temporada para viajar a Indonesia.'
    },
    id: {
      bali: 'Untuk Bali, saya sarankan Ubud untuk budaya dan alam, Seminyak untuk suasana yang lebih aktif, dan Nusa Dua untuk liburan yang lebih tenang.',
      jakarta: 'Di Jakarta, kamu bisa kombinasikan Gelora Bung Karno, Kota Tua, dan area modern sekitar Sudirman untuk satu hari menjelajah kota.',
      lombok: 'Lombok adalah pilihan bagus untuk pantai yang lebih tenang, pemandangan Gunung Rinjani, dan suasana yang lebih santai daripada Bali.',
      wildlife: 'Kalau kamu tertarik alam dan satwa, mulai dari orangutan, penyu laut, terumbu karang, dan taman nasional di Komodo serta Raja Ampat.',
      generic: 'Saya bisa bantu dengan ide rute, kota, pantai, alam, akomodasi, dan waktu terbaik untuk liburan ke Indonesia.'
    }
  };

  const targetLanguage = lang === 'de' || (lang === 'bg' && isGerman) ? 'de' : lang;
  const finalLanguage = targetLanguage === 'de' ? 'de' : (lang === 'fr' || (lang === 'bg' && isFrench) ? 'fr' : (lang === 'es' || (lang === 'bg' && isSpanish) ? 'es' : (lang === 'id' || isIndonesian ? 'id' : lang)));

  if (lowerMessage.includes('bali') || lowerMessage.includes('бали')) {
    return replyBundles[finalLanguage].bali || replyBundles.en.bali;
  }

  if (lowerMessage.includes('jakarta') || lowerMessage.includes('джакарта')) {
    return replyBundles[finalLanguage].jakarta || replyBundles.en.jakarta;
  }

  if (lowerMessage.includes('lombok') || lowerMessage.includes('ломбок')) {
    return replyBundles[finalLanguage].lombok || replyBundles.en.lombok;
  }

  if (lowerMessage.includes('wildlife') || lowerMessage.includes('animal') || lowerMessage.includes('живот') || lowerMessage.includes('природ')) {
    return replyBundles[finalLanguage].wildlife || replyBundles.en.wildlife;
  }

  return replyBundles[finalLanguage].generic || replyBundles.en.generic;
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
      reply = buildFallbackReply(message, body.language);
    }

    return sendJson(res, 200, { reply: reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return sendJson(res, 200, {
      reply: buildFallbackReply('I need travel ideas in Indonesia', 'bg')
    });
  }
};
