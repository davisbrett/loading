document.addEventListener('DOMContentLoaded', function () {
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

const imageUrls = [
    "diggs/1.jpg",
    "diggs/1.jpg",
    "diggs/2.jpg",
    "diggs/3.jpg",
    "diggs/4.jpg",
    "diggs/5.jpg",
    "diggs/6.jpg",
    "diggs/7.jpg",
    "diggs/8.jpg",
    "diggs/9.jpg",
    "diggs/10.jpg",
    "diggs/11.jpg",
    "diggs/12.jpg",
    "diggs/13.jpg",
    "diggs/14.jpg",
    "diggs/15.jpg",
    "diggs/16.jpg",
    "diggs/17.jpg",
    "diggs/18.jpg",
    "diggs/19.jpg",
    "diggs/20.jpg",
    "diggs/21.jpg",
    "diggs/22.jpg",
    "diggs/23.jpg",
    "diggs/24.jpg",
    "diggs/25.jpg",
    "diggs/26.jpg",
    "diggs/27.jpg",
    "diggs/28.jpg",
    "diggs/29.jpg",
    "diggs/30.jpg",
    "diggs/31.jpg",
    "diggs/1.jpg",
    "diggs/1.jpg",
    "diggs/2.jpg",
    "diggs/3.jpg",
    "diggs/4.jpg",
    "diggs/5.jpg",
    "diggs/6.jpg",
    "diggs/7.jpg",
    "diggs/8.jpg",
    "diggs/9.jpg",
    "diggs/10.jpg",
    "diggs/11.jpg",
    "diggs/12.jpg",
    "diggs/13.jpg",
    "diggs/14.jpg",
    "diggs/15.jpg",
    "diggs/16.jpg",
    "diggs/17.jpg",
    "diggs/18.jpg",
    "diggs/19.jpg",
    "diggs/20.jpg",
    "diggs/21.jpg",
    "diggs/22.jpg",
    "diggs/23.jpg",
    "diggs/24.jpg",
    "diggs/25.jpg",
    "diggs/26.jpg",
    "diggs/27.jpg",
    "diggs/28.jpg",
    "diggs/29.jpg"
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
