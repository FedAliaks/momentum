import { language } from './settings';

const languageDate = {
  en: 'en-US',
  ru: 'ru-RU',
};

const DATE = document.querySelector('.date');

function showDate() {
  const date = new Date();
  const options = {
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  };
  const currentDate = date.toLocaleDateString(
    `${languageDate[language]}`,
    options,
  );
  DATE.textContent = currentDate;
}

export { showDate };
