const panels = document.querySelectorAll('.panel');
const controlPanels = document.querySelectorAll('.control-panel');
const diakoptoDateEl = document.getElementById('diakopto-date');
const diakoptoTimeEl = document.getElementById('diakopto-time');
const diakoptoTempEl = document.getElementById('diakopto-temp');
const diakoptoForecastEl = document.getElementById('diakopto-forecast');
const diakoptoSunEl = document.getElementById('diakopto-sun');
const diakoptoWeatherSymbolEl = document.getElementById('diakopto-weather-symbol');
const diakoptoForecast3El = document.getElementById('diakopto-forecast3');
const outroDateEl = document.getElementById('outro-date');
const outroForecast2El = document.getElementById('outro-forecast2');
const odontotosDateEl = document.getElementById('odontotos-date');
const odontotosTempEl = document.getElementById('odontotos-temp');
const odontotosForecastEl = document.getElementById('odontotos-forecast');
const odontotosWeatherSymbolEl = document.getElementById('odontotos-weather-symbol');
const gorgeDateEl = document.getElementById('gorge-date');
const gorgeTempEl = document.getElementById('gorge-temp');
const gorgeForecastEl = document.getElementById('gorge-forecast');
const gorgeWeatherSymbolEl = document.getElementById('gorge-weather-symbol');
const beachesDateEl = document.getElementById('beaches-date');
const beachesTempEl = document.getElementById('beaches-temp');
const beachesForecastEl = document.getElementById('beaches-forecast');
const beachesWeatherSymbolEl = document.getElementById('beaches-weather-symbol');
const beachesSeaTempEl = document.getElementById('beaches-sea-temp');
const beachesUvEl = document.getElementById('beaches-uv');
const beachesWindEl = document.getElementById('beaches-wind');
const localDateEl = document.getElementById('local-date');
const localTimeEl = document.getElementById('local-time');
const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
const outroFooterEl = document.getElementById('outro-footer');

const DIAKOPTO_COORDS = {
  lat: 38.191,
  lon: 22.201,
};

const VOURAIKOS_GORGE_COORDS = {
  lat: 38.089,
  lon: 22.166,
};

const ODONTOTOS_COORDS = {
  lat: 38.035,
  lon: 22.110,
};

const EGKALI_BEACH_COORDS = {
  lat: 38.173,
  lon: 22.160,
};
const DIAKOPTO_TENDAY_WEATHER_URL = 'https://weather.com/weather/tenday/l/38.191,22.201';
const HERO_BACKGROUND_SRC = 'assets/photos/section_1/sea-big.webp';

const SUPPORTED_LANGUAGES = ['en', 'el'];
let currentLanguage = localStorage.getItem('discover-language');

if (!SUPPORTED_LANGUAGES.includes(currentLanguage)) {
  currentLanguage = 'en';
}

