import { addGreeting, addPartDay } from './greeting';
import { imageSource } from './settings';

const BODY = document.querySelector('.body');

let partDay = '';
let imageNumber = '';

function setBackground() {
  if (imageSource === 'GitHub') {
    partDay = addPartDay().toLowerCase();
    imageNumber = String(getRandomNum()).padStart(2, '0');
    addBackgroundImage(partDay, imageNumber);
  }

  if (imageSource === 'Unsplash API') {
    getImageLinkUnisplash();
  }

  if (imageSource === 'Flickr API') {
    getImageLinkFlickr();
  }
}

function addBackgroundImage(partDay, imageNumber) {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${partDay}/${imageNumber}.jpg`;

  img.addEventListener('load', () => {
    BODY.style.backgroundImage = `url("${img.src}")`;
  });
}

function getRandomNum() {
  return Math.floor(Math.random() * 20 + 1);
}

function getSlidePrev() {
  if (imageSource === 'GitHub') {
    +imageNumber === 1 ? (imageNumber = 20) : imageNumber--;
    imageNumber = String(imageNumber).padStart(2, '0');
    addBackgroundImage(partDay, imageNumber);
  }

  if (imageSource === 'Unsplash API') {
    getImageLinkUnisplash();
  }

  if (imageSource === 'Flickr API') {
    getImageLinkFlickr();
  }
}

function getSlideNext() {
  if (imageSource === 'GitHub') {
    +imageNumber === 20 ? (imageNumber = 1) : imageNumber++;
    imageNumber = String(imageNumber).padStart(2, '0');
    addBackgroundImage(partDay, imageNumber);
  }

  if (imageSource === 'Unsplash API') {
    getImageLinkUnisplash();
  }

  if (imageSource === 'Flickr API') {
    getImageLinkFlickr();
  }
}

async function getImageLinkUnisplash() {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=jLXCcG2yG0Q5TKyNcpLo4sbk965xbSTSBtRacoMDUPc`;
  const res = await fetch(url);
  const data = await res.json();

  const img = new Image();
  img.src = `${data.urls.regular}`;

  img.addEventListener('load', () => {
    BODY.style.backgroundImage = `url("${img.src}")`;
  });
}

let indexFlick = 10;

async function getImageLinkFlickr() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37b7c13c5a1e0e14d801d2cceafb4f05&tags=nature&extras=url_l&format=json&nojsoncallback=1
  `;
  const res = await fetch(url);
  const data = await res.json();
  const arrayImages = data.photos.photo;

  if (arrayImages[indexFlick].url_l === undefined) {
    indexFlick++;
    getImageLinkFlickr();
  } else {
    const img = new Image();
    img.src = `${arrayImages[indexFlick].url_l}`;

    img.addEventListener('load', () => {
      BODY.style.backgroundImage = `url("${img.src}")`;
    });
    indexFlick++;
  }
}

export { setBackground, getSlidePrev, getSlideNext };
