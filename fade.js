document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    var videoElement = document.getElementById('videoElement');

    audioPlayer.addEventListener('timeupdate', function () {
        if (audioPlayer.currentTime > audioPlayer.duration - 5) {
            audioPlayer.volume = (audioPlayer.duration - audioPlayer.currentTime) / 5;
        }
    });

    videoElement.addEventListener('timeupdate', function () {
        if (videoElement.currentTime > videoElement.duration - 5) {
            videoElement.volume = (videoElement.duration - videoElement.currentTime) / 5;
        }
    });
});