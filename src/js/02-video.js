import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(handleCurrentTime, 1000));

handleStopTime();

function handleCurrentTime(video) {
    localStorage.setItem(STORAGE_TIME_KEY, video.seconds);
}

function handleStopTime() {
    const currentTime = localStorage.getItem(STORAGE_TIME_KEY);

    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
}