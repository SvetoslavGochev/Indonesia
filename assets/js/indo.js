(function () {
  let currentLanguage = 'bg';

  const translations = window.APP_TRANSLATIONS || {};
  const stadiumData = window.STADIUM_DATA || {};
  const indonesiaData = window.INDONESIA_DATA || { country: {}, cities: [] };
  const PAYPAL_PARTNER_URL = (window.PAYPAL_PARTNER_URL || '').trim();
  const BLOG_ARTICLE_URLS = {
    bg: './assets/tekst/indotext.txt?v=20260603',
    en: './assets/tekst/indotext.en.txt?v=20260603',
    de: './assets/tekst/indotext.de.txt?v=20260603',
    fr: './assets/tekst/indotext.fr.txt?v=20260603',
    es: './assets/tekst/indotext.es.txt?v=20260603',
    id: './assets/tekst/indotext.id.txt?v=20260603'
  };
  const DOLPHIN_ARTICLE_URLS = {
    bg: './assets/tekst/Delfin.txt?v=20260610',
    en: './assets/tekst/Delfin.en.txt?v=20260610',
    de: './assets/tekst/Delfin.de.txt?v=20260610',
    fr: './assets/tekst/Delfin.fr.txt?v=20260610',
    es: './assets/tekst/Delfin.es.txt?v=20260610',
    id: './assets/tekst/Delfin.id.txt?v=20260610'
  };
  const WATERWORLD_ARTICLE_URLS = {
    bg: './assets/tekst/waterworld.txt?v=20260609',
    en: './assets/tekst/waterworld.en.txt?v=20260609',
    de: './assets/tekst/waterworld.de.txt?v=20260609',
    fr: './assets/tekst/waterworld.fr.txt?v=20260609',
    es: './assets/tekst/waterworld.es.txt?v=20260609',
    id: './assets/tekst/waterworld.id.txt?v=20260609'
  };
  const BIRDS_ARTICLE_URLS = {
    bg: './assets/tekst/птици.txt?v=20260609',
    en: './assets/tekst/birds.en.txt?v=20260609',
    de: './assets/tekst/birds.de.txt?v=20260609',
    fr: './assets/tekst/birds.fr.txt?v=20260609',
    es: './assets/tekst/birds.es.txt?v=20260609',
    id: './assets/tekst/birds.id.txt?v=20260609'
  };
  const CRUISE_ARTICLE_URLS = {
    bg: './assets/tekst/круиз.txt?v=20260621',
    en: './assets/tekst/круиз.en.txt?v=20260621',
    de: './assets/tekst/круиз.de.txt?v=20260621',
    fr: './assets/tekst/круиз.fr.txt?v=20260621',
    es: './assets/tekst/круиз.es.txt?v=20260621',
    id: './assets/tekst/круиз.id.txt?v=20260621'
  };
  const LOMBOK_ARTICLE_URLS = {
    bg: './assets/tekst/ламбо.txt?v=20260618',
    en: './assets/tekst/ламбо.en.txt?v=20260618',
    de: './assets/tekst/ламбо.de.txt?v=20260618',
    fr: './assets/tekst/ламбо.fr.txt?v=20260618',
    es: './assets/tekst/ламбо.es.txt?v=20260618',
    id: './assets/tekst/ламбо.id.txt?v=20260618'
  };
  const SPORTS_ARTICLE_URLS = {
    bg: './assets/tekst/sportstot7.txt?v=20260728',
    en: './assets/tekst/sportstot7.en.txt?v=20260728',
    de: './assets/tekst/sportstot7.de.txt?v=20260728',
    fr: './assets/tekst/sportstot7.fr.txt?v=20260728',
    es: './assets/tekst/sportstot7.es.txt?v=20260728',
    id: './assets/tekst/sportstot7.id.txt?v=20260728'
  };
  const TOP3_FOOD_ARTICLE_URLS = {
    bg: './assets/tekst/top3hranaInd.txt?v=20260630a',
    en: './assets/tekst/top3hranaInd.en.txt?v=20260630a',
    de: './assets/tekst/top3hranaInd.de.txt?v=20260630a',
    fr: './assets/tekst/top3hranaInd.fr.txt?v=20260630a',
    es: './assets/tekst/top3hranaInd.es.txt?v=20260630a',
    id: './assets/tekst/top3hranaInd.id.txt?v=20260630a'
  };
  const FRUITS_ARTICLE_URLS = {
    bg: './assets/tekst/plodowe.txt?v=20260702c',
    en: './assets/tekst/plodowe.en.txt?v=20260701b',
    de: './assets/tekst/plodowe.de.txt?v=20260701b',
    fr: './assets/tekst/plodowe.fr.txt?v=20260701b',
    es: './assets/tekst/plodowe.es.txt?v=20260701b',
    id: './assets/tekst/plodowe.id.txt?v=20260701b'
  };
  const TREES_ARTICLE_URLS = {
    bg: './assets/tekst/dyrweta.txt?v=20260710a',
    en: './assets/tekst/dyrweta.en.txt?v=20260710a',
    de: './assets/tekst/dyrweta.de.txt?v=20260710a',
    fr: './assets/tekst/dyrweta.fr.txt?v=20260710a',
    es: './assets/tekst/dyrweta.es.txt?v=20260710a',
    id: './assets/tekst/dyrweta.id.txt?v=20260710a'
  };
  const PARKS_ARTICLE_URLS = {
    bg: './assets/tekst/parkove.txt?v=20260703b',
    en: './assets/tekst/parkove.en.txt?v=20260703b',
    de: './assets/tekst/parkove.de.txt?v=20260703b',
    fr: './assets/tekst/parkove.fr.txt?v=20260703b',
    es: './assets/tekst/parkove.es.txt?v=20260703b',
    id: './assets/tekst/parkove.id.txt?v=20260703b'
  };
  const REKI_ARTICLE_URLS = {
    bg: './assets/tekst/reki.txt?v=20260701a',
    en: './assets/tekst/reki.en.txt?v=20260701a',
    de: './assets/tekst/reki.de.txt?v=20260701a',
    fr: './assets/tekst/reki.fr.txt?v=20260701a',
    es: './assets/tekst/reki.es.txt?v=20260701a',
    id: './assets/tekst/reki.id.txt?v=20260701a'
  };
  const VOLCANO_ARTICLE_URLS = {
    bg: './assets/tekst/vulkani.txt?v=20260707a',
    en: './assets/tekst/vulkani.en.txt?v=20260707a',
    de: './assets/tekst/vulkani.de.txt?v=20260707a',
    fr: './assets/tekst/vulkani.fr.txt?v=20260707a',
    es: './assets/tekst/vulkani.es.txt?v=20260707a',
    id: './assets/tekst/vulkani.id.txt?v=20260707a'
  };
  const TRAIN_STORY_ARTICLE_URLS = {
    bg: './assets/tekst/vlak1.txt?v=20260704b',
    en: './assets/tekst/vlak1.en.txt?v=20260704b',
    de: './assets/tekst/vlak1.de.txt?v=20260704b',
    fr: './assets/tekst/vlak1.fr.txt?v=20260704b',
    es: './assets/tekst/vlak1.es.txt?v=20260704b',
    id: './assets/tekst/vlak1.id.txt?v=20260704b'
  };
  const BORNEO_ARTICLE_URLS = {
    bg: './assets/tekst/borneoPytuvane.txt?v=20260704a'
  };
  const MOTORSPORT_ARTICLE_URLS = {
    bg: './assets/tekst/motorsport.txt?v=20260704a'
  };
  const PALEMBANG_ARTICLE_URLS = {
    bg: './assets/tekst/pytepisPalembeng.txt?v=20260706c',
    en: './assets/tekst/pytepisPalembeng.en.txt?v=20260706c',
    de: './assets/tekst/pytepisPalembeng.de.txt?v=20260706c',
    fr: './assets/tekst/pytepisPalembeng.fr.txt?v=20260706c',
    es: './assets/tekst/pytepisPalembeng.es.txt?v=20260706c',
    id: './assets/tekst/pytepisPalembeng.id.txt?v=20260706c'
  };
  const FOOTBALL_ARTICLE_URLS = {
    bg: './assets/tekst/football2.txt?v=20260712c',
    en: './assets/tekst/football2.en.txt?v=20260712c',
    de: './assets/tekst/football2.de.txt?v=20260712c',
    fr: './assets/tekst/football2.fr.txt?v=20260712c',
    es: './assets/tekst/football2.es.txt?v=20260712c',
    id: './assets/tekst/football2.id.txt?v=20260712c'
  };
  const UNING_BROMO_ARTICLE_URLS = {
    bg: './assets/tekst/UningBromo.bg.txt?v=20260727a',
    en: './assets/tekst/UningBromo.en.txt?v=20260727a',
    de: './assets/tekst/UningBromo.de.txt?v=20260727a',
    fr: './assets/tekst/UningBromo.fr.txt?v=20260727a',
    es: './assets/tekst/UningBromo.es.txt?v=20260727a',
    id: './assets/tekst/UningBromo.id.txt?v=20260727a'
  };
  const SMQH_ARTICLE_URLS = {
    bg: './assets/tekst/smqh.txt?v=20260807a'
  };
  const CAR_KALOQN_ARTICLE_URLS = {
    bg: './assets/tekst/carKaloqn.txt?v=20260814a',
    en: './assets/tekst/carKaloqn.en.txt?v=20260814a',
    de: './assets/tekst/carKaloqn.de.txt?v=20260814a',
    fr: './assets/tekst/carKaloqn.fr.txt?v=20260814a',
    es: './assets/tekst/carKaloqn.es.txt?v=20260814a',
    id: './assets/tekst/carKaloqn.id.txt?v=20260814a'
  };
  const TERVEL_ARTICLE_URLS = {
    bg: './assets/tekst/ТЕРВЕЛСПАСИТЕЛЯ.TXT?v=20260814c',
    en: './assets/tekst/tervel.en.txt?v=20260814c',
    de: './assets/tekst/tervel.de.txt?v=20260814c',
    fr: './assets/tekst/tervel.fr.txt?v=20260814c',
    es: './assets/tekst/tervel.es.txt?v=20260814c',
    id: './assets/tekst/tervel.id.txt?v=20260814c'
  };
  const DOIRAN_ARTICLE_URLS = {
    bg: './assets/tekst/бИТКАТАПРИДОИРАН.txt?v=20260814b',
    en: './assets/tekst/doiran.en.txt?v=20260814b',
    de: './assets/tekst/doiran.de.txt?v=20260814b',
    fr: './assets/tekst/doiran.fr.txt?v=20260814b',
    es: './assets/tekst/doiran.es.txt?v=20260814b',
    id: './assets/tekst/doiran.id.txt?v=20260814b'
  };
  const METAMASK_WALLET_ADDRESS = '0xfca710eC5eB0FB036157Bb1E114BADc2310efE37';
  const PARTNER_INSTAGRAM_URL = (window.PARTNER_INSTAGRAM_URL || 'https://www.instagram.com/indo.nesiaexplorerr/').trim();
  const PARTNER_FACEBOOK_URL = (window.PARTNER_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61592328399672').trim();
  const PARTNER_X_URL = (window.PARTNER_X_URL || 'https://x.com/').trim();
  const FRESHWATER_ARTICLE_URLS = {
    bg: './assets/tekst/sladkowodniRibi.txt?v=20260702c'
  };
  const LAND_ANIMALS_ARTICLE_URLS = {
    bg: './assets/tekst/zemniviwotni.txt?v=20260703b',
    en: './assets/tekst/zemniviwotni.en.txt?v=20260703b',
    de: './assets/tekst/zemniviwotni.de.txt?v=20260703b',
    fr: './assets/tekst/zemniviwotni.fr.txt?v=20260703b',
    es: './assets/tekst/zemniviwotni.es.txt?v=20260703b',
    id: './assets/tekst/zemniviwotni.id.txt?v=20260703b'
  };

  const treesArticleByLanguage = {};
  const parksArticleByLanguage = {};

  const marineAnimals = [
    {
      image: './assets/images/marine-dolphin.jpg',
      waterworldMatchBg: ['делфинът', 'делфин'],
      waterworldSectionIndex: 1,
      name_bg: 'Делфин',
      name_en: 'Dolphin',
      name_de: 'Delfin',
      name_fr: 'Dauphin',
      name_es: 'Delfin',
      name_id: 'Lumba-lumba'
    },
    {
      image: './assets/images/marine-sea-turtle.jpg',
      waterworldMatchBg: ['морската костенурка', 'костенурка'],
      waterworldSectionIndex: 3,
      name_bg: 'Морска костенурка',
      name_en: 'Sea Turtle',
      name_de: 'Meeresschildkrote',
      name_fr: 'Tortue de mer',
      name_es: 'Tortuga marina',
      name_id: 'Penyu laut'
    },
    {
      image: './assets/images/marine-manta-ray.jpg',
      waterworldMatchBg: ['гигантската манта', 'манта'],
      waterworldSectionIndex: 2,
      name_bg: 'Манта',
      name_en: 'Manta Ray',
      name_de: 'Manta-Rochen',
      name_fr: 'Raie manta',
      name_es: 'Manta raya',
      name_id: 'Pari manta'
    },
    {
      image: './assets/images/marine-coral-fish.jpg',
      waterworldMatchBg: ['коралната риба', 'корална риба', 'клоунска риба'],
      waterworldSectionIndex: 4,
      name_bg: 'Корална риба',
      name_en: 'Coral Fish',
      name_de: 'Korallenfisch',
      name_fr: 'Poisson de recif',
      name_es: 'Pez de coral',
      name_id: 'Ikan karang'
    },
    {
      image: './assets/images/marine-seahorse.jpg',
      waterworldMatchBg: ['морски конче', 'морско конче', 'hippocampus'],
      waterworldSectionIndex: 6,
      name_bg: 'Морско конче',
      name_en: 'Seahorse',
      name_de: 'Seepferdchen',
      name_fr: 'Hippocampe',
      name_es: 'Caballito de mar',
      name_id: 'Kuda laut'
    },
    {
      image: './assets/images/marine-whale-shark.jpg',
      waterworldMatchBg: ['китовата акула', 'китова акула'],
      waterworldSectionIndex: 5,
      name_bg: 'Китова акула',
      name_en: 'Whale Shark',
      name_de: 'Walhai',
      name_fr: 'Requin-baleine',
      name_es: 'Tiburon ballena',
      name_id: 'Hiu paus'
    },
    {
      image: './assets/images/ribaLuna.jpeg',
      articleUrls: {
        bg: './assets/tekst/ribaLuna.txt?v=20260806',
        en: './assets/tekst/ribaLuna.en.txt?v=20260806'
      },
      name_bg: 'Риба Луна',
      name_en: 'Mola Mola',
      name_de: 'Mondfisch',
      name_fr: 'Poisson-lune',
      name_es: 'Pez luna',
      name_id: 'Mola Mola'
    },
    {
      image: './assets/images/sinOKtopod.jpeg',
      articleUrls: {
        bg: './assets/tekst/sinioprastenOktopod.txt?v=20260806',
        en: './assets/tekst/sinioprastenOktopod.en.txt?v=20260806'
      },
      name_bg: 'Синьопръстенен октопод',
      name_en: 'Blue-ringed Octopus',
      name_de: 'Blaugeringelter Oktopus',
      name_fr: 'Poulpe a anneaux bleus',
      name_es: 'Pulpo de anillos azules',
      name_id: 'Gurita cincin biru'
    }
  ];

  const sunBearSvg = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="Sun Bear illustration">
      <defs>
        <linearGradient id="bg" x1="0" x2="1">
          <stop offset="0%" stop-color="#dfead4"/>
          <stop offset="100%" stop-color="#5b7d52"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="750" fill="url(#bg)"/>
      <ellipse cx="600" cy="610" rx="360" ry="120" fill="#3e332b" opacity="0.18"/>
      <rect x="0" y="0" width="1200" height="750" fill="transparent"/>
      <g transform="translate(135 35)">
        <ellipse cx="435" cy="370" rx="270" ry="250" fill="#1d1d1f"/>
        <ellipse cx="395" cy="565" rx="145" ry="90" fill="#1a1a1a"/>
        <ellipse cx="580" cy="565" rx="155" ry="90" fill="#1a1a1a"/>
        <ellipse cx="435" cy="225" rx="150" ry="120" fill="#0f1113"/>
        <ellipse cx="390" cy="240" rx="50" ry="35" fill="#d0b287"/>
        <ellipse cx="492" cy="240" rx="48" ry="35" fill="#d0b287"/>
        <circle cx="402" cy="242" r="8" fill="#1d1d1f"/>
        <circle cx="476" cy="242" r="8" fill="#1d1d1f"/>
        <ellipse cx="440" cy="260" rx="18" ry="12" fill="#2e2a28"/>
        <ellipse cx="443" cy="310" rx="62" ry="48" fill="#d4a46a"/>
        <path d="M405 300c20 38 70 50 98 18" fill="none" stroke="#77552d" stroke-width="8" stroke-linecap="round"/>
        <path d="M345 300l-115 25l-10 65l125 10z" fill="#1b1b1b"/>
        <path d="M520 290l115 20l20 70l-125 8z" fill="#1b1b1b"/>
        <path d="M350 280c-12-52 18-120 80-146" fill="none" stroke="#c9b78d" stroke-width="18" stroke-linecap="round"/>
        <path d="M530 282c18-54 54-92 110-120" fill="none" stroke="#d0be95" stroke-width="18" stroke-linecap="round"/>
        <path d="M505 326c125 26 228 86 260 199" fill="none" stroke="#1d1d1f" stroke-width="28" stroke-linecap="round"/>
        <path d="M340 332c-116 18-181 93-203 201" fill="none" stroke="#1d1d1f" stroke-width="28" stroke-linecap="round"/>
        <path d="M350 392c70 22 130 44 198 42" fill="none" stroke="#d4a46a" stroke-width="26" stroke-linecap="round"/>
        <path d="M350 430c72 16 126 26 188 22" fill="none" stroke="#c58d4b" stroke-width="14" stroke-linecap="round"/>
      </g>
    </svg>
  `);

  const anoaSvg = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="Anoa illustration">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stop-color="#d2d5d9"/>
          <stop offset="100%" stop-color="#7f8b8e"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="750" fill="#d8d0b4"/>
      <ellipse cx="600" cy="620" rx="420" ry="80" fill="#8a8a7d" opacity="0.2"/>
      <g transform="translate(95 75)">
        <path d="M170 460c36-146 104-212 186-228c72-13 170 0 220 58c60 68 64 186 40 230c-36 65-117 126-169 136c-119 23-243-22-277-196z" fill="#111316"/>
        <path d="M425 255l96-90l52 31l-44 88l-104 3z" fill="#13171a"/>
        <path d="M386 260l-58-116l-55 58l70 92z" fill="#101214"/>
        <path d="M460 270l82-118l96 18l-80 118z" fill="#111316"/>
        <path d="M365 310c70-21 132-22 202 0" fill="none" stroke="#727b7f" stroke-width="9" stroke-linecap="round"/>
        <path d="M325 420c56 18 90 38 110 76" fill="none" stroke="#111316" stroke-width="20" stroke-linecap="round"/>
        <path d="M492 420c62 18 100 40 124 86" fill="none" stroke="#111316" stroke-width="22" stroke-linecap="round"/>
        <path d="M360 520l-58 150" stroke="#111316" stroke-width="26" stroke-linecap="round"/>
        <path d="M528 523l70 155" stroke="#111316" stroke-width="26" stroke-linecap="round"/>
        <path d="M620 510l101 145" stroke="#111316" stroke-width="28" stroke-linecap="round"/>
        <path d="M246 520l-36 150" stroke="#111316" stroke-width="26" stroke-linecap="round"/>
        <path d="M463 195c12-12 28-18 46-18c20 0 42 8 57 22" fill="none" stroke="#a9b1b3" stroke-width="9" stroke-linecap="round"/>
        <circle cx="453" cy="276" r="9" fill="#e9f0f4"/>
        <circle cx="560" cy="276" r="9" fill="#e9f0f4"/>
        <path d="M455 300c19 21 55 21 75 0" fill="none" stroke="#7e5f48" stroke-width="7" stroke-linecap="round"/>
      </g>
    </svg>
  `);

  const landAnimals = [
    {
      image: './assets/images/land-rhino.jpg',
      sectionIndex: 0,
      speedKmh: '40',
      weightKg: '900-2300',
      name_bg: 'Явански носорог',
      name_en: 'Javan Rhino',
      name_de: 'Java-Nashorn',
      name_fr: 'Rhinoceros de Java',
      name_es: 'Rinoceronte de Java',
      name_id: 'Badak Jawa'
    },
    {
      image: './assets/images/land-tiger.jpg',
      sectionIndex: 1,
      speedKmh: '65',
      weightKg: '90-140 / 65-90',
      name_bg: 'Суматренски тигър',
      name_en: 'Sumatran Tiger',
      name_de: 'Sumatra-Tiger',
      name_fr: 'Tigre de Sumatra',
      name_es: 'Tigre de Sumatra',
      name_id: 'Harimau Sumatra'
    },
    {
      image: './assets/images/land-orangutan.jpg',
      sectionIndex: 2,
      speedKmh: '5-10',
      weightKg: '50-120 / 30-50',
      name_bg: 'Орангутан',
      name_en: 'Orangutan',
      name_de: 'Orang-Utan',
      name_fr: 'Orang-outan',
      name_es: 'Orangutan',
      name_id: 'Orangutan'
    },
    {
      image: './assets/images/land-komodo.jpg',
      sectionIndex: 3,
      speedKmh: '20',
      weightKg: '70-90',
      name_bg: 'Комодски варан',
      name_en: 'Komodo Dragon',
      name_de: 'Komodowaran',
      name_fr: 'Dragon de Komodo',
      name_es: 'Dragon de Komodo',
      name_id: 'Komodo'
    },
    {
      image: './assets/images/land-elephant.jpg',
      sectionIndex: 4,
      speedKmh: '15-20',
      weightKg: '2000-4000',
      name_bg: 'Суматренски слон',
      name_en: 'Sumatran Elephant',
      name_de: 'Sumatra-Elefant',
      name_fr: 'Elephant de Sumatra',
      name_es: 'Elefante de Sumatra',
      name_id: 'Gajah Sumatra'
    },
    {
      image: './assets/images/land-babirusa.jpg',
      sectionIndex: 5,
      speedKmh: '40',
      weightKg: '60-100',
      name_bg: 'Бабируса',
      name_en: 'Babirusa',
      name_de: 'Babirusa',
      name_fr: 'Babiroussa',
      name_es: 'Babirusa',
      name_id: 'Babirusa'
    },
    {
      image: './assets/images/sumatrenskaMechka.png',
      articleUrls: {
        bg: './assets/tekst/sumatranskaMechka.txt?v=20260812',
        en: './assets/tekst/zemniviwotni.en.txt?v=20260703b'
      },
      sectionIndex: 6,
      speedKmh: '25-35',
      weightKg: '25-80',
      name_bg: 'Суматранска мечка',
      name_en: 'Sun Bear',
      name_de: 'Sonnenbär',
      name_fr: 'Ours malais',
      name_es: 'Oso solar',
      name_id: 'Beruang madu'
    },
    {
      image: './assets/images/аноа (2).png',
      articleUrls: {
        bg: './assets/tekst/anoa.txt?v=20260812',
        en: './assets/tekst/zemniviwotni.en.txt?v=20260703b'
      },
      sectionIndex: 7,
      speedKmh: '20-30',
      weightKg: '150-300',
      name_bg: 'Аноа',
      name_en: 'Anoa',
      name_de: 'Anoa',
      name_fr: 'Anoa',
      name_es: 'Anoa',
      name_id: 'Anoa'
    }
  ];

  const birds = [
    {
      image: './assets/images/bird-javan-ostrich-960.webp',
      imageSmall: './assets/images/bird-javan-ostrich-480.webp',
      imageLarge: './assets/images/bird-javan-ostrich-960.webp',
      sectionIndex: 0,
      name_bg: 'Явански щраус',
      name_en: 'Javan Ostrich',
      name_de: 'Javanischer Strauss',
      name_fr: 'Autruche de Java',
      name_es: 'Avestruz de Java',
      name_id: 'Burung unta Jawa'
    },
    {
      image: './assets/images/bird-cockatoo-960.webp',
      imageSmall: './assets/images/bird-cockatoo-480.webp',
      imageLarge: './assets/images/bird-cockatoo-960.webp',
      sectionIndex: 1,
      name_bg: 'Какаду',
      name_en: 'Cockatoo',
      name_de: 'Kakadu',
      name_fr: 'Cacatoes',
      name_es: 'Cacatua',
      name_id: 'Kakatua'
    },
    {
      image: './assets/images/bird-harpy-eagle-960.webp',
      imageSmall: './assets/images/bird-harpy-eagle-480.webp',
      imageLarge: './assets/images/bird-harpy-eagle-960.webp',
      sectionIndex: 2,
      name_bg: 'Кралски орел',
      name_en: 'Harpy Eagle',
      name_de: 'Kronenadler',
      name_fr: 'Aigle harpie',
      name_es: 'Aguila harpía',
      name_id: 'Elang harpy'
    },
    {
      image: './assets/images/bird-hornbill-960.webp',
      imageSmall: './assets/images/bird-hornbill-480.webp',
      imageLarge: './assets/images/bird-hornbill-960.webp',
      sectionIndex: 3,
      name_bg: 'Птицата-носорог',
      name_en: 'Hornbill',
      name_de: 'Nashornvogel',
      name_fr: 'Calao',
      name_es: 'Calao',
      name_id: 'Rangkong'
    },
    {
      image: './assets/images/bird-paradise-bird-960.webp',
      imageSmall: './assets/images/bird-paradise-bird-480.webp',
      imageLarge: './assets/images/bird-paradise-bird-960.webp',
      sectionIndex: 4,
      name_bg: 'Райска птица',
      name_en: 'Bird-of-paradise',
      name_de: 'Paradiesvogel',
      name_fr: 'Oiseau de paradis',
      name_es: 'Ave del paraiso',
      name_id: 'Cenderawasih'
    },
    {
      image: './assets/images/bird-green-parrot-960.webp',
      imageSmall: './assets/images/bird-green-parrot-480.webp',
      imageLarge: './assets/images/bird-green-parrot-960.webp',
      sectionIndex: 5,
      name_bg: 'Зелен папагал',
      name_en: 'Green Parrot',
      name_de: 'Gruner Papagei',
      name_fr: 'Perroquet vert',
      name_es: 'Loro verde',
      name_id: 'Burung nuri hijau'
    },
    {
      image: './assets/images/bird-javan-pheasant-960.webp',
      imageSmall: './assets/images/bird-javan-pheasant-480.webp',
      imageLarge: './assets/images/bird-javan-pheasant-960.webp',
      sectionIndex: 6,
      name_bg: 'Явански фазан',
      name_en: 'Javan Pheasant',
      name_de: 'Javanischer Fasan',
      name_fr: 'Faisan de Java',
      name_es: 'Faisan de Java',
      name_id: 'Pegar Jawa'
    },
    {
      image: './assets/images/bird-myna-960.webp',
      imageSmall: './assets/images/bird-myna-480.webp',
      imageLarge: './assets/images/bird-myna-960.webp',
      sectionIndex: 7,
      name_bg: 'Майна',
      name_en: 'Myna',
      name_de: 'Maina',
      name_fr: 'Mainate',
      name_es: 'Miná',
      name_id: 'Jalak'
    }
  ];

  const fruits = [
    {
      image: './assets/images/fruit-mangosteen.webp',
      sectionIndex: 0,
      name_bg: 'Мангостан',
      name_en: 'Mangosteen',
      name_de: 'Mangostan',
      name_fr: 'Mangoustan',
      name_es: 'Mangostan',
      name_id: 'Manggis'
    },
    {
      image: './assets/images/fruit-jackfruit.webp',
      sectionIndex: 1,
      name_bg: 'Джакфрут',
      name_en: 'Jackfruit',
      name_de: 'Jackfrucht',
      name_fr: 'Jacquier',
      name_es: 'Yaca',
      name_id: 'Nangka'
    },
    {
      image: './assets/images/fruit-rambutan.webp',
      sectionIndex: 2,
      name_bg: 'Рамбутан',
      name_en: 'Rambutan',
      name_de: 'Rambutan',
      name_fr: 'Ramboutan',
      name_es: 'Rambutan',
      name_id: 'Rambutan'
    },
    {
      image: './assets/images/fruit-longan.webp',
      sectionIndex: 3,
      name_bg: 'Лонган',
      name_en: 'Longan',
      name_de: 'Longan',
      name_fr: 'Longane',
      name_es: 'Longan',
      name_id: 'Longan'
    },
    {
      image: './assets/images/fruit-salak.webp',
      sectionIndex: 4,
      name_bg: 'Салак',
      name_en: 'Salak',
      name_de: 'Schlangenfrucht',
      name_fr: 'Salak',
      name_es: 'Salak',
      name_id: 'Salak'
    },
    {
      image: './assets/images/fruit-durian.webp',
      sectionIndex: 5,
      name_bg: 'Дуриан',
      name_en: 'Durian',
      name_de: 'Durian',
      name_fr: 'Durian',
      name_es: 'Durian',
      name_id: 'Durian'
    }
  ];

  const trees = [
    {
      image: './assets/images/tree-ulin.jpg',
      sectionIndex: 0,
      name_bg: 'Улин',
      name_en: 'Ulin (Ironwood)',
      name_de: 'Ulin (Eisenholz)',
      name_fr: 'Ulin (bois de fer)',
      name_es: 'Ulin (madera de hierro)',
      name_id: 'Ulin (kayu besi)'
    },
    {
      image: './assets/images/tree-amber.webp',
      sectionIndex: 1,
      name_bg: 'Амбър',
      name_en: 'Amber Tree',
      name_de: 'Bernsteibaum',
      name_fr: 'Arbre ambré',
      name_es: 'Arbol ámbar',
      name_id: 'Pohon damar'
    },
    {
      image: './assets/images/tree-teak.webp',
      sectionIndex: 2,
      name_bg: 'Теака',
      name_en: 'Teak',
      name_de: 'Teak',
      name_fr: 'Teck',
      name_es: 'Teca',
      name_id: 'Jati'
    },
    {
      image: './assets/images/tree-mangrove.webp',
      sectionIndex: 3,
      name_bg: 'Мангрови дървета',
      name_en: 'Mangrove',
      name_de: 'Mangrove',
      name_fr: 'Mangrove',
      name_es: 'Mangle',
      name_id: 'Bakau'
    },
    {
      image: './assets/images/tree-casuarina.webp',
      sectionIndex: 4,
      name_bg: 'Казуарина',
      name_en: 'Casuarina',
      name_de: 'Kasuarine',
      name_fr: 'Casuarina',
      name_es: 'Casuarina',
      name_id: 'Cemara laut'
    },
    {
      image: './assets/images/tree-banyan.webp',
      sectionIndex: 5,
      name_bg: 'Баньян',
      name_en: 'Banyan',
      name_de: 'Banyanbaum',
      name_fr: 'Banyan',
      name_es: 'Baniano',
      name_id: 'Beringin'
    }
  ];

  const parks = [
    {
      image: './assets/images/park-komodo.jpg',
      sectionIndex: 0,
      name_bg: 'Комодо',
      name_en: 'Komodo National Park',
      name_de: 'Komodo-Nationalpark',
      name_fr: 'Parc national de Komodo',
      name_es: 'Parque nacional de Komodo',
      name_id: 'Taman Nasional Komodo'
    },
    {
      image: './assets/images/park-bromo.jpg',
      sectionIndex: 1,
      name_bg: 'Бромо-Тенгер-Семеру',
      name_en: 'Bromo Tengger Semeru National Park',
      name_de: 'Nationalpark Bromo-Tengger-Semeru',
      name_fr: 'Parc national Bromo-Tengger-Semeru',
      name_es: 'Parque nacional Bromo-Tengger-Semeru',
      name_id: 'Taman Nasional Bromo Tengger Semeru'
    },
    {
      image: './assets/images/park-ujung-kulon.jpg',
      sectionIndex: 2,
      name_bg: 'Уджунг Кулон',
      name_en: 'Ujung Kulon National Park',
      name_de: 'Ujung-Kulon-Nationalpark',
      name_fr: 'Parc national d’Ujung Kulon',
      name_es: 'Parque nacional Ujung Kulon',
      name_id: 'Taman Nasional Ujung Kulon'
    },
    {
      image: './assets/images/park-gunung-leuser.jpg',
      sectionIndex: 3,
      name_bg: 'Гунунг Лейзер',
      name_en: 'Gunung Leuser National Park',
      name_de: 'Gunung-Leuser-Nationalpark',
      name_fr: 'Parc national de Gunung Leuser',
      name_es: 'Parque nacional Gunung Leuser',
      name_id: 'Taman Nasional Gunung Leuser'
    },
    {
      image: './assets/images/park-lorentz.jpg',
      sectionIndex: 4,
      name_bg: 'Лоренц',
      name_en: 'Lorentz National Park',
      name_de: 'Lorentz-Nationalpark',
      name_fr: 'Parc national de Lorentz',
      name_es: 'Parque nacional Lorentz',
      name_id: 'Taman Nasional Lorentz'
    },
    {
      image: './assets/images/park-tanjung-puting.jpg',
      sectionIndex: 5,
      name_bg: 'Танджунг Путинг',
      name_en: 'Tanjung Puting National Park',
      name_de: 'Tanjung-Puting-Nationalpark',
      name_fr: 'Parc national de Tanjung Puting',
      name_es: 'Parque nacional Tanjung Puting',
      name_id: 'Taman Nasional Tanjung Puting'
    }
  ];

  const freshwaterAnimals = [
    {
      image: './assets/images/freshwater-gourami.webp',
      sectionIndex: 0,
      speedKmh: 6,
      weightKg: 8,
      name_bg: 'Гурами',
      name_en: 'Gourami',
      name_de: 'Gurami',
      name_fr: 'Gourami',
      name_es: 'Gurami',
      name_id: 'Gurami'
    },
    {
      image: './assets/images/freshwater-catfish.webp',
      sectionIndex: 1,
      speedKmh: 8,
      weightKg: 1.5,
      name_bg: 'Леле',
      name_en: 'Catfish',
      name_de: 'Wels',
      name_fr: 'Poisson-chat',
      name_es: 'Bagre',
      name_id: 'Lele'
    },
    {
      image: './assets/images/freshwater-tilapia.webp',
      sectionIndex: 2,
      speedKmh: 11,
      weightKg: 4,
      name_bg: 'Тилапия',
      name_en: 'Tilapia',
      name_de: 'Tilapia',
      name_fr: 'Tilapia',
      name_es: 'Tilapia',
      name_id: 'Nila'
    },
    {
      image: './assets/images/freshwater-snakehead.webp',
      sectionIndex: 3,
      speedKmh: 15,
      weightKg: 7,
      name_bg: 'Икан Села',
      name_en: 'Snakehead',
      name_de: 'Schlangenkopffisch',
      name_fr: 'Poisson-serpent',
      name_es: 'Pez cabeza de serpiente',
      name_id: 'Ikan Gabus'
    },
    {
      image: './assets/images/freshwater-prawn.webp',
      sectionIndex: 4,
      speedKmh: 7,
      weightKg: 0.3,
      name_bg: 'Икан Бау',
      name_en: 'Freshwater Prawn',
      name_de: 'Susswassergarnele',
      name_fr: 'Crevette d\'eau douce',
      name_es: 'Langostino de agua dulce',
      name_id: 'Udang galah'
    },
    {
      image: './assets/images/freshwater-nile-perch.webp',
      sectionIndex: 5,
      speedKmh: 30,
      weightKg: 200,
      name_bg: 'Икан Нил',
      name_en: 'Nile Perch',
      name_de: 'Nilbarsch',
      name_fr: 'Perche du Nil',
      name_es: 'Perca del Nilo',
      name_id: 'Ikan nil'
    }
  ];

  const rekiSectionsByLanguage = {};
  const volcanoSectionsByLanguage = {};
  const trainArticleByLanguage = {};
  const trainStoryArticleByLanguage = {};
  const borneoArticleByLanguage = {};
  const motorsportArticleByLanguage = {};
  const palembangArticleByLanguage = {};
  const footballArticleByLanguage = {};
  const uningBromoArticleByLanguage = {};
  const smqhArticleByLanguage = {};
  const carKaloqnArticleByLanguage = {};
  const tervelArticleByLanguage = {};
  const doiranArticleByLanguage = {};

  const countryInfoFields = [
    { labelKey: 'capital', value: indonesiaData.country.capital, id: 'capitalLabel' },
    { labelKey: 'population', value: indonesiaData.country.population, id: 'populationInfoLabel' },
    { labelKey: 'area', value: indonesiaData.country.area, id: 'areaLabel' },
    { labelKey: 'language', value: indonesiaData.country.language, id: 'languageLabel' },
    { labelKey: 'currency', value: indonesiaData.country.currency, id: 'currencyLabel' },
    { labelKey: 'continent', value: indonesiaData.country.continent, id: 'continentLabel' }
  ];

  const stadiumFieldBindings = [
    ['stadiumCapacityLabel', 'stadiumCapacityLabel'],
    ['stadiumOpenedLabel', 'stadiumOpenedLabel'],
    ['stadiumUseLabel', 'stadiumUseLabel'],
    ['stadiumCapacityValue', 'stadiumCapacityValue'],
    ['stadiumOpenedValue', 'stadiumOpenedValue'],
    ['stadiumUseValue', 'stadiumUseValue']
  ];

  const hotelEstimateBgnByName = {
    'Hotel Indonesia Kempinski Jakarta': 620,
    'Mandarin Oriental Jakarta': 560,
    'The Ritz-Carlton Jakarta, Pacific Place': 690,
    'Shangri-La Jakarta': 540,
    'Fairmont Jakarta': 600,
    'Hotel Majapahit Surabaya': 280,
    'JW Marriott Hotel Surabaya': 360,
    'Sheraton Surabaya Hotel & Towers': 330,
    'Shangri-La Surabaya': 350,
    'DoubleTree by Hilton Surabaya': 300,
    'Hilton Bandung': 270,
    'InterContinental Bandung Dago Pakar': 340,
    'The Trans Luxury Hotel Bandung': 320,
    'Padma Hotel Bandung': 360,
    'Courtyard by Marriott Bandung Dago': 250,
    'JW Marriott Hotel Medan': 320,
    'Adimulia Hotel Medan': 250,
    'Aryaduta Medan': 220,
    'Cambridge Hotel Medan': 230,
    'Grand Mercure Medan Angkasa': 240,
    'PO Hotel Semarang': 230,
    'Gumaya Tower Hotel': 260,
    'Hotel Tentrem Semarang': 330,
    'Padma Hotel Semarang': 310,
    'Novotel Semarang': 210,
    'The Rinra Makassar': 230,
    'Claro Makassar': 200,
    'Aryaduta Makassar': 210,
    'Swiss-Belhotel Makassar': 190,
    'Four Points by Sheraton Makassar': 250,
    'Aryaduta Palembang': 210,
    'The Arista Hotel Palembang': 230,
    'The Alts Hotel Palembang': 220,
    'Wyndham Opi Hotel Palembang': 260,
    'Harper Palembang': 180,
    'Hotel Tentrem Yogyakarta': 330,
    'Hyatt Regency Yogyakarta': 280,
    'The Phoenix Hotel Yogyakarta': 220,
    'Yogyakarta Marriott Hotel': 300,
    'Melia Purosani Yogyakarta': 260
  };

  const dom = {};
  let contentRendered = false;
  const blogArticleTextByLanguage = {};
  const dolphinArticleTextByLanguage = {};
  const waterworldSectionsByLanguage = {};
  const marineAnimalArticleTextByLanguage = {};
  const cruiseArticleTextByLanguage = {};
  const birdSectionsByLanguage = {};
  const lombokArticleTextByLanguage = {};
  const sportsArticleTextByLanguage = {};
  const top3FoodArticleTextByLanguage = {};
  const fruitSectionsByLanguage = {};
  const landSectionsByLanguage = {};
  const freshwaterSectionsByLanguage = {};
  const parksSectionsByLanguage = {};

  function cacheDomElements() {
    dom.bgBtn = document.getElementById('bgBtn');
    dom.enBtn = document.getElementById('enBtn');
    dom.deBtn = document.getElementById('deBtn');
    dom.frBtn = document.getElementById('frBtn');
    dom.esBtn = document.getElementById('esBtn');
    dom.idBtn = document.getElementById('idBtn');
    dom.headerTitle = document.getElementById('headerTitle');
    dom.headerSubtitle = document.getElementById('headerSubtitle');
    dom.adBoxLabels = Array.from(document.querySelectorAll('.ad-box-label'));
    dom.content = document.getElementById('content');
    dom.cityModal = document.getElementById('cityModal');
    dom.stadiumModal = document.getElementById('stadiumModal');
    dom.ticketModal = document.getElementById('ticketModal');
    dom.blogModal = document.getElementById('blogModal');
    dom.modalImage = document.getElementById('modalImage');
    dom.modalRank = document.getElementById('modalRank');
    dom.modalTitle = document.getElementById('modalTitle');
    dom.modalDescription = document.getElementById('modalDescription');
    dom.modalPopulation = document.getElementById('modalPopulation');
    dom.modalCoordinates = document.getElementById('modalCoordinates');
    dom.populationLabel = document.getElementById('populationLabel');
    dom.coordinatesLabel = document.getElementById('coordinatesLabel');
    dom.attractionsLabel = document.getElementById('attractionsLabel');
    dom.hotelsLabel = document.getElementById('hotelsLabel');
    dom.modalHighlights = document.getElementById('modalHighlights');
    dom.modalHotels = document.getElementById('modalHotels');
    dom.modalHotelsSection = document.getElementById('modalHotelsSection');
    dom.stadiumModalImage = document.getElementById('stadiumModalImage');
    dom.stadiumModalTitle = document.getElementById('stadiumModalTitle');
    dom.stadiumModalDescription = document.getElementById('stadiumModalDescription');
    dom.stadiumCapacityLabel = document.getElementById('stadiumCapacityLabel');
    dom.stadiumOpenedLabel = document.getElementById('stadiumOpenedLabel');
    dom.stadiumUseLabel = document.getElementById('stadiumUseLabel');
    dom.stadiumCapacityValue = document.getElementById('stadiumCapacityValue');
    dom.stadiumOpenedValue = document.getElementById('stadiumOpenedValue');
    dom.stadiumUseValue = document.getElementById('stadiumUseValue');
    dom.ticketModalTitle = document.getElementById('ticketModalTitle');
    dom.ticketModalDescription = document.getElementById('ticketModalDescription');
    dom.blogModalTitle = document.getElementById('blogModalTitle');
    dom.blogModalContent = document.getElementById('blogModalContent');
    dom.ticketForm = document.getElementById('ticketForm');
    dom.ticketFormStatus = document.getElementById('ticketFormStatus');
    dom.ticketDateLabel = document.getElementById('ticketDateLabel');
    dom.ticketTimeLabel = document.getElementById('ticketTimeLabel');
    dom.ticketDepartureLabel = document.getElementById('ticketDepartureLabel');
    dom.ticketTravelersLabel = document.getElementById('ticketTravelersLabel');
    dom.ticketClassLabel = document.getElementById('ticketClassLabel');
    dom.ticketEmailLabel = document.getElementById('ticketEmailLabel');
    dom.ticketDateInput = document.getElementById('ticketDateInput');
    dom.ticketTimeInput = document.getElementById('ticketTimeInput');
    dom.ticketDepartureInput = document.getElementById('ticketDepartureInput');
    dom.ticketTravelersInput = document.getElementById('ticketTravelersInput');
    dom.ticketClassInput = document.getElementById('ticketClassInput');
    dom.ticketEmailInput = document.getElementById('ticketEmailInput');
    dom.ticketClassEconomy = document.getElementById('ticketClassEconomy');
    dom.ticketClassBusiness = document.getElementById('ticketClassBusiness');
    dom.ticketClassFirst = document.getElementById('ticketClassFirst');
    dom.ticketSubmitBtn = document.getElementById('ticketSubmitBtn');
    dom.wildlifeModal = document.getElementById('wildlifeModal');
    dom.wildlifeInfoBtn = document.getElementById('wildlifeInfoBtn');
    dom.ticketInfoBtn = document.getElementById('ticketInfoBtn');
    dom.wildlifeModalImage = document.getElementById('wildlifeModalImage');
    dom.wildlifeModalTitle = document.getElementById('wildlifeModalTitle');
    dom.wildlifeModalDescription = document.getElementById('wildlifeModalDescription');
  }

function cacheContentElements() {
    dom.countryInfoTitle = document.getElementById('countryInfoTitle');
    dom.stadiumInfoBtn = document.getElementById('stadiumInfoBtn');
    dom.wildlifeInfoBtn = document.getElementById('wildlifeInfoBtn');
    dom.ticketInfoBtn = document.getElementById('ticketInfoBtn');
    dom.majorCitiesTitle = document.getElementById('majorCitiesTitle');
    dom.marineAnimalsTitle = document.getElementById('marineAnimalsTitle');
    dom.landAnimalsTitle = document.getElementById('landAnimalsTitle');
    dom.freshwaterAnimalsTitle = document.getElementById('freshwaterAnimalsTitle');
    dom.birdsTitle = document.getElementById('birdsTitle');
    dom.fruitsTitle = document.getElementById('fruitsTitle');
    dom.parksTitle = document.getElementById('parksTitle');
    dom.treesTitle = document.getElementById('treesTitle');
    dom.blogSectionTitle = document.getElementById('blogSectionTitle');
    dom.blogArticleTitle = document.getElementById('blogArticleTitle');
    dom.blogArticleExcerpt = document.getElementById('blogArticleExcerpt');
    dom.blogReadBtn = document.getElementById('blogReadBtn');
    dom.blogArticle2Title = document.getElementById('blogArticle2Title');
    dom.blogArticle2Excerpt = document.getElementById('blogArticle2Excerpt');
    dom.blogReadBtn2 = document.getElementById('blogReadBtn2');
    dom.blogArticle3Title = document.getElementById('blogArticle3Title');
    dom.blogArticle3Excerpt = document.getElementById('blogArticle3Excerpt');
    dom.blogReadBtn3 = document.getElementById('blogReadBtn3');
    dom.blogArticle4Title = document.getElementById('blogArticle4Title');
    dom.blogArticle4Excerpt = document.getElementById('blogArticle4Excerpt');
    dom.blogReadBtn4 = document.getElementById('blogReadBtn4');
    dom.blogArticle5Title = document.getElementById('blogArticle5Title');
    dom.blogArticle5Excerpt = document.getElementById('blogArticle5Excerpt');
    dom.blogReadBtn5 = document.getElementById('blogReadBtn5');
    dom.blogArticle6Title = document.getElementById('blogArticle6Title');
    dom.blogArticle6Excerpt = document.getElementById('blogArticle6Excerpt');
    dom.blogReadBtn6 = document.getElementById('blogReadBtn6');
    dom.blogArticle8Title = document.getElementById('blogArticle8Title');
    dom.blogArticle8Excerpt = document.getElementById('blogArticle8Excerpt');
    dom.blogReadBtn8 = document.getElementById('blogReadBtn8');
    dom.blogArticle9Title = document.getElementById('blogArticle9Title');
    dom.blogArticle9Excerpt = document.getElementById('blogArticle9Excerpt');
    dom.blogReadBtn9 = document.getElementById('blogReadBtn9');
    dom.blogArticle10Title = document.getElementById('blogArticle10Title');
    dom.blogArticle10Excerpt = document.getElementById('blogArticle10Excerpt');
    dom.blogReadBtn10 = document.getElementById('blogReadBtn10');
    dom.blogArticle11Title = document.getElementById('blogArticle11Title');
    dom.blogArticle11Excerpt = document.getElementById('blogArticle11Excerpt');
    dom.blogReadBtn11 = document.getElementById('blogReadBtn11');
    dom.blogArticle12Title = document.getElementById('blogArticle12Title');
    dom.blogArticle12Excerpt = document.getElementById('blogArticle12Excerpt');
    dom.blogReadBtn12 = document.getElementById('blogReadBtn12');
    dom.blogArticle13Title = document.getElementById('blogArticle13Title');
    dom.blogArticle13Excerpt = document.getElementById('blogArticle13Excerpt');
    dom.blogReadBtn13 = document.getElementById('blogReadBtn13');
    dom.blogArticle14Title = document.getElementById('blogArticle14Title');
    dom.blogArticle14Excerpt = document.getElementById('blogArticle14Excerpt');
    dom.blogReadBtn14 = document.getElementById('blogReadBtn14');
    dom.blogArticle15Title = document.getElementById('blogArticle15Title');
    dom.blogArticle15Excerpt = document.getElementById('blogArticle15Excerpt');
    dom.blogReadBtn15 = document.getElementById('blogReadBtn15');
    dom.blogArticle16Title = document.getElementById('blogArticle16Title');
    dom.blogArticle16Excerpt = document.getElementById('blogArticle16Excerpt');
    dom.blogReadBtn16 = document.getElementById('blogReadBtn16');
    dom.blogArticle17Title = document.getElementById('blogArticle17Title');
    dom.blogArticle17Excerpt = document.getElementById('blogArticle17Excerpt');
    dom.blogReadBtn17 = document.getElementById('blogReadBtn17');
    dom.blogArticle18Title = document.getElementById('blogArticle18Title');
    dom.blogArticle18Excerpt = document.getElementById('blogArticle18Excerpt');
    dom.blogReadBtn18 = document.getElementById('blogReadBtn18');
    dom.blogArticle19Title = document.getElementById('blogArticle19Title');
    dom.blogArticle19Excerpt = document.getElementById('blogArticle19Excerpt');
    dom.blogReadBtn19 = document.getElementById('blogReadBtn19');
    dom.blogArticle20Title = document.getElementById('blogArticle20Title');
    dom.blogArticle20Excerpt = document.getElementById('blogArticle20Excerpt');
    dom.blogReadBtn20 = document.getElementById('blogReadBtn20');
    dom.aboutSectionTitle = document.getElementById('aboutSectionTitle');
    dom.aboutSectionText = document.getElementById('aboutSectionText');
    dom.project1Title = document.getElementById('project1Title');
    dom.project1Desc = document.getElementById('project1Desc');
    dom.project1Link = document.getElementById('project1Link');
    dom.project2Title = document.getElementById('project2Title');
    dom.project2Desc = document.getElementById('project2Desc');
    dom.project2Link = document.getElementById('project2Link');
    dom.project3Title = document.getElementById('project3Title');
    dom.project3Desc = document.getElementById('project3Desc');
    dom.project3Link = document.getElementById('project3Link');
    dom.gamePartnerTitle = document.getElementById('gamePartnerTitle');
    dom.gamePartnerText = document.getElementById('gamePartnerText');
    dom.gamePartnerContactHint = document.getElementById('gamePartnerContactHint');
    dom.partnerWalletLabel = document.getElementById('partnerWalletLabel');
    dom.partnerWalletAddress = document.getElementById('partnerWalletAddress');
    dom.partnerWalletCopy = document.getElementById('partnerWalletCopy');
    dom.partnerWalletHint = document.getElementById('partnerWalletHint');
    dom.gamePartnerSocialTitle = document.getElementById('gamePartnerSocialTitle');
    dom.gamePartnerInstagram = document.getElementById('gamePartnerInstagram');
    dom.gamePartnerFacebook = document.getElementById('gamePartnerFacebook');
    dom.gamePartnerX = document.getElementById('gamePartnerX');
    dom.gamePartnerPaypalCta = document.getElementById('gamePartnerPaypalCta');
    dom.dataNotice = document.getElementById('dataNotice');
    countryInfoFields.forEach(function (field) {
      dom[field.id] = document.getElementById(field.id);
    });
    dom.cityPopulationTexts = Array.from(document.querySelectorAll('.city-population'));
    dom.marineNameTexts = Array.from(document.querySelectorAll('.marine-name'));
    dom.marineReadTexts = Array.from(document.querySelectorAll('.marine-read-text'));
    dom.landNameTexts = Array.from(document.querySelectorAll('.land-name'));
    dom.landReadTexts = Array.from(document.querySelectorAll('.land-read-text'));
    dom.freshwaterNameTexts = Array.from(document.querySelectorAll('.freshwater-name'));
    dom.freshwaterReadTexts = Array.from(document.querySelectorAll('.freshwater-read-text'));
    dom.birdNameTexts = Array.from(document.querySelectorAll('.bird-name'));
    dom.birdReadTexts = Array.from(document.querySelectorAll('.bird-read-text'));
    dom.fruitNameTexts = Array.from(document.querySelectorAll('.fruit-name'));
    dom.fruitReadTexts = Array.from(document.querySelectorAll('.fruit-read-text'));
    dom.parkNameTexts = Array.from(document.querySelectorAll('.park-name'));
    dom.parkReadTexts = Array.from(document.querySelectorAll('.park-read-text'));
    dom.treeNameTexts = Array.from(document.querySelectorAll('.tree-name'));
    dom.treeReadTexts = Array.from(document.querySelectorAll('.tree-read-text'));
  }

  function setBodyScrollLocked(isLocked) {
    document.body.style.overflow = isLocked ? 'hidden' : 'auto';
  }

  function toggleModal(modalElement, isOpen) {
    modalElement.classList.toggle('active', isOpen);
    setBodyScrollLocked(isOpen);
  }

  function createCountryInfoItemsHtml() {
    return countryInfoFields.map(function (field) {
      return `
            <div class="info-item">
              <div class="info-label" id="${field.id}"></div>
              <div class="info-value">${field.value}</div>
            </div>
        `;
    }).join('');
  }

  function createCityCardsHtml() {
    return indonesiaData.cities.map(function (city, index) {
      return `
              <button class="city-card" type="button" data-city-index="${index}" aria-label="${city.name}">
                <div class="city-rank">#${city.rank}</div>
                <div class="city-name">${city.name}</div>
                <div class="city-population" data-city-population="${city.population}"></div>
              </button>
        `;
    }).join('');
  }

  function createMarineAnimalsCardsHtml() {
    return marineAnimals.map(function (animal, index) {
      return `
              <article class="marine-card" aria-label="marine-animal-${index}">
                <div class="marine-image-placeholder">
                  <img class="marine-image" src="${animal.image}" alt="${animal.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="marine-name" data-animal-index="${index}"></div>
                <button class="marine-read-text" type="button" data-marine-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function createFreshwaterAnimalsCardsHtml() {
    return freshwaterAnimals.map(function (animal, index) {
      return `
              <article class="fruit-card freshwater-card" aria-label="freshwater-animal-${index}">
                <div class="fruit-image-placeholder freshwater-image-placeholder">
                  <img class="fruit-image freshwater-image" src="${animal.image}" alt="${animal.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="fruit-name freshwater-name" data-freshwater-index="${index}"></div>
                <button class="fruit-read-text freshwater-read-text" type="button" data-freshwater-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function createLandAnimalsCardsHtml() {
    return landAnimals.map(function (animal, index) {
      return `
              <article class="fruit-card land-card" aria-label="land-animal-${index}">
                <div class="fruit-image-placeholder land-image-placeholder">
                  <img class="fruit-image land-image" src="${animal.image}" alt="${animal.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="fruit-name land-name" data-land-index="${index}"></div>
                <button class="fruit-read-text land-read-text" type="button" data-land-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function getMarineAnimalName(animal) {
    const key = `name_${currentLanguage}`;
    return animal[key] || animal.name_en || animal.name_bg || '';
  }

  function getFreshwaterAnimalName(animal) {
    const key = `name_${currentLanguage}`;
    return animal[key] || animal.name_en || animal.name_bg || '';
  }

  function getLandAnimalName(animal) {
    const key = `name_${currentLanguage}`;
    return animal[key] || animal.name_en || animal.name_bg || '';
  }

  function getLandSpeedText(animal) {
    return `${getTranslation('freshwaterSpeedLabel')}: ~${animal.speedKmh} km/h`;
  }

  function getLandWeightText(animal) {
    return `${getTranslation('freshwaterWeightLabel')}: ~${animal.weightKg} kg`;
  }

  function getLandMetaText(animal) {
    return `${getLandSpeedText(animal)}\n${getLandWeightText(animal)}`;
  }

  function getFreshwaterSpeedText(animal) {
    return `${getTranslation('freshwaterSpeedLabel')}: ~${animal.speedKmh} km/h`;
  }

  function getFreshwaterWeightText(animal) {
    return `${getTranslation('freshwaterWeightLabel')}: ~${animal.weightKg} kg`;
  }

  function getFreshwaterMetaText(animal) {
    return `${getFreshwaterSpeedText(animal)}\n${getFreshwaterWeightText(animal)}`;
  }

  function createBirdCardsHtml() {
    return birds.map(function (bird, index) {
      const imageSmall = bird.imageSmall || bird.image;
      const imageLarge = bird.imageLarge || bird.image;
      const imageSrcSet = `${imageSmall} 480w, ${imageLarge} 960w`;
      return `
              <article class="bird-card" aria-label="bird-${index}">
                <div class="bird-image-placeholder">
                  <img class="bird-image" src="${imageSmall}" srcset="${imageSrcSet}" sizes="(max-width: 768px) 92vw, 42vw" alt="${bird.name_en}" loading="lazy" decoding="async" fetchpriority="low" width="960" height="373">
                </div>
                <div class="bird-name" data-bird-index="${index}"></div>
                <button class="bird-read-text" type="button" data-bird-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function getBirdName(bird) {
    const key = `name_${currentLanguage}`;
    return bird[key] || bird.name_en || bird.name_bg || '';
  }

  function createFruitCardsHtml() {
    return fruits.map(function (fruit, index) {
      return `
              <article class="fruit-card" aria-label="fruit-${index}">
                <div class="fruit-image-placeholder">
                  <img class="fruit-image" src="${fruit.image}" alt="${fruit.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="fruit-name" data-fruit-index="${index}"></div>
                <button class="fruit-read-text" type="button" data-fruit-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function createParkCardsHtml() {
    return parks.map(function (park, index) {
      return `
              <article class="fruit-card park-card" aria-label="park-${index}">
                <div class="fruit-image-placeholder park-image-placeholder">
                  <img class="fruit-image park-image" src="${park.image}" alt="${park.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="fruit-name park-name" data-park-index="${index}"></div>
                <button class="fruit-read-text park-read-text" type="button" data-park-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function createTreeCardsHtml() {
    return trees.map(function (tree, index) {
      return `
              <article class="fruit-card tree-card" aria-label="tree-${index}">
                <div class="fruit-image-placeholder tree-image-placeholder">
                  <img class="fruit-image tree-image" src="${tree.image}" alt="${tree.name_en}" loading="lazy" decoding="async">
                </div>
                <div class="fruit-name tree-name" data-tree-index="${index}"></div>
                <button class="fruit-read-text tree-read-text" type="button" data-tree-read-index="${index}"></button>
              </article>
      `;
    }).join('');
  }

  function getFruitName(fruit) {
    const key = `name_${currentLanguage}`;
    return fruit[key] || fruit.name_en || fruit.name_bg || '';
  }

  function getParkName(park) {
    const key = `name_${currentLanguage}`;
    return park[key] || park.name_en || park.name_bg || '';
  }

  function getTreeName(tree) {
    const key = `name_${currentLanguage}`;
    return tree[key] || tree.name_en || tree.name_bg || '';
  }

  function createErrorHtml() {
    return `
          <div class="error">
            ${getTranslation('errorLoading')}
          </div>
        `;
  }

  function getCityTranslationKeys() {
    return {
      description: `description_${currentLanguage}`,
      highlights: `highlights_${currentLanguage}`
    };
  }

  function updateStadiumModalContent() {
    dom.stadiumModalTitle.textContent = getTranslation('stadiumTitle');
    dom.stadiumModalDescription.textContent = getTranslation('stadiumDescription');

    stadiumFieldBindings.forEach(function (binding) {
      const [elementKey, translationKey] = binding;
      dom[elementKey].textContent = getTranslation(translationKey);
    });
  }

  function getAttractionWikipediaUrl(cityName, attractionQuery) {
    const searchQuery = encodeURIComponent(`${attractionQuery} ${cityName}`);
    return `https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`;
  }

  function normalizeEnglishWikipediaUrl(url) {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'en-wikipedia-org.translate.goog') {
        const englishUrl = new URL(`https://en.wikipedia.org${parsedUrl.pathname}`);
        parsedUrl.searchParams.forEach(function (value, key) {
          if (!key.startsWith('_x_tr_')) {
            englishUrl.searchParams.set(key, value);
          }
        });
        return englishUrl.toString();
      }

      return url;
    } catch (error) {
      return url;
    }
  }

  function getHotelEstimateText(hotelName) {
    const estimateBgn = hotelEstimateBgnByName[hotelName] || 220;
    const estimateEur = Math.round(estimateBgn / 1.95583);
    return `${getTranslation('estimateLabel')} ~${estimateEur} ${getTranslation('estimateUnit')}`;
  }

  function updateCityModalContent(city) {
    const keys = getCityTranslationKeys();
    const localizedHighlightsRaw = city[keys.highlights];
    const englishHighlights = Array.isArray(city.highlights_en) ? city.highlights_en : [];
    const localizedHighlights = Array.isArray(localizedHighlightsRaw) && localizedHighlightsRaw.length > 0
      ? localizedHighlightsRaw
      : englishHighlights;
    const directHighlightLinks = Array.isArray(city.highlightLinks_en) ? city.highlightLinks_en : [];

    dom.modalRank.textContent = `#${city.rank} ${getTranslation('mostPopulated')}`;
    dom.modalTitle.textContent = city.name;
    dom.modalDescription.textContent = city[keys.description] || city.description_en || city.description_bg || '';
    dom.modalPopulation.textContent = city.population;
    dom.populationLabel.textContent = getTranslation('population');
    dom.attractionsLabel.textContent = getTranslation('keyAttractions');
    dom.hotelsLabel.textContent = getTranslation('topHotels');
    dom.modalHighlights.innerHTML = localizedHighlights.map(function (highlight, index) {
      const queryTerm = englishHighlights[index] || highlight;
      const directUrl = directHighlightLinks[index];
      const finalUrl = normalizeEnglishWikipediaUrl(directUrl || getAttractionWikipediaUrl(city.name, queryTerm));
      return `<a class="attraction-link-badge" href="${finalUrl}" target="_blank" rel="noopener noreferrer">${highlight}</a>`;
    }).join('');

    const hotels = Array.isArray(city.hotels) ? city.hotels : [];
    if (hotels.length === 0) {
      dom.modalHotelsSection.style.display = 'none';
    } else {
      dom.modalHotelsSection.style.display = 'block';
        dom.modalHotels.innerHTML = hotels.map(function (hotel) {
          return `<span class="hotel-item"><a class="hotel-link-badge" href="${hotel.url}" target="_blank" rel="noopener noreferrer">🏨 ${hotel.name}</a><span class="hotel-price-badge">${getHotelEstimateText(hotel.name)}</span></span>`;
      }).join('');
    }
  }

  function renderContentShell() {
    dom.content.innerHTML = `
        <div class="card country-info">
          <div class="country-title-row">
            <h2 id="countryInfoTitle"></h2>
            <div class="action-buttons">
              <button id="stadiumInfoBtn" class="stadium-info-btn" type="button"></button>
              <button id="wildlifeInfoBtn" class="wildlife-info-btn" type="button"></button>
              <button id="ticketInfoBtn" class="ticket-info-btn" type="button"></button>
            </div>
          </div>
          <div class="info-grid">
            ${createCountryInfoItemsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="majorCitiesTitle"></h2>
          <div class="cities-grid">
            ${createCityCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="marineAnimalsTitle"></h2>
          <div class="marine-grid">
            ${createMarineAnimalsCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="landAnimalsTitle"></h2>
          <div class="fruit-grid land-grid">
            ${createLandAnimalsCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="freshwaterAnimalsTitle"></h2>
          <div class="fruit-grid freshwater-grid">
            ${createFreshwaterAnimalsCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="birdsTitle"></h2>
          <div class="bird-grid">
            ${createBirdCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="fruitsTitle"></h2>
          <div class="fruit-grid">
            ${createFruitCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="parksTitle"></h2>
          <div class="fruit-grid parks-grid">
            ${createParkCardsHtml()}
          </div>
        </div>

        <div class="card">
          <h2 id="treesTitle"></h2>
          <div class="fruit-grid tree-grid">
            ${createTreeCardsHtml()}
          </div>
        </div>

        <div class="card blog-card">
          <h2 id="blogSectionTitle"></h2>
          <div class="blog-preview">
            <h3 id="blogArticleTitle"></h3>
            <p id="blogArticleExcerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle2Title"></h3>
            <p id="blogArticle2Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn2" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle3Title"></h3>
            <p id="blogArticle3Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn3" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle4Title"></h3>
            <p id="blogArticle4Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn4" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle5Title"></h3>
            <p id="blogArticle5Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn5" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle6Title"></h3>
            <p id="blogArticle6Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn6" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle8Title"></h3>
            <p id="blogArticle8Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn8" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle9Title"></h3>
            <p id="blogArticle9Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn9" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle10Title"></h3>
            <p id="blogArticle10Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn10" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle11Title"></h3>
            <p id="blogArticle11Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn11" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle12Title"></h3>
            <p id="blogArticle12Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn12" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle13Title"></h3>
            <p id="blogArticle13Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn13" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle14Title"></h3>
            <p id="blogArticle14Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn14" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle15Title"></h3>
            <p id="blogArticle15Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn15" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle16Title"></h3>
            <p id="blogArticle16Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn16" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle17Title"></h3>
            <p id="blogArticle17Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn17" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle18Title"></h3>
            <p id="blogArticle18Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn18" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle19Title"></h3>
            <p id="blogArticle19Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn19" class="blog-read-btn" type="button"></button>
          </div>
          <div class="blog-preview">
            <h3 id="blogArticle20Title"></h3>
            <p id="blogArticle20Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn20" class="blog-read-btn" type="button"></button>
          </div>
        </div>

        <div class="card about-projects-card">
          <h2 id="aboutSectionTitle"></h2>
          <p id="aboutSectionText" class="about-section-text"></p>
          <div class="about-projects-grid">
            <article class="about-project-item">
              <h3 id="project1Title"></h3>
              <p id="project1Desc" class="blog-excerpt"></p>
                                <a id="project1Link" class="blog-read-btn project-link-btn" href="https://p-in-pong-trs2.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
            </article>
            <article class="about-project-item">
              <h3 id="project2Title"></h3>
              <p id="project2Desc" class="blog-excerpt"></p>
                                <a id="project2Link" class="blog-read-btn project-link-btn" href="https://cska-explorer.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
            </article>
            <article class="about-project-item">
              <h3 id="project3Title"></h3>
              <p id="project3Desc" class="blog-excerpt"></p>
                                <a id="project3Link" class="blog-read-btn project-link-btn" href="https://norway-info.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
            </article>
          </div>
          <section class="game-partnership-panel" aria-labelledby="gamePartnerTitle">
            <div class="game-partnership-copy">
              <h3 id="gamePartnerTitle"></h3>
              <p id="gamePartnerText" class="game-partnership-text"></p>
            </div>
            <div class="game-partnership-wallet" aria-live="polite">
              <p id="partnerWalletLabel" class="game-partnership-wallet-label"></p>
              <div class="game-partnership-wallet-row">
                <code id="partnerWalletAddress" class="game-partnership-wallet-address"></code>
                <button id="partnerWalletCopy" class="game-partnership-wallet-copy" type="button"></button>
              </div>
              <p id="partnerWalletHint" class="game-partnership-wallet-hint"></p>
              <a id="gamePartnerPaypalCta" class="blog-read-btn game-partnership-btn game-partnership-paypal-btn" href="#" target="_blank" rel="noopener noreferrer" hidden></a>
            </div>
            <div class="game-partnership-actions">
              <p class="game-partnership-neutral-row"><span class="game-partnership-email-icon" aria-hidden="true">🛡</span><span id="gamePartnerContactHint"></span></p>
              <p id="gamePartnerSocialTitle" class="game-partnership-social-title"></p>
              <div class="game-partnership-social-grid" aria-label="Social contacts">
                <a id="gamePartnerInstagram" class="blog-read-btn game-partnership-btn game-partnership-social-btn game-partnership-instagram-btn" href="${PARTNER_INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a id="gamePartnerFacebook" class="blog-read-btn game-partnership-btn game-partnership-social-btn game-partnership-facebook-btn" href="${PARTNER_FACEBOOK_URL}" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a id="gamePartnerX" class="blog-read-btn game-partnership-btn game-partnership-social-btn game-partnership-x-btn" href="${PARTNER_X_URL}" target="_blank" rel="noopener noreferrer">X</a>
              </div>
            </div>
          </section>
        </div>

        <div class="api-notice" id="dataNotice"></div>
      `;

    cacheContentElements();

    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
      loadingElement.classList.add('fade-out');
      setTimeout(function () {
        if (loadingElement.parentNode) {
          loadingElement.remove();
        }
      }, 600);
    }

    dom.stadiumInfoBtn.addEventListener('click', openStadiumModal);
    dom.wildlifeInfoBtn.addEventListener('click', openWildlifeModal);
    dom.ticketInfoBtn.addEventListener('click', openTicketModal);
    dom.blogReadBtn.addEventListener('click', openBlogModal);
    dom.blogReadBtn2.addEventListener('click', openDolphinBlogModal);
    dom.blogReadBtn3.addEventListener('click', openCruiseBlogModal);
    dom.blogReadBtn4.addEventListener('click', openLombokBlogModal);
    dom.blogReadBtn5.addEventListener('click', openSportsBlogModal);
    dom.blogReadBtn6.addEventListener('click', openTop3FoodBlogModal);
    dom.blogReadBtn8.addEventListener('click', openRiversBlogModal);
    dom.blogReadBtn9.addEventListener('click', openVolcanoBlogModal);
    dom.blogReadBtn10.addEventListener('click', openTrainBlogModal);
    dom.blogReadBtn11.addEventListener('click', openTrainStoryBlogModal);
    dom.blogReadBtn12.addEventListener('click', openBorneoBlogModal);
    dom.blogReadBtn13.addEventListener('click', openMotorsportBlogModal);
    dom.blogReadBtn14.addEventListener('click', openPalembangBlogModal);
    dom.blogReadBtn15.addEventListener('click', openFootballBlogModal);
    dom.blogReadBtn16.addEventListener('click', openUningBromoBlogModal);
    dom.blogReadBtn17.addEventListener('click', openSmqhBlogModal);
    dom.blogReadBtn18.addEventListener('click', openCarKaloqnBlogModal);
    dom.blogReadBtn19.addEventListener('click', openTervelBlogModal);
    dom.blogReadBtn20.addEventListener('click', openDoiranBlogModal);
    dom.partnerWalletCopy.addEventListener('click', copyPartnerWalletAddress);
    dom.content.addEventListener('click', function (event) {
      const freshwaterReadButton = event.target.closest('.freshwater-read-text');
      if (freshwaterReadButton) {
        openFreshwaterInfoModal(Number(freshwaterReadButton.dataset.freshwaterReadIndex));
        return;
      }

      const marineReadButton = event.target.closest('.marine-read-text');
      if (marineReadButton) {
        openMarineInfoModal(Number(marineReadButton.dataset.marineIndex));
        return;
      }

      const birdReadButton = event.target.closest('.bird-read-text');
      if (birdReadButton) {
        openBirdInfoModal(Number(birdReadButton.dataset.birdReadIndex));
        return;
      }

      const landReadButton = event.target.closest('.land-read-text');
      if (landReadButton) {
        openLandInfoModal(Number(landReadButton.dataset.landReadIndex));
        return;
      }

      const treeReadButton = event.target.closest('.tree-read-text');
      if (treeReadButton) {
        openTreeInfoModal(Number(treeReadButton.dataset.treeReadIndex));
        return;
      }

      const parkReadButton = event.target.closest('.park-read-text');
      if (parkReadButton) {
        openParkInfoModal(Number(parkReadButton.dataset.parkReadIndex));
        return;
      }

      const fruitReadButton = event.target.closest('.fruit-read-text');
      if (fruitReadButton) {
        openFruitInfoModal(Number(fruitReadButton.dataset.fruitReadIndex));
        return;
      }

      const cityCard = event.target.closest('.city-card');
      if (!cityCard) {
        return;
      }

      openCityModal(Number(cityCard.dataset.cityIndex));
    });

    contentRendered = true;
  }

  function updateContentTranslations() {
    dom.countryInfoTitle.textContent = getTranslation('countryInfo');
    dom.stadiumInfoBtn.textContent = getTranslation('stadiumInfoBtn');
    dom.wildlifeInfoBtn.textContent = getTranslation('wildlifeInfoBtn');
    dom.ticketInfoBtn.textContent = getTranslation('ticketInfoBtn');
    dom.ticketDateLabel.textContent = getTranslation('ticketDateLabel');
    dom.ticketTimeLabel.textContent = getTranslation('ticketTimeLabel');
    dom.ticketDepartureLabel.textContent = getTranslation('ticketDepartureLabel');
    dom.ticketTravelersLabel.textContent = getTranslation('ticketTravelersLabel');
    dom.ticketClassLabel.textContent = getTranslation('ticketClassLabel');
    dom.ticketEmailLabel.textContent = getTranslation('ticketEmailLabel');
    dom.ticketClassEconomy.textContent = getTranslation('ticketClassEconomy');
    dom.ticketClassBusiness.textContent = getTranslation('ticketClassBusiness');
    dom.ticketClassFirst.textContent = getTranslation('ticketClassFirst');
    dom.ticketSubmitBtn.textContent = getTranslation('ticketSubmitBtn');
    countryInfoFields.forEach(function (field) {
      dom[field.id].textContent = getTranslation(field.labelKey);
    });
    dom.majorCitiesTitle.textContent = getTranslation('majorCities');
    dom.marineAnimalsTitle.textContent = getTranslation('marineAnimalsTitle');
    dom.landAnimalsTitle.textContent = getTranslation('landAnimalsTitle');
    dom.freshwaterAnimalsTitle.textContent = getTranslation('freshwaterAnimalsTitle');
    dom.birdsTitle.textContent = getTranslation('birdsTitle');
    dom.fruitsTitle.textContent = getTranslation('fruitsTitle');
    dom.parksTitle.textContent = getTranslation('parksTitle');
    dom.treesTitle.textContent = getTranslation('treesTitle');
    dom.blogSectionTitle.textContent = getTranslation('blogSectionTitle');
    dom.blogArticleTitle.textContent = getTranslation('blogArticleTitle');
    dom.blogArticleExcerpt.textContent = getTranslation('blogArticleExcerpt');
    dom.blogReadBtn.textContent = getTranslation('blogReadBtn');
    dom.blogArticle2Title.textContent = getTranslation('blogArticle2Title');
    dom.blogArticle2Excerpt.textContent = getTranslation('blogArticle2Excerpt');
    dom.blogReadBtn2.textContent = getTranslation('blogReadBtn2');
    dom.blogArticle3Title.textContent = getTranslation('blogArticle3Title');
    dom.blogArticle3Excerpt.textContent = getTranslation('blogArticle3Excerpt');
    dom.blogReadBtn3.textContent = getTranslation('blogReadBtn3');
    dom.blogArticle4Title.textContent = getTranslation('blogArticle4Title');
    dom.blogArticle4Excerpt.textContent = getTranslation('blogArticle4Excerpt');
    dom.blogReadBtn4.textContent = getTranslation('blogReadBtn4');
    dom.blogArticle5Title.textContent = getTranslation('blogArticle5Title');
    dom.blogArticle5Excerpt.textContent = getTranslation('blogArticle5Excerpt');
    dom.blogReadBtn5.textContent = getTranslation('blogReadBtn5');
    dom.blogArticle6Title.textContent = getTranslation('blogArticle6Title');
    dom.blogArticle6Excerpt.textContent = getTranslation('blogArticle6Excerpt');
    dom.blogReadBtn6.textContent = getTranslation('blogReadBtn6');
    dom.blogArticle8Title.textContent = getTranslation('blogArticle8Title');
    dom.blogArticle8Excerpt.textContent = getTranslation('blogArticle8Excerpt');
    dom.blogReadBtn8.textContent = getTranslation('blogReadBtn8');
    dom.blogArticle9Title.textContent = getTranslation('blogArticle9Title');
    dom.blogArticle9Excerpt.textContent = getTranslation('blogArticle9Excerpt');
    dom.blogReadBtn9.textContent = getTranslation('blogReadBtn9');
    dom.blogArticle10Title.textContent = getTranslation('blogArticle10Title');
    dom.blogArticle10Excerpt.textContent = getTranslation('blogArticle10Excerpt');
    dom.blogReadBtn10.textContent = getTranslation('blogReadBtn10');
    dom.blogArticle11Title.textContent = getTranslation('blogArticle11Title');
    dom.blogArticle11Excerpt.textContent = getTranslation('blogArticle11Excerpt');
    dom.blogReadBtn11.textContent = getTranslation('blogReadBtn11');
    dom.blogArticle12Title.textContent = getTranslation('blogArticle12Title');
    dom.blogArticle12Excerpt.textContent = getTranslation('blogArticle12Excerpt');
    dom.blogReadBtn12.textContent = getTranslation('blogReadBtn12');
    dom.blogArticle13Title.textContent = getTranslation('blogArticle13Title');
    dom.blogArticle13Excerpt.textContent = getTranslation('blogArticle13Excerpt');
    dom.blogReadBtn13.textContent = getTranslation('blogReadBtn13');
    dom.blogArticle14Title.textContent = getTranslation('blogArticle14Title');
    dom.blogArticle14Excerpt.textContent = getTranslation('blogArticle14Excerpt');
    dom.blogReadBtn14.textContent = getTranslation('blogReadBtn14');
    dom.blogArticle15Title.textContent = getTranslation('blogArticle15Title');
    dom.blogArticle15Excerpt.textContent = getTranslation('blogArticle15Excerpt');
    dom.blogReadBtn15.textContent = getTranslation('blogReadBtn15');
    dom.blogArticle16Title.textContent = getTranslation('blogArticle16Title');
    dom.blogArticle16Excerpt.textContent = getTranslation('blogArticle16Excerpt');
    dom.blogReadBtn16.textContent = getTranslation('blogReadBtn16');
    dom.blogArticle17Title.textContent = getTranslation('blogArticle17Title');
    dom.blogArticle17Excerpt.textContent = getTranslation('blogArticle17Excerpt');
    dom.blogReadBtn17.textContent = getTranslation('blogReadBtn17');
    dom.blogArticle18Title.textContent = getTranslation('blogArticle18Title');
    dom.blogArticle18Excerpt.textContent = getTranslation('blogArticle18Excerpt');
    dom.blogReadBtn18.textContent = getTranslation('blogReadBtn18');
    dom.blogArticle19Title.textContent = getTranslation('blogArticle19Title');
    dom.blogArticle19Excerpt.textContent = getTranslation('blogArticle19Excerpt');
    dom.blogReadBtn19.textContent = getTranslation('blogReadBtn19');
    dom.blogArticle20Title.textContent = getTranslation('blogArticle20Title');
    dom.blogArticle20Excerpt.textContent = getTranslation('blogArticle20Excerpt');
    dom.blogReadBtn20.textContent = getTranslation('blogReadBtn20');
    dom.aboutSectionTitle.textContent = getTranslation('aboutSectionTitle');
    dom.aboutSectionText.textContent = getTranslation('aboutSectionText');
    dom.project1Title.textContent = getTranslation('project1Title');
    dom.project1Desc.textContent = getTranslation('project1Desc');
    dom.project1Link.textContent = getTranslation('projectVisitBtn');
    dom.project2Title.textContent = getTranslation('project2Title');
    dom.project2Desc.textContent = getTranslation('project2Desc');
    dom.project2Link.textContent = getTranslation('projectVisitBtn');
    dom.project3Title.textContent = getTranslation('project3Title');
    dom.project3Desc.textContent = getTranslation('project3Desc');
    dom.project3Link.textContent = getTranslation('projectVisitBtn');
    dom.gamePartnerTitle.textContent = getTranslation('gamePartnerTitle');
    dom.gamePartnerText.textContent = getTranslation('gamePartnerText');
    dom.gamePartnerContactHint.textContent = getTranslation('gamePartnerContactHint');
    dom.gamePartnerSocialTitle.textContent = getTranslation('gamePartnerCta');
    dom.partnerWalletLabel.textContent = getTranslation('partnerWalletLabel');
    dom.partnerWalletAddress.textContent = METAMASK_WALLET_ADDRESS;
    dom.partnerWalletCopy.textContent = getTranslation('partnerWalletCopy');
    dom.partnerWalletHint.textContent = getTranslation('partnerWalletHint');
    if (dom.gamePartnerPaypalCta) {
      dom.gamePartnerPaypalCta.textContent = getTranslation('gamePartnerPaypalCta');
      if (PAYPAL_PARTNER_URL) {
        dom.gamePartnerPaypalCta.href = PAYPAL_PARTNER_URL;
        dom.gamePartnerPaypalCta.hidden = false;
      } else {
        dom.gamePartnerPaypalCta.hidden = true;
      }
    }
    dom.dataNotice.textContent = getTranslation('dataNotice');

    dom.cityPopulationTexts.forEach(function (populationElement) {
      populationElement.textContent = `${getTranslation('populationLabel')}: ${populationElement.dataset.cityPopulation}`;
    });

    dom.marineNameTexts.forEach(function (nameElement) {
      const animalIndex = Number(nameElement.dataset.animalIndex);
      const animal = marineAnimals[animalIndex];
      if (!animal) {
        return;
      }
      nameElement.textContent = getMarineAnimalName(animal);
    });

    dom.marineReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('marineReadBtn');
    });

    dom.landNameTexts.forEach(function (nameElement) {
      const animalIndex = Number(nameElement.dataset.landIndex);
      const animal = landAnimals[animalIndex];
      if (!animal) {
        return;
      }
      nameElement.textContent = getLandAnimalName(animal);
    });

    dom.landReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('landReadBtn');
    });

    dom.freshwaterNameTexts.forEach(function (nameElement) {
      const animalIndex = Number(nameElement.dataset.freshwaterIndex);
      const animal = freshwaterAnimals[animalIndex];
      if (!animal) {
        return;
      }
      nameElement.textContent = getFreshwaterAnimalName(animal);
    });

    dom.freshwaterReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('freshwaterReadBtn');
    });

    dom.birdNameTexts.forEach(function (nameElement) {
      const birdIndex = Number(nameElement.dataset.birdIndex);
      const bird = birds[birdIndex];
      if (!bird) {
        return;
      }
      nameElement.textContent = getBirdName(bird);
    });

    dom.birdReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('birdsReadBtn');
    });

    dom.fruitNameTexts.forEach(function (nameElement) {
      const fruitIndex = Number(nameElement.dataset.fruitIndex);
      const fruit = fruits[fruitIndex];
      if (!fruit) {
        return;
      }
      nameElement.textContent = getFruitName(fruit);
    });

    dom.fruitReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('fruitsReadBtn');
    });

    dom.parkNameTexts.forEach(function (nameElement) {
      const parkIndex = Number(nameElement.dataset.parkIndex);
      const park = parks[parkIndex];
      if (!park) {
        return;
      }
      nameElement.textContent = getParkName(park);
    });

    dom.parkReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('parksReadBtn');
    });

    dom.treeNameTexts.forEach(function (nameElement) {
      const treeIndex = Number(nameElement.dataset.treeIndex);
      const tree = trees[treeIndex];
      if (!tree) {
        return;
      }
      nameElement.textContent = getTreeName(tree);
    });

    dom.treeReadTexts.forEach(function (readElement) {
      readElement.textContent = getTranslation('treesReadBtn');
    });
  }

  function getTranslation(key) {
    const currentLangPack = translations[currentLanguage] || {};
    const englishPack = translations.en || {};
    return currentLangPack[key] || englishPack[key] || key;
  }

  function copyPartnerWalletAddress() {
    const copyText = METAMASK_WALLET_ADDRESS;
    const copyButton = dom.partnerWalletCopy;
    const defaultLabel = getTranslation('partnerWalletCopy');
    const successLabel = getTranslation('partnerWalletCopied');

    function onCopySuccess() {
      copyButton.textContent = successLabel;
      setTimeout(function () {
        copyButton.textContent = defaultLabel;
      }, 1400);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText)
        .then(onCopySuccess)
        .catch(function () {
          copyWalletAddressFallback(copyText, onCopySuccess);
        });
      return;
    }

    copyWalletAddressFallback(copyText, onCopySuccess);
  }

  function copyWalletAddressFallback(copyText, onCopySuccess) {
    const textArea = document.createElement('textarea');
    textArea.value = copyText;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const copied = document.execCommand('copy');
      if (copied) {
        onCopySuccess();
      }
    } catch (error) {
      // Keep the UI unchanged if copy fails silently.
    }

    document.body.removeChild(textArea);
  }

  function getBlogLineIcon(labelText) {
    const normalized = labelText
      .toLowerCase()
      .replace(/&quot;/g, '"')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .trim();

    if (/^(увод|introduction|einleitung|introduccion|introduction|pendahuluan)$/i.test(normalized)) {
      return '📌';
    }
    if (/^(топ 3 ястия|top 3 dishes|top 3 gerichte|top 3 plats|top 3 platos|3 hidangan terbaik)$/i.test(normalized)) {
      return '🍽️';
    }
    if (/^(защо е подходящо за лятото|why it is great for summer|warum es fur den sommer passt|pourquoi c'est ideal en ete|por que es ideal para verano|mengapa cocok untuk musim panas)$/i.test(normalized)) {
      return '☀️';
    }
    if (/^(съставки|ingredients|zutaten|ingredients|ingredientes|bahan)$/i.test(normalized)) {
      return '🧾';
    }
    if (/^(стъпки|steps|schritte|etapes|pasos|langkah)$/i.test(normalized)) {
      return '👣';
    }
    if (/^(къде се среща|where to find it|wo es vorkommt|ou on le trouve|donde se encuentra|di mana ditemukan)$/i.test(normalized)) {
      return '📍';
    }
    if (/^(как се яде|how to eat it|wie man es isst|comment le manger|como comerlo|cara makan)$/i.test(normalized)) {
      return '🍽️';
    }
    if (/^(интересно|interesting|interessant|a savoir|dato curioso|fakta menarik)$/i.test(normalized)) {
      return '💡';
    }
    if (/^(заключение|conclusion|fazit|conclusion|conclusion|penutup)$/i.test(normalized)) {
      return '✅';
    }

    return '•';
  }

  function formatBlogArticleLine(line) {
    const trimmed = line.trim();
    if (!trimmed) {
      return '';
    }

    const recipeTitlePattern = /^(Gado-Gado|Sate Lilit|Es Campur)\b/i;
    if (recipeTitlePattern.test(trimmed)) {
      return `<span class="blog-line blog-line-recipe"><span class="blog-line-icon" aria-hidden="true">🍴</span>${trimmed}</span>`;
    }

    const sectionMatch = trimmed.match(/^(.+):$/);
    if (sectionMatch) {
      const labelText = sectionMatch[1].trim();
      const icon = getBlogLineIcon(labelText);
      return `<span class="blog-line blog-line-section"><span class="blog-line-icon" aria-hidden="true">${icon}</span>${trimmed}</span>`;
    }

    return `<span class="blog-line">${trimmed}</span>`;
  }

  function renderBlogArticleText(articleText) {
    const escaped = articleText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    const withBold = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return withBold
      .split(/\r?\n/)
      .map(formatBlogArticleLine)
      .join('<br>');
  }

  function updateLanguageUI() {
    dom.bgBtn.classList.toggle('active', currentLanguage === 'bg');
    dom.enBtn.classList.toggle('active', currentLanguage === 'en');
    if (dom.deBtn) {
      dom.deBtn.classList.toggle('active', currentLanguage === 'de');
    }
    if (dom.frBtn) {
      dom.frBtn.classList.toggle('active', currentLanguage === 'fr');
    }
    if (dom.esBtn) {
      dom.esBtn.classList.toggle('active', currentLanguage === 'es');
    }
    dom.idBtn.classList.toggle('active', currentLanguage === 'id');
    dom.headerTitle.textContent = getTranslation('headerTitle');
    dom.headerSubtitle.textContent = getTranslation('headerSubtitle');
    if (Array.isArray(dom.adBoxLabels) && dom.adBoxLabels.length > 0) {
      const adPlaceholderText = getTranslation('adPlaceholder');
      dom.adBoxLabels.forEach(function (label) {
        label.textContent = adPlaceholderText;
      });
    }
    if (dom.wildlifeInfoBtn) {
      const wildlifeLabel = getTranslation('wildlifeInfoBtn');
      dom.wildlifeInfoBtn.textContent = wildlifeLabel;
      dom.wildlifeInfoBtn.setAttribute('aria-label', wildlifeLabel);
      dom.wildlifeInfoBtn.title = wildlifeLabel;
    }
  }

  function buildImageCandidates(src) {
    const match = src.match(/\.(avif|webp|jpe?g|png)(\?.*)?$/i);
    if (!match) {
      return [src];
    }

    const extension = match[1].toLowerCase();
    const suffix = match[2] || '';
    const base = src.slice(0, src.length - match[0].length);
    const fallbackOrder = {
      avif: ['avif', 'webp', 'jpg'],
      webp: ['webp', 'jpg'],
      jpg: ['jpg', 'webp'],
      jpeg: ['jpeg', 'webp'],
      png: ['png']
    };

    return fallbackOrder[extension].map(function (ext) {
      return `${base}.${ext}${suffix}`;
    });
  }

  function preloadImage(imageElement, src) {
    const candidates = buildImageCandidates(src);

    function tryCandidate(index) {
      if (index >= candidates.length) {
        return;
      }

      const candidate = candidates[index];
      if (imageElement.getAttribute('src') === candidate) {
        return;
      }

      const preloadedImage = new Image();
      preloadedImage.decoding = 'async';
      preloadedImage.onload = function () {
        imageElement.src = candidate;
      };
      preloadedImage.onerror = function () {
        tryCandidate(index + 1);
      };
      preloadedImage.src = candidate;
    }

    tryCandidate(0);
  }

  async function setImageFromCache(imageElement, src) {
    if (!('caches' in window)) {
      return false;
    }

    const candidates = buildImageCandidates(src);
    for (const candidate of candidates) {
      try {
        const cached = await caches.match(candidate);
        if (!cached) {
          continue;
        }

        if (dom.wildlifeObjectUrl) {
          URL.revokeObjectURL(dom.wildlifeObjectUrl);
          dom.wildlifeObjectUrl = null;
        }

        const blob = await cached.blob();
        dom.wildlifeObjectUrl = URL.createObjectURL(blob);
        imageElement.src = dom.wildlifeObjectUrl;
        return true;
      } catch (error) {
        // Ignore cache read errors and continue to fallback path.
      }
    }

    return false;
  }

  function warmImageCandidates(src) {
    buildImageCandidates(src).forEach(function (candidate) {
      const warmupImage = new Image();
      warmupImage.decoding = 'async';
      warmupImage.src = candidate;
    });
  }

  function warmCriticalImages() {
    warmImageCandidates('./assets/images/jakarta-stadium.avif');
    warmImageCandidates(stadiumData.image);
    warmImageCandidates('./assets/images/Screenshot 2026-05-29 142129.png');

    if (indonesiaData.cities.length > 0) {
      warmImageCandidates(indonesiaData.cities[0].image);
    }
  }

  function scheduleCriticalImageWarmup() {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warmCriticalImages, { timeout: 1500 });
      return;
    }

    window.setTimeout(warmCriticalImages, 300);
  }

  function changeLanguage(lang) {
    const supportedLanguages = ['bg', 'en', 'de', 'fr', 'es', 'id'];
    currentLanguage = supportedLanguages.includes(lang) ? lang : 'en';
    document.documentElement.lang = currentLanguage === 'id' ? 'id' : currentLanguage;
    updateLanguageUI();
    loadData();
    localStorage.setItem('preferredLanguage', currentLanguage);
  }

  function openStadiumModal() {
    preloadImage(dom.stadiumModalImage, stadiumData.image);
    updateStadiumModalContent();
    toggleModal(dom.stadiumModal, true);
  }

  function closeStadiumModal() {
    toggleModal(dom.stadiumModal, false);
  }

  function openTicketModal() {
    dom.ticketModalTitle.textContent = getTranslation('ticketModalTitle');
    dom.ticketModalDescription.textContent = getTranslation('ticketModalDescription');
    dom.ticketFormStatus.textContent = '';

    if (!dom.ticketDateInput.value) {
      dom.ticketDateInput.value = new Date().toISOString().split('T')[0];
    }

    toggleModal(dom.ticketModal, true);
  }

  function closeTicketModal() {
    dom.ticketFormStatus.textContent = '';
    toggleModal(dom.ticketModal, false);
  }

  async function loadBlogArticle(lang) {
    const requestedLang = BLOG_ARTICLE_URLS[lang] ? lang : 'en';
    if (blogArticleTextByLanguage[requestedLang]) {
      return blogArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(BLOG_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      blogArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishArticle = await fetchArticleText('en');
        blogArticleTextByLanguage.en = englishArticle;
        return englishArticle;
      }
      throw error;
    }
  }

  async function openBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogModalTitle');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadBlogArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadDolphinArticle(lang) {
    const requestedLang = DOLPHIN_ARTICLE_URLS[lang] ? lang : 'en';
    if (dolphinArticleTextByLanguage[requestedLang]) {
      return dolphinArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(DOLPHIN_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('dolphin_blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      dolphinArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishArticle = await fetchArticleText('en');
        dolphinArticleTextByLanguage.en = englishArticle;
        return englishArticle;
      }
      throw error;
    }
  }

  async function openDolphinBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle2Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadDolphinArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadCruiseArticle(lang) {
    const requestedLang = CRUISE_ARTICLE_URLS[lang] ? lang : 'en';
    if (cruiseArticleTextByLanguage[requestedLang]) {
      return cruiseArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(CRUISE_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('cruise_blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      cruiseArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishArticle = await fetchArticleText('en');
        cruiseArticleTextByLanguage.en = englishArticle;
        return englishArticle;
      }

      const bulgarianArticle = await fetchArticleText('bg');
      cruiseArticleTextByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openCruiseBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle3Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadCruiseArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadLombokArticle(lang) {
    const requestedLang = LOMBOK_ARTICLE_URLS[lang] ? lang : 'en';
    if (lombokArticleTextByLanguage[requestedLang]) {
      return lombokArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(LOMBOK_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('lombok_blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      lombokArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishArticle = await fetchArticleText('en');
        lombokArticleTextByLanguage.en = englishArticle;
        return englishArticle;
      }

      const bulgarianArticle = await fetchArticleText('bg');
      lombokArticleTextByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openLombokBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle4Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadLombokArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadSportsArticle(lang) {
    const requestedLang = SPORTS_ARTICLE_URLS[lang] ? lang : 'bg';
    if (sportsArticleTextByLanguage[requestedLang]) {
      return sportsArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(SPORTS_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('sports_blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      sportsArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticleText('bg');
      sportsArticleTextByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openSportsBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle5Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadSportsArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadTop3FoodArticle(lang) {
    const requestedLang = TOP3_FOOD_ARTICLE_URLS[lang] ? lang : 'bg';
    if (top3FoodArticleTextByLanguage[requestedLang]) {
      return top3FoodArticleTextByLanguage[requestedLang];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(TOP3_FOOD_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('top3_food_blog_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticleText(requestedLang);
      top3FoodArticleTextByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticleText('bg');
      top3FoodArticleTextByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openTop3FoodBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle6Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadTop3FoodArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadFruitSections(lang) {
    const requestedLang = FRUITS_ARTICLE_URLS[lang] ? lang : 'bg';
    if (Array.isArray(fruitSectionsByLanguage[requestedLang]) && fruitSectionsByLanguage[requestedLang].length > 0) {
      return fruitSectionsByLanguage[requestedLang];
    }

    async function fetchSections(languageCode) {
      const response = await fetch(FRUITS_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('fruits_load_failed');
      }
      const articleText = await response.text();
      return parseWaterworldSections(articleText);
    }

    try {
      const sections = await fetchSections(requestedLang);
      fruitSectionsByLanguage[requestedLang] = sections;
      return sections;
    } catch (error) {
      const bulgarianSections = await fetchSections('bg');
      fruitSectionsByLanguage.bg = bulgarianSections;
      return bulgarianSections;
    }
  }

  async function loadParksArticle(lang) {
    const requestedLang = PARKS_ARTICLE_URLS[lang] ? lang : 'bg';
    if (typeof parksArticleByLanguage[requestedLang] === 'string' && parksArticleByLanguage[requestedLang].length > 0) {
      return parksArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(PARKS_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('parks_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      parksArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      parksArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function loadTreesArticle(lang) {
    const requestedLang = TREES_ARTICLE_URLS[lang] ? lang : 'bg';
    if (typeof treesArticleByLanguage[requestedLang] === 'string' && treesArticleByLanguage[requestedLang].length > 0) {
      return treesArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(TREES_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('trees_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      treesArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      treesArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openTreeInfoModal(index) {
    const tree = trees[index];
    if (!tree) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getTreeName(tree);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadTreesArticle(languageAtOpen);
      const sections = parseWaterworldSections(articleText);
      const selected = sections[tree.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadRiversArticle(lang) {
    const requestedLang = REKI_ARTICLE_URLS[lang] ? lang : 'bg';
    if (typeof rekiSectionsByLanguage[requestedLang] === 'string' && rekiSectionsByLanguage[requestedLang].length > 0) {
      return rekiSectionsByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(REKI_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('reki_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      rekiSectionsByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      rekiSectionsByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openRiversBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle8Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadRiversArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadVolcanoArticle(lang) {
    const requestedLang = VOLCANO_ARTICLE_URLS[lang] ? lang : 'bg';
    if (typeof volcanoSectionsByLanguage[requestedLang] === 'string' && volcanoSectionsByLanguage[requestedLang].length > 0) {
      return volcanoSectionsByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(VOLCANO_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('volcano_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      volcanoSectionsByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      volcanoSectionsByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openVolcanoBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle9Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadVolcanoArticle(languageAtOpen);
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadTrainArticle() {
    if (typeof trainArticleByLanguage.bg === 'string' && trainArticleByLanguage.bg.length > 0) {
      return trainArticleByLanguage.bg;
    }

    async function fetchArticle() {
      const response = await fetch('./assets/tekst/vlak.txt?v=20260703a');
      if (!response.ok) {
        throw new Error('train_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle();
      trainArticleByLanguage.bg = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle();
      trainArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openTrainBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle10Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadTrainArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadTrainStoryArticle() {
    const requestedLang = TRAIN_STORY_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof trainStoryArticleByLanguage[requestedLang] === 'string' && trainStoryArticleByLanguage[requestedLang].length > 0) {
      return trainStoryArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(TRAIN_STORY_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('train_story_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      trainStoryArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      trainStoryArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openTrainStoryBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle11Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadTrainStoryArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadBorneoArticle() {
    const requestedLang = BORNEO_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof borneoArticleByLanguage[requestedLang] === 'string' && borneoArticleByLanguage[requestedLang].length > 0) {
      return borneoArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(BORNEO_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('borneo_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      borneoArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      borneoArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openBorneoBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle12Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadBorneoArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadMotorsportArticle() {
    if (typeof motorsportArticleByLanguage.bg === 'string' && motorsportArticleByLanguage.bg.length > 0) {
      return motorsportArticleByLanguage.bg;
    }

    async function fetchArticle() {
      const response = await fetch(MOTORSPORT_ARTICLE_URLS.bg);
      if (!response.ok) {
        throw new Error('motorsport_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle();
      motorsportArticleByLanguage.bg = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle();
      motorsportArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openMotorsportBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle13Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadMotorsportArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadPalembangArticle() {
    const requestedLang = PALEMBANG_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof palembangArticleByLanguage[requestedLang] === 'string' && palembangArticleByLanguage[requestedLang].length > 0) {
      return palembangArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(PALEMBANG_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('palembang_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      palembangArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      palembangArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openPalembangBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle14Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadPalembangArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadFootballArticle() {
    const requestedLang = FOOTBALL_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof footballArticleByLanguage[requestedLang] === 'string' && footballArticleByLanguage[requestedLang].length > 0) {
      return footballArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(FOOTBALL_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('football_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      footballArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      footballArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openFootballBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle15Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadFootballArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadUningBromoArticle() {
    const requestedLang = UNING_BROMO_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof uningBromoArticleByLanguage[requestedLang] === 'string' && uningBromoArticleByLanguage[requestedLang].length > 0) {
      return uningBromoArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(UNING_BROMO_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('uning_bromo_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      uningBromoArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      uningBromoArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openUningBromoBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle16Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadUningBromoArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadSmqhArticle() {
    const requestedLang = SMQH_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof smqhArticleByLanguage[requestedLang] === 'string' && smqhArticleByLanguage[requestedLang].length > 0) {
      return smqhArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(SMQH_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('smqh_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      smqhArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      smqhArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openSmqhBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle17Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadSmqhArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadCarKaloqnArticle() {
    const requestedLang = CAR_KALOQN_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof carKaloqnArticleByLanguage[requestedLang] === 'string' && carKaloqnArticleByLanguage[requestedLang].length > 0) {
      return carKaloqnArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(CAR_KALOQN_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('car_kaloqn_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      carKaloqnArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      carKaloqnArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openCarKaloqnBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle18Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadCarKaloqnArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadTervelArticle() {
    const requestedLang = TERVEL_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof tervelArticleByLanguage[requestedLang] === 'string' && tervelArticleByLanguage[requestedLang].length > 0) {
      return tervelArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(TERVEL_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('tervel_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      tervelArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      tervelArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openTervelBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle19Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadTervelArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadDoiranArticle() {
    const requestedLang = DOIRAN_ARTICLE_URLS[currentLanguage] ? currentLanguage : 'bg';
    if (typeof doiranArticleByLanguage[requestedLang] === 'string' && doiranArticleByLanguage[requestedLang].length > 0) {
      return doiranArticleByLanguage[requestedLang];
    }

    async function fetchArticle(languageCode) {
      const response = await fetch(DOIRAN_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('doiran_load_failed');
      }
      return response.text();
    }

    try {
      const articleText = await fetchArticle(requestedLang);
      doiranArticleByLanguage[requestedLang] = articleText;
      return articleText;
    } catch (error) {
      const bulgarianArticle = await fetchArticle('bg');
      doiranArticleByLanguage.bg = bulgarianArticle;
      return bulgarianArticle;
    }
  }

  async function openDoiranBlogModal() {
    dom.blogModalTitle.textContent = getTranslation('blogArticle20Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadDoiranArticle();
      dom.blogModalContent.innerHTML = renderBlogArticleText(articleText);
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  function parseWaterworldSections(articleText) {
    const normalized = articleText.replace(/\r\n/g, '\n').trim();
    const chunks = normalized.split(/\n(?=\d+\.\s)/);

    return chunks
      .map(function (chunk) {
        return chunk.trim();
      })
      .filter(function (chunk) {
        return /^\d+\.\s/.test(chunk);
      })
      .map(function (chunk) {
        const lines = chunk.split('\n');
        const title = lines[0].replace(/^\d+\.\s*/, '').trim();
        const content = lines.slice(1).join('\n').trim();
        return {
          title: title,
          content: content,
          searchable: `${title}\n${content}`.toLowerCase()
        };
      });
  }

  async function loadLocalizedArticleText(articleUrls, language, cachePrefix, fallbackLanguageOrder) {
    if (!articleUrls) {
      return null;
    }

    const fallbackOrder = Array.isArray(fallbackLanguageOrder) && fallbackLanguageOrder.length > 0
      ? fallbackLanguageOrder
      : ['en', 'bg'];
    const requestedLanguage = articleUrls[language] ? language : (articleUrls.en ? 'en' : (articleUrls.bg ? 'bg' : null));
    if (!requestedLanguage) {
      return null;
    }

    const cacheKey = `${cachePrefix}:${requestedLanguage}`;
    if (marineAnimalArticleTextByLanguage[cacheKey]) {
      return marineAnimalArticleTextByLanguage[cacheKey];
    }

    async function fetchArticleText(languageCode) {
      const response = await fetch(articleUrls[languageCode]);
      if (!response.ok) {
        throw new Error('localized_article_load_failed');
      }
      return response.text();
    }

    const orderedLanguages = [requestedLanguage].concat(fallbackOrder.filter(function (languageCode) {
      return languageCode !== requestedLanguage;
    }));

    for (const languageCode of orderedLanguages) {
      if (!articleUrls[languageCode]) {
        continue;
      }

      try {
        const articleText = await fetchArticleText(languageCode);
        marineAnimalArticleTextByLanguage[cacheKey] = articleText;
        return articleText;
      } catch (error) {
      }
    }

    return null;
  }

  function getWaterworldSectionForAnimal(sections, animal, index) {
    if (Number.isInteger(animal.waterworldSectionIndex) && sections[animal.waterworldSectionIndex]) {
      return sections[animal.waterworldSectionIndex];
    }

    const keywords = Array.isArray(animal.waterworldMatchBg) ? animal.waterworldMatchBg : [];
    const matchedSection = sections.find(function (section) {
      return keywords.some(function (keyword) {
        return section.searchable.includes(keyword);
      });
    });

    return matchedSection || sections[index] || null;
  }

  async function loadWaterworldSections(lang) {
    const requestedLang = WATERWORLD_ARTICLE_URLS[lang] ? lang : 'en';
    if (Array.isArray(waterworldSectionsByLanguage[requestedLang]) && waterworldSectionsByLanguage[requestedLang].length > 0) {
      return waterworldSectionsByLanguage[requestedLang];
    }

    async function fetchSections(languageCode) {
      const response = await fetch(WATERWORLD_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('waterworld_load_failed');
      }
      const articleText = await response.text();
      return parseWaterworldSections(articleText);
    }

    try {
      const sections = await fetchSections(requestedLang);
      waterworldSectionsByLanguage[requestedLang] = sections;
      return sections;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishSections = await fetchSections('en');
        waterworldSectionsByLanguage.en = englishSections;
        return englishSections;
      }
      throw error;
    }
  }

  async function openMarineInfoModal(index) {
    const animal = marineAnimals[index];
    if (!animal) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getMarineAnimalName(animal);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const localizedArticleText = await loadLocalizedArticleText(animal.articleUrls, languageAtOpen, animal.name_en || animal.name_bg || `marine-${index}`);
      if (localizedArticleText) {
        dom.blogModalContent.textContent = localizedArticleText;
      } else {
        const sections = await loadWaterworldSections(languageAtOpen);
        const selected = getWaterworldSectionForAnimal(sections, animal, index);
        if (selected) {
          dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
        } else {
          dom.blogModalContent.textContent = getTranslation('blogLoadError');
        }
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadLandSections(lang) {
    const requestedLang = LAND_ANIMALS_ARTICLE_URLS[lang] ? lang : 'bg';
    if (Array.isArray(landSectionsByLanguage[requestedLang]) && landSectionsByLanguage[requestedLang].length > 0) {
      return landSectionsByLanguage[requestedLang];
    }

    async function fetchSections(languageCode) {
      const response = await fetch(LAND_ANIMALS_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('land_animals_load_failed');
      }
      const articleText = await response.text();
      return parseWaterworldSections(articleText);
    }

    try {
      const sections = await fetchSections(requestedLang);
      landSectionsByLanguage[requestedLang] = sections;
      return sections;
    } catch (error) {
      const bulgarianSections = await fetchSections('bg');
      landSectionsByLanguage.bg = bulgarianSections;
      return bulgarianSections;
    }
  }

  async function openLandInfoModal(index) {
    const animal = landAnimals[index];
    if (!animal) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getLandAnimalName(animal);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      if (animal.articleUrls) {
        const localizedText = await loadLocalizedArticleText(animal.articleUrls, languageAtOpen, animal.name_en || animal.name_bg || `land-${index}`, ['bg', 'en']);
        if (localizedText) {
          dom.blogModalContent.textContent = `${getLandMetaText(animal)}\n\n${localizedText}`;
          return;
        }
      }

      const sections = await loadLandSections(languageAtOpen);
      const fallbackSections = languageAtOpen !== 'bg' ? await loadLandSections('bg') : null;
      const selected = sections[animal.sectionIndex] || sections[index] || (fallbackSections && (fallbackSections[animal.sectionIndex] || fallbackSections[index])) || null;
      if (selected) {
        dom.blogModalContent.textContent = `${getLandMetaText(animal)}\n\n${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = `${getLandMetaText(animal)}\n\n${getLandAnimalName(animal)}`;
      }
    } catch (error) {
      dom.blogModalContent.textContent = `${getLandMetaText(animal)}\n\n${getLandAnimalName(animal)}`;
    }
  }

  async function loadFreshwaterSections(lang) {
    const requestedLang = FRESHWATER_ARTICLE_URLS[lang] ? lang : 'bg';
    if (Array.isArray(freshwaterSectionsByLanguage[requestedLang]) && freshwaterSectionsByLanguage[requestedLang].length > 0) {
      return freshwaterSectionsByLanguage[requestedLang];
    }

    async function fetchSections(languageCode) {
      const response = await fetch(FRESHWATER_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('freshwater_load_failed');
      }
      const articleText = await response.text();
      return parseWaterworldSections(articleText);
    }

    try {
      const sections = await fetchSections(requestedLang);
      freshwaterSectionsByLanguage[requestedLang] = sections;
      return sections;
    } catch (error) {
      const bulgarianSections = await fetchSections('bg');
      freshwaterSectionsByLanguage.bg = bulgarianSections;
      return bulgarianSections;
    }
  }

  async function openFreshwaterInfoModal(index) {
    const animal = freshwaterAnimals[index];
    if (!animal) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getFreshwaterAnimalName(animal);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const sections = await loadFreshwaterSections(languageAtOpen);
      const selected = sections[animal.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${getFreshwaterMetaText(animal)}\n\n${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function loadBirdSections(lang) {
    const requestedLang = BIRDS_ARTICLE_URLS[lang] ? lang : 'en';
    if (Array.isArray(birdSectionsByLanguage[requestedLang]) && birdSectionsByLanguage[requestedLang].length > 0) {
      return birdSectionsByLanguage[requestedLang];
    }

    async function fetchSections(languageCode) {
      const response = await fetch(BIRDS_ARTICLE_URLS[languageCode]);
      if (!response.ok) {
        throw new Error('birds_load_failed');
      }
      const articleText = await response.text();
      return parseWaterworldSections(articleText);
    }

    try {
      const sections = await fetchSections(requestedLang);
      birdSectionsByLanguage[requestedLang] = sections;
      return sections;
    } catch (error) {
      if (requestedLang !== 'en') {
        const englishSections = await fetchSections('en');
        birdSectionsByLanguage.en = englishSections;
        return englishSections;
      }

      const bulgarianSections = await fetchSections('bg');
      birdSectionsByLanguage.bg = bulgarianSections;
      return bulgarianSections;
    }
  }

  async function openBirdInfoModal(index) {
    const bird = birds[index];
    if (!bird) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getBirdName(bird);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const sections = await loadBirdSections(languageAtOpen);
      const selected = sections[bird.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function openFruitInfoModal(index) {
    const fruit = fruits[index];
    if (!fruit) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getFruitName(fruit);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const sections = await loadFruitSections(languageAtOpen);
      const selected = sections[fruit.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  async function openParkInfoModal(index) {
    const park = parks[index];
    if (!park) {
      return;
    }

    const languageAtOpen = currentLanguage;

    dom.blogModalTitle.textContent = getParkName(park);
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const articleText = await loadParksArticle(languageAtOpen);
      const sections = parseWaterworldSections(articleText);
      const selected = sections[park.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
    }
  }

  function closeBlogModal() {
    toggleModal(dom.blogModal, false);
  }

  function handleTicketSubmit(event) {
    event.preventDefault();
    dom.ticketFormStatus.textContent = getTranslation('ticketStatusMessage');
  }

  async function openWildlifeModal() {
    dom.wildlifeModalTitle.textContent = getTranslation('wildlifeTitle');
    dom.wildlifeModalDescription.textContent = getTranslation('wildlifeDescription');

    const loadedFromCache = await setImageFromCache(dom.wildlifeModalImage, './assets/images/Screenshot 2026-05-29 142129.png');
    if (!loadedFromCache) {
      preloadImage(dom.wildlifeModalImage, './assets/images/Screenshot 2026-05-29 142129.png');
    }

    toggleModal(dom.wildlifeModal, true);
  }

  function closeWildlifeModal() {
    if (dom.wildlifeObjectUrl) {
      URL.revokeObjectURL(dom.wildlifeObjectUrl);
      dom.wildlifeObjectUrl = null;
    }
    toggleModal(dom.wildlifeModal, false);
  }

  function openCityModal(index) {
    const city = indonesiaData.cities[index];
    preloadImage(dom.modalImage, city.image);
    updateCityModalContent(city);
    toggleModal(dom.cityModal, true);
  }

  function closeModal() {
    toggleModal(dom.cityModal, false);
  }

  function loadData() {
    try {
      if (!contentRendered) {
        renderContentShell();
      }

      updateContentTranslations();
    } catch (error) {
      console.error('Error loading data:', error);
      dom.content.innerHTML = createErrorHtml();
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function (error) {
        console.warn('Service worker registration failed:', error);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    cacheDomElements();

    const supportedLanguages = ['bg', 'en', 'de', 'fr', 'es', 'id'];
    const savedLang = localStorage.getItem('preferredLanguage') || 'bg';
    currentLanguage = supportedLanguages.includes(savedLang) ? savedLang : 'bg';
    document.documentElement.lang = currentLanguage === 'id' ? 'id' : currentLanguage;
    updateLanguageUI();

    dom.cityModal.addEventListener('click', function (event) {
      if (event.target === dom.cityModal) {
        closeModal();
      }
    });

    dom.stadiumModal.addEventListener('click', function (event) {
      if (event.target === dom.stadiumModal) {
        closeStadiumModal();
      }
    });

    dom.ticketModal.addEventListener('click', function (event) {
      if (event.target === dom.ticketModal) {
        closeTicketModal();
      }
    });

    dom.blogModal.addEventListener('click', function (event) {
      if (event.target === dom.blogModal) {
        closeBlogModal();
      }
    });

    dom.ticketForm.addEventListener('submit', handleTicketSubmit);

    dom.ticketDateInput.min = new Date().toISOString().split('T')[0];

    dom.wildlifeModal.addEventListener('click', function (event) {
      if (event.target === dom.wildlifeModal) {
        closeWildlifeModal();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
        closeStadiumModal();
        closeTicketModal();
        closeWildlifeModal();
        closeBlogModal();
      }
    });

    loadData();
    scheduleCriticalImageWarmup();
    registerServiceWorker();
  });

  window.changeLanguage = changeLanguage;
  window.openCityModal = openCityModal;
  window.closeModal = closeModal;
  window.openStadiumModal = openStadiumModal;
  window.closeStadiumModal = closeStadiumModal;
  window.openTicketModal = openTicketModal;
  window.closeTicketModal = closeTicketModal;
  window.openWildlifeModal = openWildlifeModal;
  window.closeWildlifeModal = closeWildlifeModal;
  window.openBlogModal = openBlogModal;
  window.closeBlogModal = closeBlogModal;
})();
