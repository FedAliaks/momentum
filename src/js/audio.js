import { soundList } from './audioList';

const PLAY_BTN = document.querySelector('.play');
const PREV_PLAY_BTN = document.querySelector('.play-prev');
const NEXT_PLAY_BTN = document.querySelector('.play-next');
const PLAY_BTN_SMALL = document.querySelector('.play-button-toggle');
const CURRENT_TRACK_TIME = document.querySelector('.current');
const PROGRESS_LINE = document.querySelector('.progress');

let indexTrack = 0;
const audio = new Audio();
let isPlay = false;
let timer;
let currentTimeTrack = 0;
let volumeRange = 0.5;

//create playlist on the page
function createPlayList() {
  const PLAY_LIST = document.querySelector('.play-list');
  PLAY_LIST.innerHTML = '';
  soundList.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = item.title;
    if (index === indexTrack && isPlay) {
      li.classList.add('li-active');
    }
    PLAY_LIST.append(li);
  });
}

//createMusicTrack and add next or previous track
function createMusicTrack() {
  const DURATION_TRACK = document.querySelector('.length');
  const TRACK_NAME_NEW_PlAYER = document.querySelector('.track-name');
  audio.src = soundList[indexTrack].src;
  DURATION_TRACK.innerText = `${Math.floor(soundList[indexTrack].duration / 60)}:${soundList[indexTrack].duration % 60}`;
  TRACK_NAME_NEW_PlAYER.innerText = soundList[indexTrack].title;
}

function playStopMusic() {
  isPlay ? pauseMusic() : playMusic();
}

function playMusic() {
  isPlay = true;
  createPlayList();
  createMusicTrack();
  audio.play();
  PLAY_BTN.classList.add('pause');
  PLAY_BTN_SMALL.classList.add('pause-small');
  audio.currentTime = currentTimeTrack;

  timer = setTimeout(function tick() {
    CURRENT_TRACK_TIME.innerText = `${Math.floor(audio.currentTime / 60)}:${('0' + Math.floor(audio.currentTime % 60)).slice(-2)}`;
    PROGRESS_LINE.style.width = `${(audio.currentTime / soundList[indexTrack].duration) * 100}%`;
    timer = setTimeout(tick, 250);
  }, 250);
}

function pauseMusic() {
  PLAY_BTN.classList.toggle('pause');
  audio.pause();
  isPlay = false;
  PLAY_BTN.classList.remove('pause');
  PLAY_BTN_SMALL.classList.remove('pause-small');
  currentTimeTrack = audio.currentTime;

  clearInterval(timer);
}

function playNextMusic() {
  indexTrack + 1 === soundList.length ? (indexTrack = 0) : indexTrack++;
  currentTimeTrack = 0;
  createMusicTrack();
  playMusic();
}

function playPrevMusic() {
  indexTrack - 1 < 0 ? (indexTrack = soundList.length - 1) : indexTrack--;
  currentTimeTrack = 0;
  createMusicTrack();
  playMusic();
}

function changeTimeTrack(position) {
  currentTimeTrack = Math.floor(position * soundList[indexTrack].duration);
  CURRENT_TRACK_TIME.innerText = `${Math.floor(currentTimeTrack / 60)}:${('0' + Math.floor(currentTimeTrack % 60)).slice(-2)}`;
  PROGRESS_LINE.style.width = `${(currentTimeTrack / soundList[indexTrack].duration) * 100}%`;
  playMusic();
}

audio.addEventListener('ended', () => {
  playNextMusic();
  console.log('end track');
});

function toggleVolume() {
  const VOLUME_ICON = document.querySelector('.volume-icon');
  VOLUME_ICON.classList.toggle('volume-off');
  if (VOLUME_ICON.classList.contains('volume-off')) {
    audio.volume = 0;
    volumeRange = 0;
    changeVolumeProgressLine();
  } else {
    audio.volume = 0.5;
    volumeRange = 0.5;
    changeVolumeProgressLine();
  }
}

function changeVolumeTrack(part) {
  audio.volume = part;
  volumeRange = part;
  changeVolumeProgressLine();
}

function changeVolumeProgressLine() {
  document.querySelector('.volume-percentage').style.width =
    `${Math.floor(volumeRange * 100)}%`;
}

export {
  playStopMusic,
  playNextMusic,
  playPrevMusic,
  createPlayList,
  changeTimeTrack,
  toggleVolume,
  changeVolumeTrack,
};