const I18N = {
  en: {
    pageTitle: 'Discover Diakopto',
    na: 'N/A',
    noData: 'No data',
    seaPrefix: 'Sea',
    uvPrefix: 'UV',
    tenDayForecastAria: 'Diakopto 10 day weather forecast',
    footer: 'Designed by <span class="outro-studio">NOUSTELOS_STUDIO /></span> official partner of <span class="outro-host">WEB HOST PRO</span> Aigialeia | 2026 © all rights reserved.',
    textById: {
      'hero-maps-label': 'Google Maps',
      'hero-stay': 'STAY',
      'hero-train': 'TRAIN',
      'hero-tickets': 'TICKETS',
      'hero-plan': 'PLAN',
      'odontotos-title': 'Odontotos Railway',
      'odontotos-subtitle': 'A journey carved into the mountain.',
      'odontotos-discover': '→ Discover',
      'odontotos-maps': 'GOOGLE MAPS',
      'odontotos-tickets': 'TICKETS',
      'odontotos-station': 'Diakopto Station',
      'gorge-title': 'Vouraikos Gorge',
      'gorge-subtitle': 'Where silence becomes landscape.',
      'gorge-discover': '→ Discover',
      'gorge-maps': 'Google Maps ↗',
      'beaches-title': 'Beaches',
      'beaches-subtitle': 'Light, salt, and slow time.',
      'beaches-discover': '→ Discover',
      'beaches-maps': 'Google Maps ↗',
      'local-title': 'Local Life',
      'local-subtitle': 'Moments that don\'t try too hard.',
      'local-discover': '→ Discover',
      'local-breakfast': 'Breakfast',
      'local-eat': 'Eat & Drink',
      'local-activities': 'Activities',
      'local-useful': 'Useful Info',
      'outro-title': 'Diakopto isn\'t a place.',
      'outro-subtitle': 'It\'s a pause.',
      'outro-stay': 'STAY',
      'outro-train': 'TRAIN',
      'outro-map': 'MAP',
      'outro-plan': 'PLAN',
    },
    ariaById: {
      'hero-stay': 'Stay options',
      'hero-train': 'Train options',
      'hero-tickets': 'Tickets options',
      'hero-plan': 'Plan your visit',
      'diakopto-forecast': 'Diakopto weekly weather forecast',
      'odontotos-forecast': 'Odontotos weekly weather forecast',
      'gorge-forecast': 'Vouraikos Gorge weekly weather forecast',
      'beaches-forecast': 'Egkali beach weekly weather forecast',
      'odontotos-maps': 'Google Maps route',
      'odontotos-tickets': 'Tickets',
      'odontotos-station': 'Call Diakopto Station',
      'local-breakfast': 'Breakfast',
      'local-eat': 'Eat & Drink',
      'local-activities': 'Activities',
      'local-useful': 'Useful info',
      'outro-stay': 'Stay options',
      'outro-train': 'Train options',
      'outro-map': 'Open map',
      'outro-plan': 'Plan your visit',
    },
    weatherMap: {
      0: 'Clear sky',
      1: 'Mostly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Rime fog',
      51: 'Light drizzle',
      53: 'Drizzle',
      55: 'Heavy drizzle',
      61: 'Light rain',
      63: 'Rain',
      65: 'Heavy rain',
      71: 'Light snow',
      73: 'Snow',
      75: 'Heavy snow',
      80: 'Light showers',
      81: 'Showers',
      82: 'Heavy showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with hail',
      99: 'Severe thunderstorm with hail',
    },
    weatherDefault: 'Variable weather',
  },
  el: {
    pageTitle: 'Ανακαλύψτε το Διακοπτό',
    na: 'Δ/Υ',
    noData: 'Χωρίς δεδομένα',
    seaPrefix: 'Θάλασσα',
    uvPrefix: 'UV',
    tenDayForecastAria: '10ήμερη πρόγνωση καιρού Διακοπτού',
    footer: 'Σχεδιασμός από <span class="outro-studio">NOUSTELOS_STUDIO /></span> επίσημος συνεργάτης της <span class="outro-host">WEB HOST PRO</span> Αιγιάλειας | 2026 © με επιφύλαξη παντός δικαιώματος.',
    textById: {
      'hero-maps-label': 'Google Maps',
      'hero-stay': 'ΔΙΑΜΟΝΗ',
      'hero-train': 'ΤΡΑΙΝΟ',
      'hero-tickets': 'ΕΙΣΙΤΗΡΙΑ',
      'hero-plan': 'ΠΛΑΝΟ',
      'odontotos-title': 'Οδοντωτός Σιδηρόδρομος',
      'odontotos-subtitle': 'Μια διαδρομή χαραγμένη στο βουνό.',
      'odontotos-discover': '→ Discover',
      'odontotos-maps': 'GOOGLE MAPS',
      'odontotos-tickets': 'ΕΙΣΙΤΗΡΙΑ',
      'odontotos-station': 'Σταθμός Διακοπτού',
      'gorge-title': 'Φαράγγι Βουραϊκού',
      'gorge-subtitle': 'Εκεί όπου η σιωπή γίνεται τοπίο.',
      'gorge-discover': '→ Discover',
      'gorge-maps': 'Google Maps ↗',
      'beaches-title': 'Παραλίες',
      'beaches-subtitle': 'Φως, αλάτι και αργός χρόνος.',
      'beaches-discover': '→ Discover',
      'beaches-maps': 'Google Maps ↗',
      'local-title': 'Τοπική Ζωή',
      'local-subtitle': 'Η τοπική ζωή στο Διακοπτό ξετυλίγεται γύρω από το γραφικό του λιμανάκι, όπου οι κάτοικοι απολαμβάνουν ολόφρεσκο ψάρι με θέα τον Κορινθιακό κόλπο. Η αυθεντική γαστρονομία αποτελεί το απόλυτο σημείο συνάντησης, με παραδοσιακά στέκια όπως το καφενείο "Ο Γουρλής" στα γειτονικά Ζαχλωρίτικα να συγκεντρώνουν τον κόσμο για σπιτικά μπιφτέκια και χειροποίητες τυρόπιτες.',
      'local-discover': '→ Discover',
      'local-breakfast': 'Πρωινό',
      'local-eat': 'Φαγητό & Ποτό',
      'local-activities': 'Δραστηριότητες',
      'local-useful': 'Χρήσιμες Πληροφορίες',
      'outro-title': 'Το Διακοπτό δεν είναι απλώς τόπος.',
      'outro-subtitle': 'Είναι μια παύση.',
      'outro-stay': 'ΔΙΑΜΟΝΗ',
      'outro-train': 'ΤΡΑΙΝΟ',
      'outro-map': 'ΧΑΡΤΗΣ',
      'outro-plan': 'ΠΛΑΝΟ',
    },
    ariaById: {
      'hero-stay': 'Επιλογές διαμονής',
      'hero-train': 'Επιλογές τρένου',
      'hero-tickets': 'Επιλογές εισιτηρίων',
      'hero-plan': 'Οργάνωσε την επίσκεψή σου',
      'diakopto-forecast': 'Εβδομαδιαία πρόγνωση καιρού Διακοπτού',
      'odontotos-forecast': 'Εβδομαδιαία πρόγνωση καιρού Οδοντωτού',
      'gorge-forecast': 'Εβδομαδιαία πρόγνωση καιρού Φαραγγιού Βουραϊκού',
      'beaches-forecast': 'Εβδομαδιαία πρόγνωση καιρού Παραλιών Εγκάλης',
      'odontotos-maps': 'Διαδρομή Google Maps',
      'odontotos-tickets': 'Εισιτήρια',
      'odontotos-station': 'Κλήση Σταθμού Διακοπτού',
      'local-breakfast': 'Πρωινό',
      'local-eat': 'Φαγητό & Ποτό',
      'local-activities': 'Δραστηριότητες',
      'local-useful': 'Χρήσιμες πληροφορίες',
      'outro-stay': 'Επιλογές διαμονής',
      'outro-train': 'Επιλογές τρένου',
      'outro-map': 'Άνοιγμα χάρτη',
      'outro-plan': 'Οργάνωσε την επίσκεψή σου',
    },
    weatherMap: {
      0: 'Καθαρός ουρανός',
      1: 'Κυρίως αίθριος',
      2: 'Λίγες νεφώσεις',
      3: 'Συννεφιά',
      45: 'Ομίχλη',
      48: 'Παγετώδης ομίχλη',
      51: 'Ασθενής ψιχάλα',
      53: 'Ψιχάλα',
      55: 'Ισχυρή ψιχάλα',
      61: 'Ελαφριά βροχή',
      63: 'Βροχή',
      65: 'Ισχυρή βροχή',
      71: 'Ασθενής χιονόπτωση',
      73: 'Χιονόπτωση',
      75: 'Ισχυρή χιονόπτωση',
      80: 'Ασθενείς μπόρες',
      81: 'Μπόρες',
      82: 'Ισχυρές μπόρες',
      95: 'Καταιγίδα',
      96: 'Καταιγίδα με χαλάζι',
      99: 'Ισχυρή καταιγίδα με χαλάζι',
    },
    weatherDefault: 'Μεταβλητός καιρός',
  },
};

