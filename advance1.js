document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoElement');
    video.addEventListener('ended', function () {
        // Navigate to the next page when the video ends
        window.location.href = 'https://davisbrett.github.io/loading/2.html';
    });
});
