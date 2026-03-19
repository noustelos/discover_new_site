const panels = document.querySelectorAll('.panel');
const diakoptoDateEl = document.getElementById('diakopto-date');
const diakoptoTimeEl = document.getElementById('diakopto-time');
const diakoptoTempEl = document.getElementById('diakopto-temp');
const diakoptoForecastEl = document.getElementById('diakopto-forecast');
const diakoptoSunEl = document.getElementById('diakopto-sun');
const diakoptoWeatherSymbolEl = document.getElementById('diakopto-weather-symbol');
const diakoptoForecast3El = document.getElementById('diakopto-forecast3');
const gorgeTempEl = document.getElementById('gorge-temp');
const gorgeForecastEl = document.getElementById('gorge-forecast');
const gorgeWeatherSymbolEl = document.getElementById('gorge-weather-symbol');
const beachesTempEl = document.getElementById('beaches-temp');
const beachesForecastEl = document.getElementById('beaches-forecast');
const beachesWeatherSymbolEl = document.getElementById('beaches-weather-symbol');

const DIAKOPTO_COORDS = {
  lat: 38.191,
  lon: 22.201,
};

const VOURAIKOS_GORGE_COORDS = {
  lat: 38.089,
  lon: 22.166,
};

const EGKALI_BEACH_COORDS = {
  lat: 38.173,
  lon: 22.160,
};
const HERO_BACKGROUND_SRC = 'assets/photos/section_1/sea-big.webp';

function activateHeroWhenBackgroundReady() {
  const hero = document.querySelector('.hero');
  if (!hero) {
    return;
  }

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

  // Fallback for very slow networks so hero content is never blocked.
  setTimeout(activateHero, 1400);
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
  if (!diakoptoDateEl && !diakoptoTimeEl) {
    return;
  }

  const now = new Date();

  if (diakoptoDateEl) {
    const dateFormatter = new Intl.DateTimeFormat('el-GR', {
      timeZone: 'Europe/Athens',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    diakoptoDateEl.textContent = removeAccentsFromGreekCapitals(dateFormatter.format(now));
  }

  if (diakoptoTimeEl) {
    const timeFormatter = new Intl.DateTimeFormat('el-GR', {
      timeZone: 'Europe/Athens',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    diakoptoTimeEl.textContent = removeAccentsFromGreekCapitals(timeFormatter.format(now));
  }
}

function getWeatherLabel(weatherCode) {
  const weatherMap = {
    0: 'Καθαρός',
    1: 'Κυρίως αίθριος',
    2: 'Λίγες νεφώσεις',
    3: 'Συννεφιά',
    45: 'Ομίχλη',
    48: 'Παγωμένη ομίχλη',
    51: 'Ασθενές ψιλόβροχο',
    53: 'Ψιλόβροχο',
    55: 'Έντονο ψιλόβροχο',
    61: 'Ασθενής βροχή',
    63: 'Βροχή',
    65: 'Έντονη βροχή',
    71: 'Ασθενής χιονόπτωση',
    73: 'Χιονόπτωση',
    75: 'Έντονη χιονόπτωση',
    80: 'Τοπικές μπόρες',
    81: 'Μπόρες',
    82: 'Ισχυρές μπόρες',
    95: 'Καταιγίδα',
    96: 'Καταιγίδα με χαλάζι',
    99: 'Ισχυρή καταιγίδα με χαλάζι',
  };

  return weatherMap[weatherCode] || 'Μεταβλητός καιρός';
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
  const dayLabel = new Intl.DateTimeFormat('el-GR', {
    weekday: 'short',
    timeZone: 'Europe/Athens',
  }).format(date);

  const weatherLabel = getWeatherLabel(weatherCode);
  const minValue = typeof minTemp === 'number' ? `${Math.round(minTemp)}°` : '--';
  const maxValue = typeof maxTemp === 'number' ? `${Math.round(maxTemp)}°` : '--';

  return {
    day: removeAccentsFromGreekCapitals(dayLabel),
    temp: `${minValue}/${maxValue}`,
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
        <span class="forecast-day">${item.day}</span>
        <span class="forecast-temp"><span class="forecast-icon">${getWeatherIconSvg(item.symbol)}</span>${item.temp}</span>
        <span class="forecast-desc">${item.desc}</span>
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
      diakoptoForecastEl.textContent = 'N/A';
    }

    if (diakoptoWeatherSymbolEl) {
      diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg(getWeatherSymbol(weatherCode));
    }

    diakoptoSunEl.textContent = `${formatIsoTime(sunrise)} / ${formatIsoTime(sunset)}`;
    renderThreeDayForecast(daily);
  } catch (error) {
    diakoptoTempEl.textContent = 'N/A';
    diakoptoForecastEl.textContent = 'N/A';
    diakoptoSunEl.textContent = '--:-- / --:--';
    if (diakoptoWeatherSymbolEl) {
      diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
    }
    diakoptoForecast3El.innerHTML = '<li><span class="forecast-day">N/A</span><span class="forecast-temp">--/--</span><span class="forecast-desc">No data</span></li><li><span class="forecast-day">N/A</span><span class="forecast-temp">--/--</span><span class="forecast-desc">No data</span></li>';
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
      gorgeForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}°/${maxTemp.toFixed(0)}°)`;
    } else {
      gorgeForecastEl.textContent = 'N/A';
    }
  } catch (error) {
    gorgeTempEl.textContent = 'N/A';
    gorgeForecastEl.textContent = 'N/A';
    gorgeWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }
}

async function updateBeachesWeatherData() {
  if (!beachesTempEl || !beachesForecastEl || !beachesWeatherSymbolEl) {
    return;
  }

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${EGKALI_BEACH_COORDS.lat}&longitude=${EGKALI_BEACH_COORDS.lon}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FAthens`;
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

    beachesTempEl.textContent = `${temperature.toFixed(1)}°C`;
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg(weatherSymbolKey);

    if (typeof maxTemp === 'number' && typeof minTemp === 'number') {
      const forecastLabel = removeAccentsFromGreekCapitals(getWeatherLabel(weatherCode));
      beachesForecastEl.textContent = `${forecastLabel} (${minTemp.toFixed(0)}°/${maxTemp.toFixed(0)}°)`;
    } else {
      beachesForecastEl.textContent = 'N/A';
    }
  } catch (error) {
    beachesTempEl.textContent = 'N/A';
    beachesForecastEl.textContent = 'N/A';
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }
}

window.addEventListener('load', () => {
  activateHeroWhenBackgroundReady();

  if (diakoptoWeatherSymbolEl) {
    diakoptoWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  if (gorgeWeatherSymbolEl) {
    gorgeWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  if (beachesWeatherSymbolEl) {
    beachesWeatherSymbolEl.innerHTML = getWeatherIconSvg('partly');
  }

  updateDiakoptoClock();
  updateDiakoptoWeatherData();
  updateGorgeWeatherData();
  updateBeachesWeatherData();

  setInterval(updateDiakoptoClock, 1000);
  setInterval(updateDiakoptoWeatherData, 30 * 60 * 1000);
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
