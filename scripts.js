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

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    // you can use 'this' above because it is bound to the video
    console.log('update the button');  
}

// skip ahead or back within the video
function skip() {
    console.log('skipping', this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// hook up event listeners to when you click screen or actual button
// click on video to play and pause video
video.addEventListener('click', togglePlay);
// listen to whenever the video is paused to update the button from play to pause icon
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// click on triangle icon to play and pause video
toggle.addEventListener('click', togglePlay);
// 
skipButtons.forEach(button => button.addEventListener('click', skip));