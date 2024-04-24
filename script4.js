document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
    playButton.style.display = 'none'; // Hide the play button initially

    preloadImages(imageUrls, function () {
        console.log("All images have been preloaded");

        var audioPlayer = document.getElementById('audioPlayer');

        playButton.style.display = 'block'; // Display the play button after all images are preloaded

        playButton.addEventListener('click', function () {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.style.display = 'none';

                replaceImage(0);
                playVideo();
            }
        });

        hideLoader();
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

function hideLoader() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
}


const imageUrls = [
    "nova/1.jpg",
    "nova/2.jpg",
    "nova/3.jpg",
    "nova/4.jpg",
    "nova/5.jpg",
    "nova/6.jpg",
    "nova/7.jpg",
    "nova/8.jpg",
    "nova/9.jpg",
    "nova/10.jpg",
    "nova/11.jpg",
    "nova/12.jpg",
    "nova/13.jpg",
    "nova/14.jpg",
    "nova/15.jpg",
    "nova/16.jpg",
    "nova/17.jpg",
    "nova/18.jpg",
    "nova/19.jpg",
    "nova/20.jpg",
    "nova/21.jpg",
    "nova/22.jpg",
    "nova/23.jpg",
    "nova/24.jpg",
    "nova/25.jpg",
    "nova/26.jpg",
    "nova/27.jpg",
    "nova/1.jpg",
    "nova/2.jpg",
    "nova/3.jpg",
    "nova/4.jpg",
    "nova/5.jpg",
    "nova/6.jpg",
    "nova/7.jpg",
    "nova/8.jpg",
    "nova/9.jpg",
    "nova/10.jpg",
    "nova/11.jpg",
    "nova/12.jpg",
    "nova/13.jpg",
    "nova/14.jpg",
    "nova/15.jpg",
    "nova/16.jpg",
    "nova/17.jpg",
    "nova/18.jpg",
    "nova/19.jpg",
    "nova/20.jpg",
    "nova/21.jpg",
    "nova/22.jpg",
    "nova/23.jpg",
    "nova/24.jpg",
    "nova/25.jpg",
    "nova/26.jpg",
    "nova/27.jpg",
    "nova/1.jpg",
    "nova/2.jpg",
    "nova/3.jpg",
    "nova/4.jpg",
    "nova/5.jpg",
    "nova/6.jpg",
    "nova/7.jpg"
];

const imageDurations = [
    2376.408215,
    2233.760727,
    2092.977154,
    1954.929119,
    1820.419516,
    1690.165366,
    1564.784938,
    1444.789471,
    1330.579494,
    1222.445415,
    1120.571855,
    1025.044999,
    935.8622026,
    852.9430679,
    776.1412625,
    705.2564629,
    640.0459089,
    580.2351928,
    525.5280221,
    475.6148051,
    430.1799996,
    388.908233,
    351.4892568,
    317.6218299,
    287.016649,
    259.3984492,
    234.5074018,
    212.0999275,
    191.9490372,
    173.8442968,
    157.5915027,
    143.012142,
    129.9426978,
    118.2338497,
    107.7496122,
    98.36644033,
    89.9723301,
    82.46593132,
    75.75568699,
    69.75900933,
    64.40149885,
    59.61621062,
    55.34296973,
    51.52773644,
    48.12202032,
    45.08234214,
    42.36974117,
    39.94932574,
    37.7898643,
    35.86341421,
    34.14498558,
    32.6122373,
    31.24520278,
    30.02604262,
    28.93882212,
    27.96931114,
    27.10480432,
    26.33395977,
    25.64665437,
    25.0338541
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
