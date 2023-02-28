const video = document.querySelector('#videoPlayer');
const volumeV = document.getElementById('volume');
const clickShowVolume = document.querySelector('#volume-btn');
const clickPlay = document.querySelector('#play');
const clickStop = document.querySelector('#pause');
const clickPause = document.querySelector('#stop');

clickPause.addEventListener('click', () => video.pause());
clickStop.addEventListener('click',()=>{
    video.pause();
    video.currentTime=0;
});
clickPlay.addEventListener('click',()=>video.play());
clickShowVolume.addEventListener('click',()=>{ 
    volumeV.style.display === 'none' ? volumeV.style.display = 'inline' : volumeV.style.display = 'none';});
 function prec() {
     let sec = this.value;
     video.volume = sec / 100;
 }; 
 volumeV.addEventListener('change',prec);