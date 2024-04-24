document.addEventListener('DOMContentLoaded', function () {
    // Get the play button, video element, and dark overlay
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('videoElement');
    var darkOverlay = document.querySelector('.dark');

    // Add click event listener to the play button
    playButton.addEventListener('click', function () {
        // Check if video is currently paused
        if (video.paused) {
            // If paused, play the video
            video.play();
            playButton.style.display = 'none'; // Hide the play button
        }
    });

    // Add event listener to detect when the video starts playing
    video.addEventListener('play', function () {
        // When the video starts playing, hide the dark overlay
        darkOverlay.style.display = 'none';
    });
});
