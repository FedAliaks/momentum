import { language, imageSource } from './settings';

const NAME_USER = document.querySelector('.name');
const CITY_NAME = document.querySelector('.city');

function setLocalStorage() {
  localStorage.setItem('name', NAME_USER.value);
  localStorage.setItem('cityName', CITY_NAME.value);
  localStorage.setItem('language', language);
  localStorage.setItem('source', imageSource);
}

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    NAME_USER.value = localStorage.getItem('name');
  }

  if (localStorage.getItem('cityName')) {
    CITY_NAME.value = localStorage.getItem('cityName');
  }

  language = localStorage.getItem('language') || 'en';
  imageSource = localStorage.getItem('source') || 'GitHub';
}

export { setLocalStorage, getLocalStorage };

/* window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage); */
