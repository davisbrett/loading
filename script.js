document.addEventListener('DOMContentLoaded', function () {
    preloadImages(imageUrls, function () {
        console.log("All images have been preloaded");

        var playButton = document.getElementById('playButton');
        var audioPlayer = document.getElementById('audioPlayer');

        playButton.addEventListener('click', function () {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.style.display = 'none';

                replaceImage(0);
                playVideo();
            }
        });
    });
});

function preloadImages(urls, callback) {
    var loaded = 0;
    urls.forEach(function (url) {
        var img = new Image();
        img.onload = function () {
            loaded++;
            if (loaded === urls.length) {
                callback();
            }
        };
        img.src = url;
    });
}

const imageUrls = [
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/22.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/22.png",
    "ironbowl/1.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/22.png",
    "ironbowl/22.png",
    "ironbowl/1.png",
    "ironbowl/1.png",
    "ironbowl/2.png",
    "ironbowl/3.png",
    "ironbowl/4.png",
    "ironbowl/5.png",
    "ironbowl/6.png",
    "ironbowl/7.png",
    "ironbowl/8.png",
    "ironbowl/9.png",
    "ironbowl/10.png",
    "ironbowl/11.png",
    "ironbowl/12.png",
    "ironbowl/13.png",
    "ironbowl/14.png",
    "ironbowl/15.png",
    "ironbowl/16.png",
    "ironbowl/17.png",
    "ironbowl/18.png",
    "ironbowl/19.png",
    "ironbowl/20.png",
    "ironbowl/21.png",
    "ironbowl/22.png",
];

const imageDurations = [
    1687.24983265,
    1585.97011617,
    1486.01377934,
    1387.99967449,
    1292.49785636,
    1200.01740986,
    1110.99730598,
    1025.80052441,
    944.71144074,
    867.93624465,
    795.60601705,
    727.78194929,
    664.462163846,
    605.589578209,
    551.060296375,
    500.732088659,
    454.432595319,
    411.966986888,
    373.124895691,
    337.686511621,
    305.427799716,
    276.12484543,
    249.557372328,
    225.511499229,
    203.78182079,
    184.172898932,
    166.500255278,
    150.590948525,
    136.283816412,
    123.429450728,
    111.889966917,
    101.53862082,
    92.259315438,
    83.946033287,
    76.502224662,
    69.8401726343,
    63.880354371,
    58.5508112372,
    53.7865377629,
    49.5288966243,
    45.7250641835,
    42.3275095402,
    39.2935085083,
    36.5846928724,
    34.1666344272,
    32.0084629194,
    30.0825162307,
    28.3640212754,
    26.830803653,
    25.4630240891,
    24.2429397618,
    23.154688483,
    22.1840939738,
    21.3184902602,
    20.5465637052,
    19.8582109094,
    19.2444110672,
    18.6971114367,
    18.2091246027,
    17.774036411
];

function replaceImage(index) {
    const img = document.getElementById('mainImage');
    if (index < imageUrls.length) {
        img.src = imageUrls[index];
        const duration = imageDurations[index];
        setTimeout(() => {
            replaceImage(index + 1);
        }, duration);
    } else {
        img.style.display = 'none';
        hideImage();
        playVideo();
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
