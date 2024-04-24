document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('videoElement');
    var darkOverlay = document.querySelector('.dark');

    playButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        }
    });

    video.addEventListener('play', function () {
        darkOverlay.style.display = 'none';
    });
});
