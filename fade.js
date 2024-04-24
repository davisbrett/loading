document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    var videoElement = document.getElementById('videoElement');

    // Add event listeners to detect when audio and video are nearing the end
    audioPlayer.addEventListener('timeupdate', function () {
        // Check if the audio is nearing the end (e.g., last 3 seconds)
        if (audioPlayer.currentTime > audioPlayer.duration - 5) {
            // Gradually decrease the volume over time
            audioPlayer.volume = (audioPlayer.duration - audioPlayer.currentTime) / 5;
        }
    });

    videoElement.addEventListener('timeupdate', function () {
        // Check if the video is nearing the end (e.g., last 3 seconds)
        if (videoElement.currentTime > videoElement.duration - 5) {
            // Gradually decrease the volume over time
            videoElement.volume = (videoElement.duration - videoElement.currentTime) / 5;
        }
    });
});