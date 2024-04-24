document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    video.addEventListener('ended', function () {
        window.location.href = 'https://davisbrett.github.io/loading/2.html';
    });
});
