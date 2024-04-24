document.addEventListener('DOMContentLoaded', function () {
    // Get the play button and audio player
    var playButton = document.getElementById('playButton');
    var audioPlayer = document.getElementById('audioPlayer');

    // Add click event listener to the play button
    playButton.addEventListener('click', function () {
        // Check if audio is currently paused
        if (audioPlayer.paused) {
            // If paused, play the audio
            audioPlayer.play();
            playButton.style.display = 'none'; // Hide the play button

            // Start cycling through images and play video
            replaceImage(0);
            playVideo();
        }
    });
});

const imageUrls = [
    "tomorrownight/1.jpg",
    "tomorrownight/1.jpg",
    "tomorrownight/2.jpg",
    "tomorrownight/3.jpg",
    "tomorrownight/4.jpg",
    "tomorrownight/5.jpg",
    "tomorrownight/6.jpg",
    "tomorrownight/7.jpg",
    "tomorrownight/8.jpg",
    "tomorrownight/9.jpg",
    "tomorrownight/10.jpg",
    "tomorrownight/11.jpg",
    "tomorrownight/12.jpg",
    "tomorrownight/13.jpg",
    "tomorrownight/14.jpg",
    "tomorrownight/15.jpg",
    "tomorrownight/16.jpg",
    "tomorrownight/17.jpg",
    "tomorrownight/18.jpg",
    "tomorrownight/19.jpg",
    "tomorrownight/1.jpg",
    "tomorrownight/2.jpg",
    "tomorrownight/3.jpg",
    "tomorrownight/4.jpg",
    "tomorrownight/5.jpg",
    "tomorrownight/6.jpg",
    "tomorrownight/7.jpg",
    "tomorrownight/8.jpg",
    "tomorrownight/9.jpg",
    "tomorrownight/10.jpg",
    "tomorrownight/11.jpg",
    "tomorrownight/12.jpg",
    "tomorrownight/13.jpg",
    "tomorrownight/14.jpg",
    "tomorrownight/15.jpg",
    "tomorrownight/16.jpg",
    "tomorrownight/17.jpg",
    "tomorrownight/18.jpg",
    "tomorrownight/19.jpg",
    "tomorrownight/1.jpg",
    "tomorrownight/2.jpg",
    "tomorrownight/3.jpg",
    "tomorrownight/4.jpg",
    "tomorrownight/5.jpg",
    "tomorrownight/6.jpg",
    "tomorrownight/7.jpg",
    "tomorrownight/8.jpg",
    "tomorrownight/9.jpg",
    "tomorrownight/10.jpg",
    "tomorrownight/11.jpg",
    "tomorrownight/12.jpg",
    "tomorrownight/13.jpg",
    "tomorrownight/14.jpg",
    "tomorrownight/15.jpg",
    "tomorrownight/16.jpg",
    "tomorrownight/17.jpg",
    "tomorrownight/18.jpg",
    "tomorrownight/19.jpg",
    "tomorrownight/1.jpg",
    "tomorrownight/2.jpg",
    "tomorrownight/3.jpg"
];

const imageDurations = [
    2282.151887,
    2145.210298,
    2010.058068,
    1877.531955,
    1748.402736,
    1623.358752,
    1502.99354,
    1387.797893,
    1278.156314,
    1174.347599,
    1076.548981,
    984.8431988,
    899.2277145,
    819.6253452,
    745.895612,
    677.8462044,
    615.2440725,
    557.8257851,
    505.3069012,
    457.3902129,
    413.7727996,
    374.1519037,
    338.2296865,
    305.7169567,
    276.335983,
    249.8225113,
    225.9271057,
    204.4159304,
    185.0710758,
    167.6905249,
    152.0878426,
    138.0916563,
    125.5449899,
    114.3044957,
    104.2396277,
    95.23178272,
    87.17343689,
    79.96729406,
    73.52545951,
    67.76864896,
    62.6254389,
    58.0315622,
    53.92925095,
    50.26662698,
    46.99713951,
    44.07904846,
    41.47495153,
    39.15135272,
    37.07826973,
    35.22887764,
    33.57918615,
    32.10774781,
    30.79539467,
    29.62500092,
    28.58126924,
    27.6505387,
    26.82061215,
    26.08060138,
    25.42078819,
    24.83249994
];

function replaceImage(index) {
    const img = document.getElementById('mainImage');
    if (index < imageUrls.length) {
        img.src = imageUrls[index];
        const duration = imageDurations[index];
        setTimeout(() => {
            replaceImage(index + 1); // Move to the next image after the specified duration
        }, duration);
    } else {
        img.style.display = 'none'; // Hide image when cycling is done
        hideImage(); // Call the function to hide the image after cycling completes
        playVideo(); // Play video after image cycling completes
    }
}

function playVideo() {
    const video = document.getElementById('videoElement');
    video.play();
}

function hideImage() {
    const img = document.getElementById('mainImage');
    img.style.display = 'none';
}
