(function () {
  let currentLanguage = 'bg';

  const translations = window.APP_TRANSLATIONS || {};
  const stadiumData = window.STADIUM_DATA || {};
  const indonesiaData = window.INDONESIA_DATA || { country: {}, cities: [] };

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

  const dom = {};
  let contentRendered = false;

  function cacheDomElements() {
    dom.bgBtn = document.getElementById('bgBtn');
    dom.enBtn = document.getElementById('enBtn');
    dom.headerTitle = document.getElementById('headerTitle');
    dom.headerSubtitle = document.getElementById('headerSubtitle');
    dom.content = document.getElementById('content');
    dom.cityModal = document.getElementById('cityModal');
    dom.stadiumModal = document.getElementById('stadiumModal');
    dom.modalImage = document.getElementById('modalImage');
    dom.modalRank = document.getElementById('modalRank');
    dom.modalTitle = document.getElementById('modalTitle');
    dom.modalDescription = document.getElementById('modalDescription');
    dom.modalPopulation = document.getElementById('modalPopulation');
    dom.modalCoordinates = document.getElementById('modalCoordinates');
    dom.populationLabel = document.getElementById('populationLabel');
    dom.coordinatesLabel = document.getElementById('coordinatesLabel');
    dom.attractionsLabel = document.getElementById('attractionsLabel');
    dom.modalHighlights = document.getElementById('modalHighlights');
    dom.stadiumModalImage = document.getElementById('stadiumModalImage');
    dom.stadiumModalTitle = document.getElementById('stadiumModalTitle');
    dom.stadiumModalDescription = document.getElementById('stadiumModalDescription');
    dom.stadiumCapacityLabel = document.getElementById('stadiumCapacityLabel');
    dom.stadiumOpenedLabel = document.getElementById('stadiumOpenedLabel');
    dom.stadiumUseLabel = document.getElementById('stadiumUseLabel');
    dom.stadiumCapacityValue = document.getElementById('stadiumCapacityValue');
    dom.stadiumOpenedValue = document.getElementById('stadiumOpenedValue');
    dom.stadiumUseValue = document.getElementById('stadiumUseValue');
  }

  function cacheContentElements() {
    dom.countryInfoTitle = document.getElementById('countryInfoTitle');
    dom.stadiumInfoBtn = document.getElementById('stadiumInfoBtn');
    dom.majorCitiesTitle = document.getElementById('majorCitiesTitle');
    dom.dataNotice = document.getElementById('dataNotice');
    countryInfoFields.forEach(function (field) {
      dom[field.id] = document.getElementById(field.id);
    });
    dom.cityPopulationTexts = Array.from(document.querySelectorAll('.city-population'));
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

  function updateCityModalContent(city) {
    const keys = getCityTranslationKeys();

    dom.modalRank.textContent = `#${city.rank} ${getTranslation('mostPopulated')}`;
    dom.modalTitle.textContent = city.name;
    dom.modalDescription.textContent = city[keys.description];
    dom.modalPopulation.textContent = city.population;
    dom.modalCoordinates.textContent = `${city.latitude.toFixed(2)}°, ${city.longitude.toFixed(2)}°`;
    dom.populationLabel.textContent = getTranslation('population');
    dom.coordinatesLabel.textContent = getTranslation('coordinates');
    dom.attractionsLabel.textContent = getTranslation('keyAttractions');
    dom.modalHighlights.innerHTML = city[keys.highlights].map(function (highlight) {
      return `<span class="highlight-badge">${highlight}</span>`;
    }).join('');
  }

  function renderContentShell() {
    dom.content.innerHTML = `
        <div class="card country-info">
          <div class="country-title-row">
            <h2 id="countryInfoTitle"></h2>
            <button id="stadiumInfoBtn" class="stadium-info-btn" type="button"></button>
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

        <div class="api-notice" id="dataNotice"></div>
      `;

    cacheContentElements();

    dom.stadiumInfoBtn.addEventListener('click', openStadiumModal);
    dom.content.addEventListener('click', function (event) {
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
    countryInfoFields.forEach(function (field) {
      dom[field.id].textContent = getTranslation(field.labelKey);
    });
    dom.majorCitiesTitle.textContent = getTranslation('majorCities');
    dom.dataNotice.textContent = getTranslation('dataNotice');

    dom.cityPopulationTexts.forEach(function (populationElement) {
      populationElement.textContent = `${getTranslation('populationLabel')}: ${populationElement.dataset.cityPopulation}`;
    });
  }

  function getTranslation(key) {
    return translations[currentLanguage][key] || key;
  }

  function updateLanguageUI() {
    dom.bgBtn.classList.toggle('active', currentLanguage === 'bg');
    dom.enBtn.classList.toggle('active', currentLanguage === 'en');
    dom.headerTitle.textContent = getTranslation('headerTitle');
    dom.headerSubtitle.textContent = getTranslation('headerSubtitle');
  }

  function preloadImage(imageElement, src) {
    if (imageElement.getAttribute('src') === src) {
      return;
    }

    const preloadedImage = new Image();
    preloadedImage.decoding = 'async';
    preloadedImage.onload = function () {
      imageElement.src = src;
    };
    preloadedImage.src = src;
  }

  function changeLanguage(lang) {
    currentLanguage = lang;
    updateLanguageUI();
    loadData();
    localStorage.setItem('preferredLanguage', lang);
  }

  function openStadiumModal() {
    preloadImage(dom.stadiumModalImage, stadiumData.image);
    updateStadiumModalContent();
    toggleModal(dom.stadiumModal, true);
  }

  function closeStadiumModal() {
    toggleModal(dom.stadiumModal, false);
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

  document.addEventListener('DOMContentLoaded', function () {
    cacheDomElements();

    const savedLang = localStorage.getItem('preferredLanguage') || 'bg';
    currentLanguage = savedLang;
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

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
        closeStadiumModal();
      }
    });

    loadData();
  });

  window.changeLanguage = changeLanguage;
  window.openCityModal = openCityModal;
  window.closeModal = closeModal;
  window.openStadiumModal = openStadiumModal;
  window.closeStadiumModal = closeStadiumModal;
})();
