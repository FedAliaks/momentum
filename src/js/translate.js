import { language } from './settings';

const placeholderGreeting = {
  en: '[Enter name]',
  ru: '[Введи имя]',
};

const modalLanguage = {
  en: 'Languages',
  ru: 'Язык',
};

const visibleBlocks = {
  en: 'Visible blocks',
  ru: 'Видимые блоки',
};

const imagesSourceObj = {
  en: 'Images source',
  ru: 'Источник изображений',
};

function changeGreeting() {
  const GREETING_NAME = document.querySelector('.greeting-name');
  const MODAL_LANGUAGE = document.querySelector('.modal__language');
  const IMAGES_SOURCE = document.querySelector('.modal__images-source');
  const VISIBLE_BLOCKS = document.querySelector('.modal__visible-blocks');
  GREETING_NAME.placeholder = placeholderGreeting[language];
  MODAL_LANGUAGE.innerText = modalLanguage[language];
  IMAGES_SOURCE.innerText = imagesSourceObj[language];
  VISIBLE_BLOCKS.innerText = visibleBlocks[language];
}

export { changeGreeting };
