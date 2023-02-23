let video = document.querySelector('#videoPlayer');
const volumeV = document.getElementById('volume');
document.querySelector('#volume-btn').onclick= showVolume;

document.querySelector('#play').onclick= playFunc;
document.querySelector('#stop').onclick= stopFunc;
document.querySelector('#pause').onclick= pauseFunc;
document.querySelector('#volume').oninput = videoVolume;

function showVolume(){
    if(volumeV.style.display == 'none'){
    volumeV.style.display =  'inline';
}else{
        volumeV.style.display = 'none';
    }
}

function playFunc(){
    video.play();

};

function pauseFunc(){
    video.pause();
    video.currentTime = 0;

};

function stopFunc(){
    video.pause();

};



function videoVolume() {
    let sec = this.value;
    video.volume = sec / 100;
}; 