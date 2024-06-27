import { showDate } from './date';
import { addGreeting } from './greeting';

const TIME = document.querySelector('.time');

function showTime() {
  const DATE = new Date();
  const CURRENT_TIME = DATE.toLocaleTimeString();
  TIME.innerText = CURRENT_TIME;

  showDate();
  addGreeting();
  setTimeout(showTime, 1000);
}

export { showTime };
