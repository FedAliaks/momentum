import { language } from './settings';

const QUOTE = document.querySelector('.quote');
const AUTHOR = document.querySelector('.author');

const QUOTES_JSON = [
  {
    text: 'Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете',
    author: 'Стив Макконнелл',
  },
  {
    text: 'Сложность программы растет до тех пор, пока не превысит способности программиста',
    author: 'Артур Блох. Законы Мэрфи',
  },
  {
    text: 'Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены',
    author: 'И. Берард',
  },
];

async function getQuotes() {
  if (language === 'en') {
    const url = 'https://type.fit/api/quotes';
    const res = await fetch(url);
    const arrayQuotes = await res.json();
    const randomIndex = Math.floor(Math.random() * arrayQuotes.length);
    QUOTE.textContent = arrayQuotes[randomIndex].text;
    AUTHOR.textContent = arrayQuotes[randomIndex].author || 'Unknown author';
  } else {
    const index = Math.floor(Math.random() * QUOTES_JSON.length);
    QUOTE.textContent = QUOTES_JSON[index].text;
    AUTHOR.textContent = QUOTES_JSON[index].author || 'Неизвестный автор';
  }
}

export { getQuotes };