function t(key) {
  return I18N[currentLanguage][key];
}

function setElementTextById(elementId, text) {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }

  element.textContent = text;
}

function applyLanguage(languageCode) {
  const normalizedLanguage = SUPPORTED_LANGUAGES.includes(languageCode) ? languageCode : 'en';
  currentLanguage = normalizedLanguage;
  localStorage.setItem('discover-language', currentLanguage);

  document.documentElement.lang = currentLanguage;
  document.title = t('pageTitle');

  Object.entries(t('textById')).forEach(([elementId, value]) => {
    setElementTextById(elementId, value);
  });

  Object.entries(t('ariaById')).forEach(([elementId, value]) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.setAttribute('aria-label', value);
    }
  });

  if (outroFooterEl) {
    outroFooterEl.innerHTML = t('footer');
  }

  langToggleButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function activateHeroWhenBackgroundReady() {
  const hero = document.querySelector('.hero');
  if (!hero) {
    return;
  }

  const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;

  let didActivate = false;
  const activateHero = () => {
    if (didActivate) {
      return;
    }

    didActivate = true;
    hero.classList.add('active');
  };

  const heroImage = new Image();
  heroImage.onload = activateHero;
  heroImage.onerror = activateHero;
  heroImage.src = HERO_BACKGROUND_SRC;

  // Mobile should reveal hero quickly so title and controls are not delayed.
  if (isMobileViewport) {
    setTimeout(activateHero, 180);
  } else {
    // Fallback for very slow networks so hero content is never blocked.
    setTimeout(activateHero, 1400);
  }
}

