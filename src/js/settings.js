import { changeCityWeather } from './weather';
import { changeGreeting } from './translate';
import { getQuotes } from './quotes';
import { setBackground } from './backgroundImage';

const MODAL_CONTAINER = document.querySelector('.modal-container');
let language = 'en';
let imageSource = 'GitHub';

const objProperty = {
  PLAYER: document.querySelector('.player'),
  WEATHER: document.querySelector('.weather'),
  QUOTE: document.querySelector('.footer'),
  TIME: document.querySelector('.time'),
  DATE: document.querySelector('.date'),
  GREETING: document.querySelector('.greeting-container'),
};

const VISIBLE_BUTTONS = document.querySelector('.button__blocks');

VISIBLE_BUTTONS.addEventListener('click', (e) => {
  const blockName = e.target.innerText.toUpperCase();
  e.target.classList.toggle('button_active');
  objProperty[blockName].classList.toggle('invisible-block');
});

function openModalScreen() {
  MODAL_CONTAINER.classList.add('modal-on');
}

function closeModalScreen() {
  MODAL_CONTAINER.classList.remove('modal-on');
}

//language
const LANGUAGE_BUTTONS_BLOCK = document.querySelector(
  '.language__button_block',
);
LANGUAGE_BUTTONS_BLOCK.addEventListener('click', (e) => {
  const buttonsLang = LANGUAGE_BUTTONS_BLOCK.querySelectorAll('.button');
  buttonsLang.forEach((item) => {
    item.classList.remove('button_active');
    if (e.target.innerText === item.innerText) {
      item.classList.add('button_active');
      language = item.innerText.toLowerCase();
    }
  });
  changeCityWeather();
  changeGreeting();
  getQuotes();
});

//API images

const IMAGE_SOURCE_BLOCK = document.querySelector('.images-source__buttons');
IMAGE_SOURCE_BLOCK.addEventListener('click', (e) => {
  IMAGE_SOURCE_BLOCK.querySelectorAll('.button').forEach((item) => {
    item.classList.remove('button_active');
    if (e.target.innerText === item.innerText) {
      item.classList.add('button_active');
      imageSource = item.innerText;
      setBackground();
    }
  });
});

export { openModalScreen, closeModalScreen, language, imageSource };
