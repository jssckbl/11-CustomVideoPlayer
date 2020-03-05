// there are three pieces to the following code
// we will get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// build out our functions
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// optional way to write function togglePlay action
// function togglePlay(){
//     const method = video.paused ? 'play' : 'pause'; 
//     video[method]();
// }


// hook up event listeners to when you click screen or actual button

video.addEventListener('click', togglePlay);