function removeAccentsFromGreekCapitals(text) {
  if (typeof text !== 'string') {
    return text;
  }

  return text
    .replace(/Ά/g, 'Α')
    .replace(/Έ/g, 'Ε')
    .replace(/Ή/g, 'Η')
    .replace(/Ί/g, 'Ι')
    .replace(/Ό/g, 'Ο')
    .replace(/Ύ/g, 'Υ')
    .replace(/Ώ/g, 'Ω')
    .replace(/Ϊ/g, 'Ι')
    .replace(/Ϋ/g, 'Υ');
}

function updateDiakoptoClock() {
  if (!diakoptoDateEl && !diakoptoTimeEl && !outroDateEl && !odontotosDateEl && !gorgeDateEl && !beachesDateEl && !localDateEl && !localTimeEl) {
    return;
  }

  const now = new Date();

  const locale = currentLanguage === 'el' ? 'el-GR' : 'en-GB';

  const fullDateFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: 'Europe/Athens',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const fullDateTextRaw = fullDateFormatter.format(now).replace(',', '');
  const fullDateText = fullDateTextRaw.charAt(0).toUpperCase() + fullDateTextRaw.slice(1);

  if (diakoptoDateEl) {
    diakoptoDateEl.textContent = fullDateText;
  }

  if (outroDateEl) {
    outroDateEl.textContent = fullDateText;
  }

  if (odontotosDateEl) {
    odontotosDateEl.textContent = fullDateText;
  }

  if (gorgeDateEl) {
    gorgeDateEl.textContent = fullDateText;
  }

  if (beachesDateEl) {
    beachesDateEl.textContent = fullDateText;
  }

  if (localDateEl) {
    localDateEl.textContent = fullDateText;
  }

  if (diakoptoTimeEl) {
    const timeFormatter = new Intl.DateTimeFormat(locale, {
      timeZone: 'Europe/Athens',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    diakoptoTimeEl.textContent = removeAccentsFromGreekCapitals(timeFormatter.format(now));

    if (localTimeEl) {
      localTimeEl.textContent = removeAccentsFromGreekCapitals(timeFormatter.format(now));
    }
  } else if (localTimeEl) {
    const localTimeFormatter = new Intl.DateTimeFormat(locale, {
      timeZone: 'Europe/Athens',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    localTimeEl.textContent = removeAccentsFromGreekCapitals(localTimeFormatter.format(now));
  }
}

function getWeatherLabel(weatherCode) {
  const weatherMap = t('weatherMap');
  return weatherMap[weatherCode] || t('weatherDefault');
}

function getWeatherSymbol(weatherCode) {
  if (weatherCode === 0 || weatherCode === 1) {
    return 'sun';
  }

  if (weatherCode === 2 || weatherCode === 3 || weatherCode === 45 || weatherCode === 48) {
    return 'cloud';
  }

  if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) {
    return 'rain';
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return 'snow';
  }

  if (weatherCode >= 95) {
    return 'storm';
  }

  return 'partly';
}

function getWeatherIconSvg(iconName) {
  const icons = {
    sun: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.5V6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 18V20.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M3.5 12H6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M18 12H20.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M6.2 6.2L7.9 7.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.1 16.1L17.8 17.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16.1 7.9L17.8 6.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M6.2 17.8L7.9 16.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    cloud: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 18.3H16.8C19.1 18.3 20.9 16.7 20.9 14.5C20.9 12.4 19.4 10.8 17.3 10.7C16.7 8.6 14.9 7.2 12.7 7.2C10.3 7.2 8.3 8.9 7.8 11.2C5.8 11.4 4.3 13 4.3 14.9C4.3 16.8 5.7 18.3 7.3 18.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    rain: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 14.7H16.8C19.1 14.7 20.9 13.1 20.9 10.9C20.9 8.8 19.4 7.2 17.3 7.1C16.7 5 14.9 3.6 12.7 3.6C10.3 3.6 8.3 5.3 7.8 7.6C5.8 7.8 4.3 9.4 4.3 11.3C4.3 13.2 5.7 14.7 7.3 14.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 17.4L8.2 19.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12.2 17.4L11.4 19.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.4 17.4L14.6 19.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    snow: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 14.7H16.8C19.1 14.7 20.9 13.1 20.9 10.9C20.9 8.8 19.4 7.2 17.3 7.1C16.7 5 14.9 3.6 12.7 3.6C10.3 3.6 8.3 5.3 7.8 7.6C5.8 7.8 4.3 9.4 4.3 11.3C4.3 13.2 5.7 14.7 7.3 14.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.2 17.9H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10.1 17L10.1 18.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M13.8 17.9H15.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14.7 17L14.7 18.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    storm: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 14.7H16.8C19.1 14.7 20.9 13.1 20.9 10.9C20.9 8.8 19.4 7.2 17.3 7.1C16.7 5 14.9 3.6 12.7 3.6C10.3 3.6 8.3 5.3 7.8 7.6C5.8 7.8 4.3 9.4 4.3 11.3C4.3 13.2 5.7 14.7 7.3 14.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12.2 15.9L10.8 18.2H12.7L11.8 20.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    partly: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 14.9H16.8C18.9 14.9 20.5 13.4 20.5 11.4C20.5 9.6 19.2 8.1 17.4 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="9" cy="8.6" r="2.6" stroke="currentColor" stroke-width="1.7"/><path d="M9 4.3V5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5.8 8.6H4.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M11.4 6.2L12.2 5.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  };

  return icons[iconName] || icons.partly;
}

function toBeaufortScale(speedKmh) {
  if (typeof speedKmh !== 'number' || speedKmh < 0) {
    return null;
  }

  if (speedKmh < 1) return 0;
  if (speedKmh <= 5.9) return 1;
  if (speedKmh <= 11.9) return 2;
  if (speedKmh <= 19.9) return 3;
  if (speedKmh <= 28.9) return 4;
  if (speedKmh <= 38.9) return 5;
  if (speedKmh <= 49.9) return 6;
  if (speedKmh <= 61.9) return 7;
  if (speedKmh <= 74.9) return 8;
  if (speedKmh <= 88.9) return 9;
  if (speedKmh <= 102.9) return 10;
  if (speedKmh <= 117.9) return 11;
  return 12;
}

function degreesToCompass(degrees) {
  if (typeof degrees !== 'number') {
    return '--';
  }

  const normalized = ((degrees % 360) + 360) % 360;
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(normalized / 45) % 8;

  return directions[index];
}

function formatIsoTime(isoString) {
  if (typeof isoString !== 'string' || !isoString.includes('T')) {
    return '--:--';
  }

  const timePart = isoString.split('T')[1];
  if (!timePart) {
    return '--:--';
  }

  return timePart.slice(0, 5);
}

function formatForecastDay(dateString, weatherCode, minTemp, maxTemp) {
  if (typeof dateString !== 'string') {
    return '--';
  }

  const date = new Date(`${dateString}T00:00:00`);
  const locale = currentLanguage === 'el' ? 'el-GR' : 'en-GB';
  const dayLabel = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    timeZone: 'Europe/Athens',
  }).format(date);

  const weatherLabel = getWeatherLabel(weatherCode);
  const minValue = typeof minTemp === 'number' ? `${Math.round(minTemp)}°` : '--';
  const maxValue = typeof maxTemp === 'number' ? `${Math.round(maxTemp)}°` : '--';

  return {
    day: removeAccentsFromGreekCapitals(dayLabel),
    temp: `${minValue} / ${maxValue}`,
    desc: removeAccentsFromGreekCapitals(weatherLabel),
    symbol: getWeatherSymbol(weatherCode),
  };
}

function renderThreeDayForecast(dailyData) {
  if (!diakoptoForecast3El) {
    return;
  }

  const dates = dailyData?.time || [];
  const weatherCodes = dailyData?.weather_code || [];
  const mins = dailyData?.temperature_2m_min || [];
  const maxs = dailyData?.temperature_2m_max || [];

  const items = Array.from({ length: 2 }, (_, index) => (
    formatForecastDay(dates[index], weatherCodes[index], mins[index], maxs[index])
  ));

  diakoptoForecast3El.innerHTML = items
    .map((item) => `
      <li>
        <a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}">
          <span class="forecast-day">${item.day}</span>
          <span class="forecast-temp"><span class="forecast-icon">${getWeatherIconSvg(item.symbol)}</span>${item.temp}</span>
          <span class="forecast-desc">${item.desc}</span>
        </a>
      </li>
    `)
    .join('');
}

function renderOutroTwoDayForecast(dailyData) {
  if (!outroForecast2El) {
    return;
  }

  const dates = dailyData?.time || [];
  const weatherCodes = dailyData?.weather_code || [];
  const mins = dailyData?.temperature_2m_min || [];
  const maxs = dailyData?.temperature_2m_max || [];

  const items = Array.from({ length: 2 }, (_, index) => (
    formatForecastDay(dates[index], weatherCodes[index], mins[index], maxs[index])
  ));

  outroForecast2El.innerHTML = items
    .map((item) => `
      <li>
        <a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}">
          <span class="forecast-day">${item.day}</span>
          <span class="forecast-temp"><span class="forecast-icon">${getWeatherIconSvg(item.symbol)}</span>${item.temp}</span>
          <span class="forecast-desc">${item.desc}</span>
        </a>
      </li>
    `)
    .join('');
}

async function updateDiakoptoWeatherData() {
  if (!diakoptoTempEl || !diakoptoForecastEl || !diakoptoSunEl || !diakoptoForecast3El) {
    return;
  }

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${DIAKOPTO_COORDS.lat}&longitude=${DIAKOPTO_COORDS.lon}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FAthens`;
    const response = await fetch(apiUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    const temperature = data?.current?.temperature_2m;
    const daily = data?.daily;
    const weatherCode = daily?.weather_code?.[0];
    const maxTemp = daily?.temperature_2m_max?.[0];
    const minTemp = daily?.temperature_2m_min?.[0];
    const sunrise = daily?.sunrise?.[0];
    const sunset = daily?.sunset?.[0];

    if (typeof temperature !== 'number') {
      throw new Error('Temperature is missing from API response');
    }

    diakoptoTempEl.textContent = `${temperature.toFixed(1)}°C`;

    if (typeof maxTemp === 'number' && typeof minTemp === 'number') {
      const forecastLabel = removeAccentsFromGreekCapitals(getWeatherLabel(weatherCode));
      diakoptoForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}° / ${maxTemp.toFixed(0)}°)`;
    } else {
      diakoptoForecastEl.textContent = t('na');
    }

    if (diakoptoWeatherSymbolEl) {
      diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg(getWeatherSymbol(weatherCode));
    }

    diakoptoSunEl.textContent = `${formatIsoTime(sunrise)} / ${formatIsoTime(sunset)}`;
    renderThreeDayForecast(daily);
    renderOutroTwoDayForecast(daily);
  } catch (error) {
    diakoptoTempEl.textContent = t('na');
    diakoptoForecastEl.textContent = t('na');
    diakoptoSunEl.textContent = '--:-- / --:--';
    if (diakoptoWeatherSymbolEl) {
      diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
    }
    diakoptoForecast3El.innerHTML = `<li><a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}"><span class="forecast-day">${t('na')}</span><span class="forecast-temp">--/--</span><span class="forecast-desc">${t('noData')}</span></a></li><li><a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}"><span class="forecast-day">${t('na')}</span><span class="forecast-temp">--/--</span><span class="forecast-desc">${t('noData')}</span></a></li>`;
    if (outroForecast2El) {
      outroForecast2El.innerHTML = `<li><a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}"><span class="forecast-day">${t('na')}</span><span class="forecast-temp">--/--</span><span class="forecast-desc">${t('noData')}</span></a></li><li><a class="forecast-link-card metric-link" href="${DIAKOPTO_TENDAY_WEATHER_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('tenDayForecastAria')}"><span class="forecast-day">${t('na')}</span><span class="forecast-temp">--/--</span><span class="forecast-desc">${t('noData')}</span></a></li>`;
    }
  }
}

