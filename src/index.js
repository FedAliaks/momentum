import { showTime } from './js/time';
import { setLocalStorage, getLocalStorage } from './js/nameLocalStorage';
import {
  setBackground,
  getSlideNext,
  getSlidePrev,
} from './js/backgroundImage';
import { getWeather, changeCityWeather } from './js/weather';
import { getQuotes } from './js/quotes';
import {
  playStopMusic,
  playNextMusic,
  playPrevMusic,
  createPlayList,
  changeTimeTrack,
  toggleVolume,
  changeVolumeTrack,
} from './js/audio';
import { openModalScreen, closeModalScreen } from './js/settings';
import './css/style.css';
import './css/owfont-regular.css';

//add time
showTime();

//save name for greeting
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

//add background image
setBackground();

//slider images
const SLIDER_PREV = document.querySelector('.slide-prev');
const SLIDER_NEXT = document.querySelector('.slide-next');

SLIDER_PREV.addEventListener('click', getSlidePrev);
SLIDER_NEXT.addEventListener('click', getSlideNext);

//add weather
const CITY = document.querySelector('.city');

getWeather('Minsk');
CITY.addEventListener('change', changeCityWeather);

//quotes
const CHANGE_QUOTES = document.querySelector('.change-quote');

getQuotes();
CHANGE_QUOTES.addEventListener('click', getQuotes);

//audio
const PLAY_BTN = document.querySelector('.play');
const PREV_PLAY_BTN = document.querySelector('.play-prev');
const NEXT_PLAY_BTN = document.querySelector('.play-next');

PLAY_BTN.addEventListener('click', playStopMusic);
PREV_PLAY_BTN.addEventListener('click', playPrevMusic);
NEXT_PLAY_BTN.addEventListener('click', playNextMusic);

//createPlayList

createPlayList();

//new player
const PLAY_BTN_SMALL = document.querySelector('.play-button-toggle');
PLAY_BTN_SMALL.addEventListener('click', playStopMusic);

const TEMP = document.querySelector('.timeline');
TEMP.addEventListener('click', (e) => {
  changeTimeTrack(e.offsetX / TEMP.offsetWidth);
});

const VOLUME = document.querySelector('.volume-button');
VOLUME.addEventListener('click', toggleVolume);

const VOLUME_SLIDER = document.querySelector('.volume-slider');
VOLUME_SLIDER.addEventListener('click', (e) => {
  changeVolumeTrack(e.offsetX / VOLUME_SLIDER.offsetWidth);
});

//settings Block
const SETTINGS_WINDOW = document.querySelector('.settings-icon');
const MODAL_CLOSE = document.querySelector('.modal_button');

SETTINGS_WINDOW.addEventListener('click', openModalScreen);
MODAL_CLOSE.addEventListener('click', closeModalScreen);
