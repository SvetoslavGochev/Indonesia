(function () {
  let currentLanguage = 'bg';

  const translations = window.APP_TRANSLATIONS || {};
  const stadiumData = window.STADIUM_DATA || {};
  const indonesiaData = window.INDONESIA_DATA || { country: {}, cities: [] };
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
    bg: './assets/tekst/sportstot7.txt?v=20260620',
    en: './assets/tekst/sportstot7.en.txt?v=20260620',
    de: './assets/tekst/sportstot7.de.txt?v=20260620',
    fr: './assets/tekst/sportstot7.fr.txt?v=20260620',
    es: './assets/tekst/sportstot7.es.txt?v=20260620',
    id: './assets/tekst/sportstot7.id.txt?v=20260620'
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
    bg: './assets/tekst/dyrweta.txt?v=20260703b',
    en: './assets/tekst/dyrweta.en.txt?v=20260703b',
    de: './assets/tekst/dyrweta.de.txt?v=20260703b',
    fr: './assets/tekst/dyrweta.fr.txt?v=20260703b',
    es: './assets/tekst/dyrweta.es.txt?v=20260703b',
    id: './assets/tekst/dyrweta.id.txt?v=20260703b'
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
    }
  ];

  const landAnimals = [
    {
      image: './assets/images/land-rhino.jpg',
      sectionIndex: 0,
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
      name_bg: 'Бабируса',
      name_en: 'Babirusa',
      name_de: 'Babirusa',
      name_fr: 'Babiroussa',
      name_es: 'Babirusa',
      name_id: 'Babirusa'
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
      image: './assets/images/tree-rafflesia.webp',
      sectionIndex: 0,
      name_bg: 'Рафлезия',
      name_en: 'Rafflesia',
      name_de: 'Rafflesia',
      name_fr: 'Rafflesia',
      name_es: 'Rafflesia',
      name_id: 'Rafflesia'
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
  const cruiseArticleTextByLanguage = {};
  const birdSectionsByLanguage = {};
  const lombokArticleTextByLanguage = {};
  const sportsArticleTextByLanguage = {};
  const top3FoodArticleTextByLanguage = {};
  const fruitSectionsByLanguage = {};
  const landSectionsByLanguage = {};
  const freshwaterSectionsByLanguage = {};
  const parksSectionsByLanguage = {};
  let visitCountValue = null;

  function cacheDomElements() {
    dom.bgBtn = document.getElementById('bgBtn');
    dom.enBtn = document.getElementById('enBtn');
    dom.deBtn = document.getElementById('deBtn');
    dom.frBtn = document.getElementById('frBtn');
    dom.esBtn = document.getElementById('esBtn');
    dom.idBtn = document.getElementById('idBtn');
    dom.headerTitle = document.getElementById('headerTitle');
    dom.headerSubtitle = document.getElementById('headerSubtitle');
    dom.visitCounter = document.getElementById('visitCounter');
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
    dom.blogArticle7Title = document.getElementById('blogArticle7Title');
    dom.blogArticle7Excerpt = document.getElementById('blogArticle7Excerpt');
    dom.blogReadBtn7 = document.getElementById('blogReadBtn7');
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

  function toBulgarianTranslatedWikipediaUrl(url) {
    if (currentLanguage !== 'bg') {
      return url;
    }

    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname !== 'en.wikipedia.org') {
        return url;
      }

      const translatedUrl = new URL(`https://en-wikipedia-org.translate.goog${parsedUrl.pathname}`);
      parsedUrl.searchParams.forEach(function (value, key) {
        translatedUrl.searchParams.set(key, value);
      });
      translatedUrl.searchParams.set('_x_tr_sl', 'en');
      translatedUrl.searchParams.set('_x_tr_tl', 'bg');
      translatedUrl.searchParams.set('_x_tr_hl', 'bg');
      translatedUrl.searchParams.set('_x_tr_pto', 'wapp');
      return translatedUrl.toString();
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
    dom.modalCoordinates.textContent = `${city.latitude.toFixed(2)}°, ${city.longitude.toFixed(2)}°`;
    dom.populationLabel.textContent = getTranslation('population');
    dom.coordinatesLabel.textContent = getTranslation('coordinates');
    dom.attractionsLabel.textContent = getTranslation('keyAttractions');
    dom.hotelsLabel.textContent = getTranslation('topHotels');
    dom.modalHighlights.innerHTML = localizedHighlights.map(function (highlight, index) {
      const queryTerm = englishHighlights[index] || highlight;
      const directUrl = directHighlightLinks[index];
      const finalUrl = toBulgarianTranslatedWikipediaUrl(directUrl || getAttractionWikipediaUrl(city.name, queryTerm));
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
            <h3 id="blogArticle7Title"></h3>
            <p id="blogArticle7Excerpt" class="blog-excerpt"></p>
            <button id="blogReadBtn7" class="blog-read-btn" type="button"></button>
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
    dom.blogReadBtn7.addEventListener('click', openFruitsBlogModal);
    dom.blogReadBtn8.addEventListener('click', openRiversBlogModal);
    dom.blogReadBtn9.addEventListener('click', openVolcanoBlogModal);
    dom.blogReadBtn10.addEventListener('click', openTrainBlogModal);
    dom.blogReadBtn11.addEventListener('click', openTrainStoryBlogModal);
    dom.blogReadBtn12.addEventListener('click', openBorneoBlogModal);
    dom.blogReadBtn13.addEventListener('click', openMotorsportBlogModal);
    dom.blogReadBtn14.addEventListener('click', openPalembangBlogModal);
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
    dom.blogArticle7Title.textContent = getTranslation('blogArticle7Title');
    dom.blogArticle7Excerpt.textContent = getTranslation('blogArticle7Excerpt');
    dom.blogReadBtn7.textContent = getTranslation('blogReadBtn7');
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
    updateVisitCounterUI();
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



  function updateVisitCounterUI() {
    if (!dom.visitCounter) {
      return;
    }

    const label = getTranslation('visitCounterLabel');
    if (visitCountValue === null) {
      dom.visitCounter.textContent = `${label}: ${getTranslation('visitCounterLoading')}`;
      return;
    }

    dom.visitCounter.textContent = `${label}: ${visitCountValue}`;
  }

  function incrementLocalVisitCounter() {
    const STORAGE_KEY = 'indonesia_explorer_visits';
    const storedCount = localStorage.getItem(STORAGE_KEY);
    const parsedCount = storedCount ? parseInt(storedCount, 10) : 0;
    const nextCount = Number.isFinite(parsedCount) ? parsedCount + 1 : 1;
    localStorage.setItem(STORAGE_KEY, String(nextCount));
    return nextCount;
  }

  function getFirebaseCounterConfig() {
    const config = window.INDO_FIREBASE_CONFIG;
    if (!config) {
      return null;
    }

    if (!config.apiKey || !config.projectId || !config.appId || !config.databaseURL) {
      return null;
    }

    return config;
  }

  function getFirebaseDatabase() {
    const config = getFirebaseCounterConfig();
    if (!config || !window.firebase || !window.firebase.database) {
      return null;
    }

    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config);
    }

    return window.firebase.database();
  }

  async function incrementFirebaseVisitCounter() {
    const database = getFirebaseDatabase();
    if (!database) {
      return null;
    }

    const counterPath = window.INDO_FIREBASE_COUNTER_PATH || 'siteCounters/indonesiaExplorer/visits';
    const counterRef = database.ref(counterPath);
    const result = await counterRef.transaction(function (currentValue) {
      const safeValue = typeof currentValue === 'number' && Number.isFinite(currentValue) ? currentValue : 0;
      return safeValue + 1;
    });

    if (!result.committed || !result.snapshot) {
      throw new Error('Firebase counter transaction failed.');
    }

    return result.snapshot.val();
  }

  async function loadVisitCounter() {
    updateVisitCounterUI();

    try {
      const firebaseCount = await incrementFirebaseVisitCounter();
      if (typeof firebaseCount === 'number' && Number.isFinite(firebaseCount)) {
        visitCountValue = firebaseCount;
        updateVisitCounterUI();
        return;
      }
    } catch (error) {
      console.warn('Firebase visit counter unavailable, falling back to local counter.', error);
    }

    visitCountValue = incrementLocalVisitCounter();
    updateVisitCounterUI();
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

  async function openFruitsBlogModal() {
    const languageAtOpen = currentLanguage;
    dom.blogModalTitle.textContent = getTranslation('blogArticle7Title');
    dom.blogModalContent.textContent = getTranslation('blogLoading');
    toggleModal(dom.blogModal, true);

    try {
      const sections = await loadFruitSections(languageAtOpen);
      const text = sections.map(function (section, index) {
        return `${index + 1}. ${section.title}\n\n${section.content}`;
      }).join('\n\n');
      dom.blogModalContent.textContent = text || getTranslation('blogLoadError');
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
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
      const sections = await loadWaterworldSections(languageAtOpen);
      const selected = getWaterworldSectionForAnimal(sections, animal, index);
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
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
      const sections = await loadLandSections(languageAtOpen);
      const selected = sections[animal.sectionIndex] || sections[index] || null;
      if (selected) {
        dom.blogModalContent.textContent = `${selected.title}\n\n${selected.content}`;
      } else {
        dom.blogModalContent.textContent = getTranslation('blogLoadError');
      }
    } catch (error) {
      dom.blogModalContent.textContent = getTranslation('blogLoadError');
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
    loadVisitCounter();
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