async function updateGorgeWeatherData() {
  if (!gorgeTempEl || !gorgeForecastEl || !gorgeWeatherSymbolEl) {
    return;
  }

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${VOURAIKOS_GORGE_COORDS.lat}&longitude=${VOURAIKOS_GORGE_COORDS.lon}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FAthens`;
    const response = await fetch(apiUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    const temperature = data?.current?.temperature_2m;
    const weatherCode = data?.daily?.weather_code?.[0];
    const maxTemp = data?.daily?.temperature_2m_max?.[0];
    const minTemp = data?.daily?.temperature_2m_min?.[0];
    const weatherSymbolKey = getWeatherSymbol(weatherCode);

    if (typeof temperature !== 'number') {
      throw new Error('Temperature is missing from API response');
    }

    gorgeTempEl.textContent = `${temperature.toFixed(1)}°C`;
    gorgeWeatherSymbolEl.innerHTML = getWeatherIconSvg(weatherSymbolKey);

    if (typeof maxTemp === 'number' && typeof minTemp === 'number') {
      const forecastLabel = removeAccentsFromGreekCapitals(getWeatherLabel(weatherCode));
      gorgeForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}° / ${maxTemp.toFixed(0)}°)`;
    } else {
      gorgeForecastEl.textContent = t('na');
    }
  } catch (error) {
    gorgeTempEl.textContent = t('na');
    gorgeForecastEl.textContent = t('na');
    gorgeWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }
}

