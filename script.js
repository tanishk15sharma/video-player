const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
    if(video.paused ){
        video.play()
    }else{
        video.pause()
    }
}
function skipVideo() {
    video.currentTime +=  Number(this.dataset.skip)

}


function updateBtn() {
 const icon = this.paused ? "►" : "◼";

toggle.innerHTML = icon

}

function handleRangeChange() {

    video[this.name] = this.value; 
    

}

function handleProgress() {
    let percent = (video.currentTime / video.duration   ) *100 ;
    progressBar.style.flexBasis  = `${percent}%` 
}

function jumpProgress(e) {
    let jumpDistance = (e.offsetX / progress.offsetWidth  ) * video.duration;
    video.currentTime = jumpDistance
    console.log(e);

}


video.addEventListener("click",togglePlay  );
video.addEventListener("play",updateBtn  );
video.addEventListener("pause",updateBtn  );
toggle.addEventListener("click",togglePlay );
skipButtons.forEach(btn => btn.addEventListener("click",skipVideo  )) ;
ranges.forEach(range => range.addEventListener("change",handleRangeChange  )) 
ranges.forEach(range => range.addEventListener("mousemove",handleRangeChange  ));
video.addEventListener("timeupdate",handleProgress);
progress.addEventListener("click",jumpProgress  );
progress.addEventListener("drag",jumpProgress  )



//console.log(progress);