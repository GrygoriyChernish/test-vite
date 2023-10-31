import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const refs = {
  iframe: document.querySelector('iframe'),
};

const player = new Player(refs.iframe);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

const storage = localStorage['videoplayer-current-time'];
console.log(storage);
