// Page load
var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();

// Play Button
var playButton = document.getElementById("play");

playButton.addEventListener("click", function(){
    vid.play();
});

// Pause Button
var pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function(){
    vid.pause();
});

// Slow Down
var slowButton = document.getElementById("slower");

slowButton.addEventListener("click", function(){
    var speed = vid.playbackRate;
    if(speed == 2){
        vid.playbackRate = 1;
    }
    else if(speed == 1){
        vid.playbackRate = 0.5;
    }
    else{
        alert("Video is at slowest speed!");
    }
});

// Speed Up
var speedButton = document.getElementById("faster");

speedButton.addEventListener("click", function(){
    var speed = vid.playbackRate;
    if(speed == 0.5){
        vid.playbackRate = 1;
    }
    else if(speed == 1){
        vid.playbackRate = 2;
    }
    else{
        alert("Video is at fastest speed!");
    }
});


// Skip Ahead
var skipButton = document.getElementById("skip");

skipButton.addEventListener("click", function(){
    var length = vid.duration;
    // console.log(length);
    var current = vid.currentTime;
    // console.log(current);
    current += 15;
    if(current < length){
        vid.currentTime = current;
    }
    else{
        vid.currentTime = 0;
    }
    // console.log(vid.currentTime);
});

// Mute and Unmute
var muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function(){
    if(vid.muted == true){
        console.log("Unmute");
        vid.muted = false;
        muteButton.innerText = "Mute";
    }
    else if(vid.muted == false){
        console.log("Mute");
        vid.muted = true;
        muteButton.innerText = "Unmute";
    }
});


// Volume Slider
var slider = document.getElementById("slider");
var volume = document.getElementById('volume');
volume.innerText = slider.value;

slider.onchange = function(){
    volume.innerText = this.value;
    vid.volume = this.value / 100;
}







