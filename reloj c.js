function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeFaces = document.querySelectorAll('.time-display');

    timeFaces[0].textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    timeFaces[1].textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    timeFaces[2].textContent = `${padZero(minutes)}`;
    timeFaces[3].textContent = `${padZero(minutes)}`;
    timeFaces[4].textContent = `${padZero(seconds)}`;
    timeFaces[5].textContent = `${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

updateClock();
setInterval(updateClock, 1000);