async function updateOdontotosWeatherData() {
  if (!odontotosTempEl || !odontotosForecastEl || !odontotosWeatherSymbolEl) {
    return;
  }

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${ODONTOTOS_COORDS.lat}&longitude=${ODONTOTOS_COORDS.lon}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FAthens`;
    const response = await fetch(apiUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    const temperature = data?.current?.temperature_2m;
    const weatherCode = data?.daily?.weather_code?.[0];
    const maxTemp = data?.daily?.temperature_2m_max?.[0];
    const minTemp = data?.daily?.temperature_2m_min?.[0];
    const weatherSymbolKey = getWeatherSymbol(weatherCode);

    if (typeof temperature !== 'number') {
      throw new Error('Temperature is missing from API response');
    }

    odontotosTempEl.textContent = `${temperature.toFixed(1)}°C`;
    odontotosWeatherSymbolEl.innerHTML = getWeatherIconSvg(weatherSymbolKey);

    if (typeof maxTemp === 'number' && typeof minTemp === 'number') {
      const forecastLabel = removeAccentsFromGreekCapitals(getWeatherLabel(weatherCode));
      odontotosForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}° / ${maxTemp.toFixed(0)}°)`;
    } else {
      odontotosForecastEl.textContent = t('na');
    }
  } catch (error) {
    odontotosTempEl.textContent = t('na');
    odontotosForecastEl.textContent = t('na');
    odontotosWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }
}

