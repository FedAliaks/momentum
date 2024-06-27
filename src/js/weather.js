import { language } from './settings';

const windSpeed = {
  en: 'Wind speed',
  ru: 'Скорость ветра',
};

const humidity = {
  en: 'Humidity',
  ru: 'Влажность',
};

const WEATHER_ICON = document.querySelector('.weather-icon');
const TEMPERATURE = document.querySelector('.temperature');
const WEATHER_DESCRIPTION = document.querySelector('.weather-description');
const WIND = document.querySelector('.wind');
const CITY = document.querySelector('.city');
const HUMIDITY = document.querySelector('.humidity');

async function getWeather() {
  const cityName = CITY.value || 'Minsk';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${language}&appid=e40877c6b1237fdfde3d753747f26e05&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.name);
  if (data.name === undefined) {
    alert('Check name of city');
  }
  WEATHER_ICON.className = 'weather-icon owf';
  WEATHER_ICON.classList.add(`owf-${data.weather[0].id}`);
  TEMPERATURE.textContent = `${Math.round(data.main.temp)}°C`;
  WEATHER_DESCRIPTION.textContent = data.weather[0].description;
  WIND.textContent = `${windSpeed[language]}: ${Math.round(data.wind.speed)} m/s`;
  HUMIDITY.textContent = `${humidity[language]}: ${data.main.humidity}%`;
}

function changeCityWeather() {
  getWeather(CITY.value);
}

export { getWeather, changeCityWeather };
