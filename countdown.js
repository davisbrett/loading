document.addEventListener("DOMContentLoaded", function () {
    const countdownNumber = document.getElementById('countdownNumber');
    const countdownContainer = document.getElementById('countdownContainer');
    let number = 3.0;

    const countdownInterval = setInterval(() => {
        number -= 0.1;
        countdownNumber.textContent = number.toFixed(1);
        if (number < 0) {
            clearInterval(countdownInterval);
            countdownContainer.style.display = 'none';
        }
    }, 100);
});