async function updateBeachesWeatherData() {
  if (!beachesTempEl || !beachesForecastEl || !beachesWeatherSymbolEl || !beachesSeaTempEl || !beachesUvEl || !beachesWindEl) {
    return;
  }

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${EGKALI_BEACH_COORDS.lat}&longitude=${EGKALI_BEACH_COORDS.lon}&current=temperature_2m,uv_index,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FAthens`;
    const response = await fetch(apiUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    const temperature = data?.current?.temperature_2m;
    const uvIndex = data?.current?.uv_index;
    const windSpeed = data?.current?.wind_speed_10m;
    const windDirection = data?.current?.wind_direction_10m;
    const weatherCode = data?.daily?.weather_code?.[0];
    const maxTemp = data?.daily?.temperature_2m_max?.[0];
    const minTemp = data?.daily?.temperature_2m_min?.[0];
    const weatherSymbolKey = getWeatherSymbol(weatherCode);

    if (typeof temperature !== 'number') {
      throw new Error('Temperature is missing from API response');
    }

    beachesTempEl.textContent = `${temperature.toFixed(1)}°C`;
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg(weatherSymbolKey);

    if (typeof maxTemp === 'number' && typeof minTemp === 'number') {
      const forecastLabel = removeAccentsFromGreekCapitals(getWeatherLabel(weatherCode));
      beachesForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}° / ${maxTemp.toFixed(0)}°)`;
    } else {
      beachesForecastEl.textContent = t('na');
    }

    beachesUvEl.textContent = typeof uvIndex === 'number' ? `${t('uvPrefix')}: ${uvIndex.toFixed(1)}` : `${t('uvPrefix')}: ${t('na')}`;

    if (typeof windSpeed === 'number') {
      const directionLabel = degreesToCompass(windDirection);
      const beaufortScale = toBeaufortScale(windSpeed);
      const beaufortLabel = typeof beaufortScale === 'number' ? `${beaufortScale} Bft` : '-- Bft';
      beachesWindEl.textContent = `${beaufortLabel} / ${windSpeed.toFixed(1)} km/h (${directionLabel})`;
    } else {
      beachesWindEl.textContent = `${t('na')} / ${t('na')} (--)`;
    }

    const marineApiUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${EGKALI_BEACH_COORDS.lat}&longitude=${EGKALI_BEACH_COORDS.lon}&hourly=sea_surface_temperature&timezone=Europe%2FAthens`;
    const marineResponse = await fetch(marineApiUrl, { cache: 'no-store' });

    if (!marineResponse.ok) {
      throw new Error(`Marine API error: ${marineResponse.status}`);
    }

    const marineData = await marineResponse.json();
    const seaTemperatureValues = marineData?.hourly?.sea_surface_temperature || [];
    const seaTemperatureTimes = marineData?.hourly?.time || [];
    const currentHourIso = new Date().toISOString().slice(0, 13);
    const matchingIndex = seaTemperatureTimes.findIndex((time) => typeof time === 'string' && time.slice(0, 13) === currentHourIso);
    const seaTemperature = matchingIndex >= 0
      ? seaTemperatureValues[matchingIndex]
      : seaTemperatureValues.find((value) => typeof value === 'number');

    if (typeof seaTemperature === 'number') {
      beachesSeaTempEl.textContent = `${t('seaPrefix')}: ${seaTemperature.toFixed(1)}°C`;
    } else {
      beachesSeaTempEl.textContent = `${t('seaPrefix')}: ${t('na')}`;
    }
  } catch (error) {
    beachesTempEl.textContent = t('na');
    beachesForecastEl.textContent = t('na');
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
    beachesSeaTempEl.textContent = `${t('seaPrefix')}: ${t('na')}`;
    beachesUvEl.textContent = `${t('uvPrefix')}: ${t('na')}`;
    beachesWindEl.textContent = `${t('na')} / ${t('na')} (--)`;
  }
}

function refreshAllLiveData() {
  updateDiakoptoClock();
  updateDiakoptoWeatherData();
  updateOdontotosWeatherData();
  updateGorgeWeatherData();
  updateBeachesWeatherData();
}

langToggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const requestedLanguage = button.dataset.lang;
    if (!requestedLanguage || requestedLanguage === currentLanguage) {
      return;
    }

    applyLanguage(requestedLanguage);
    refreshAllLiveData();
  });
});

window.addEventListener('load', () => {
  activateHeroWhenBackgroundReady();
  applyLanguage(currentLanguage);

  if (diakoptoWeatherSymbolEl) {
    diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  if (gorgeWeatherSymbolEl) {
    gorgeWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  if (odontotosWeatherSymbolEl) {
    odontotosWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  if (beachesWeatherSymbolEl) {
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  refreshAllLiveData();

  setInterval(updateDiakoptoClock, 1000);
  setInterval(updateDiakoptoWeatherData, 30 * 60 * 1000);
  setInterval(updateOdontotosWeatherData, 30 * 60 * 1000);
  setInterval(updateGorgeWeatherData, 30 * 60 * 1000);
  setInterval(updateBeachesWeatherData, 30 * 60 * 1000);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('hero')) {
      return;
    }

    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.6 });

panels.forEach((panel) => {
  observer.observe(panel);
});

if (controlPanels.length > 0) {
  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        panelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  controlPanels.forEach((controlPanel) => {
    panelObserver.observe(controlPanel);
  });
}
