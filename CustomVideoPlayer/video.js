//getting the elements
const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress-filled');
const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges=player.querySelectorAll('.player-slider');
const fullsrc=player.querySelector('.full');


//building functions

function togglePlay(){
    if(video.paused){
      video.play();  
    }
    else{
        video.pause();
    }
}

function handleicon(){
    console.log(this);
    toggle.textContent=this.paused?'►' : '❚ ❚';
}

function skips(){
  console.log(this.dataset.skip);
  video.currentTime+=parseFloat(this.dataset.skip);
}

function handleranges(){

video[this.name]=this.value;
//     console.log(this.name); //volume or playBackRate
//  console.log(this.value);
}

function handleprogess(){
    percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
//to click on a progress bar thro' mouse
function scrub(e){
// console.log(e);
const scrubtime=(e.offsetX/progress.offsetWidth)*video.duration;
video.currentTime=scrubtime;
}

function handlefull(){
  video.classList.toggle('full-screen');
}

//adding event listener
video.addEventListener('click',togglePlay);
video.addEventListener('play',handleicon);
video.addEventListener('pause',handleicon);
video.addEventListener('timeupdate',handleprogess);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(btn=>btn.addEventListener('click',skips));
ranges.forEach(range=>range.addEventListener('input',handleranges));
progress.addEventListener('click',scrub);
let mousedown=false;
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);
fullsrc.addEventListener('click',handlefull);