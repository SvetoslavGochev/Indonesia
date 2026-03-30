// Indonesia Data Module
const INDONESIA_DATA = {
  country: {
    name: 'Indonesia',
    capital: 'Jakarta',
    population: '275,501,339',
    area: '1,904,569 km²',
    continent: 'Asia',
    language: 'Indonesian',
    currency: 'Indonesian Rupiah (IDR)',
    timezone: 'WITA (UTC+8)',
    region: 'Southeast Asia',
    code: 'ID',
    flagEmoji: '🇮🇩'
  },
  cities: [
    {
      rank: 1,
      name: 'Jakarta',
      population: '10,556,500',
      latitude: -6.2088,
      longitude: 106.8456,
      image: 'https://picsum.photos/800/600?random=1',
      description: 'Столицата на Индонезия - оживен град с融合 на модерна архитектура и традиционна култура. Известен със своите висок небостъргачи и натъпканите пазари.',
      highlights: ['Национален монумент', 'Древни храмове', 'Оживен нощен живот', 'Световно известна кухня']
    },
    {
      rank: 2,
      name: 'Surabaya',
      population: '2,853,662',
      latitude: -7.2504,
      longitude: 112.7469,
      image: 'https://picsum.photos/800/600?random=2',
      description: 'Втория по големина град в Индонезия, възпирание като индустриален център. Известен със своята исторически значимост и пристанище.',
      highlights: ['Исторически пристанище', 'Храм Йомо', 'Редки артефакти', 'Морски животът']
    },
    {
      rank: 3,
      name: 'Bandung',
      population: '2,394,373',
      latitude: -6.9175,
      longitude: 107.6062,
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Град в планислинските на Западна Ява, познат със своя прохладен климат и живописни пейзажи. Популярна туристическа дестинация.',
      highlights: ['Чайни плантации', 'Вулкани и термални извори', 'Местни художнини', 'Традиционна архитектура']
    },
    {
      rank: 4,
      name: 'Medan',
      population: '2,097,610',
      latitude: 2.1949,
      longitude: 98.6722,
      image: 'https://picsum.photos/800/600?random=4',
      description: 'Град на остров Суматра, важен търговски център. Известен с разнообразната си культура и многокултурното наследство.',
      highlights: ['Халал пазари', 'Будистки храмове', 'Колониални сгради', 'Екзотични храни']
    },
    {
      rank: 5,
      name: 'Semarang',
      population: '1,555,172',
      latitude: -6.9667,
      longitude: 110.4167,
      image: 'https://picsum.photos/800/600?random=5',
      description: 'Портова град на Ява, комбинация на старо и ново. Известен със своите исторически сгради и морската кухня.',
      highlights: ['Древни форталеззи', 'Колониален дизайн', 'Гарнирен пристанище', 'Местни деликатеси']
    },
    {
      rank: 6,
      name: 'Makassar',
      population: '1,429,412',
      latitude: -5.1477,
      longitude: 119.4327,
      image: 'https://picsum.photos/800/600?random=6',
      description: 'Портова град на Сулавеси, известен със своите красиви плажове и подводен свят. Станало туристическо място за водни спортове.',
      highlights: ['Корални рифове', 'Тропически плажи', 'Подводна фауна', 'Водни спортове']
    },
    {
      rank: 7,
      name: 'Palembang',
      population: '1,455,284',
      latitude: -2.9181,
      longitude: 104.7453,
      image: 'https://picsum.photos/800/600?random=7',
      description: 'Град на Суматра с богата история. Известен със своите древни империи и река Мусай, която протича през град.',
      highlights: ['Древни памятници', 'Историческа река', 'Традиционни кораби', 'Исторически музеи']
    },
    {
      rank: 8,
      name: 'Yogyakarta',
      population: '636,660',
      latitude: -7.8000,
      longitude: 110.3693,
      image: 'https://picsum.photos/800/600?random=8',
      description: 'Град на Ява, духовен и културен център на Индонезия. Известен със своите древни храмове и художествена наследство.',
      highlights: ['Храм Боробудур', 'Древни храмове', 'Художествени гончарства', 'Традиционна танца']
    }
  ]
};

/**
 * Fetch Indonesia data from GeoNames API
 * @param {string} apiKey - GeoNames API key
 * @returns {Promise<Object>} Indonesia data
 */
async function getIndonesiaDataFromAPI(apiKey) {
  const countryName = 'Indonesia';

  try {
    // Fetch country data
    const countryResponse = await fetch(`http://api.geonames.org/searchJSON?q=${countryName}&maxRows=1&username=${apiKey}`);
    const countryData = await countryResponse.json();

    if (countryData.geonames.length === 0) {
      console.log('Страната не е намерена.');
      return null;
    }

    const country = countryData.geonames[0];
    console.log(`Страна: ${country.name}`);
    console.log(`Столица: ${country.adminCode1}`);

    // Fetch major cities
    const citiesResponse = await fetch(`http://api.geonames.org/searchJSON?q=${countryName}&maxRows=8&featureClass=P&username=${apiKey}`);
    const citiesData = await citiesResponse.json();

    if (citiesData.geonames.length === 0) {
      console.log('Градове не са намерени.');
      return null;
    }

    console.log('Топ 8 големи градове:');
    citiesData.geonames.forEach((city, index) => {
      console.log(`${index + 1}. ${city.name} (Популация: ${city.population})`);
    });

    return { country, cities: citiesData.geonames };
  } catch (error) {
    console.error('Грешка при извличане на данни:', error);
    return null;
  }
}

/**
 * Get local Indonesia data
 * @returns {Object} Indonesia data
 */
function getIndonesiaData() {
  return INDONESIA_DATA;
}

/**
 * Print Indonesia data to console
 */
function printIndonesiaData() {
  const data = getIndonesiaData();
  console.log('\n=== ИНФОРМАЦИЯ ЗА ИНДОНЕЗИЯ ===\n');
  console.log(`Страна: ${data.country.name}`);
  console.log(`Столица: ${data.country.capital}`);
  console.log(`Население: ${data.country.population}`);
  console.log(`Площ: ${data.country.area}`);
  console.log(`Валута: ${data.country.currency}`);
  console.log(`Език: ${data.country.language}`);
  console.log(`\nТоп 8 големи градове:`);
  data.cities.forEach((city) => {
    console.log(`  ${city.rank}. ${city.name} - ${city.population} жители`);
  });
  console.log('\n');
}

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    INDONESIA_DATA,
    getIndonesiaData,
    getIndonesiaDataFromAPI,
    printIndonesiaData
  };
}

// Run in Node.js environment
if (typeof window === 'undefined') {
  printIndonesiaData();
}


