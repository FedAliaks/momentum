import { language } from './settings';

const GREETING = document.querySelector('.greeting');

const greetingTranslation = {
  en: 'Good',
  ru: 'Добрый',
};

const greetingNight = {
  en: 'Nught',
  ru: 'Ночи',
};

const greetingMorning = {
  en: 'Morning',
  ru: 'Утро',
};

const greetingAfternoon = {
  en: 'Afternoon',
  ru: 'День',
};

const greetingEvening = {
  en: 'Evening',
  ru: 'Вечер',
};

function addGreeting() {
  GREETING.textContent = `${greetingTranslation[language]}, ${addPartDay()}`;

  const date = new Date();
  const hours = date.getHours();
  if (hours < 6) {
    GREETING.textContent = `'Доброй', ${addPartDay()}`;
  } else if (hours < 12) {
    GREETING.textContent = `'Доброе', ${addPartDay()}`;
  }
}

function addPartDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 6) return greetingNight[language];
  if (hours < 12) return greetingMorning[language];
  if (hours < 18) return greetingAfternoon[language];
  return greetingEvening[language];
}

export { addGreeting, addPartDay };
