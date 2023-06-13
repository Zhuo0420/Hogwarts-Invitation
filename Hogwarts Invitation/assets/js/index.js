var video1 = document.getElementById('vd');
var video2 = document.getElementById('vdunder');

video2.src = video1.src;

// 同步影片動作
video1.addEventListener('play', function () {
    video2.play();
});

video1.addEventListener('pause', function () {
    video2.pause();
});

video1.addEventListener('seeking', function () {
    video2.currentTime = video1.currentTime;
});

video1.addEventListener('ratechange', function () {
    video2.playbackRate = video1.playbackRate;
});