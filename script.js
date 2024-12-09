const addTimerButton = document.getElementById('add-timer');
const timeInput = document.getElementById('time-input');
const timersList = document.getElementById('timers');

addTimerButton.addEventListener('click', () => {
    const time = parseInt(timeInput.value);
    if (time <= 0) return;

    const newTimer = document.createElement('li');
    timersList.appendChild(newTimer);

    startTimer(time, newTimer);
});

function startTimer(time, timer) {
    let timeLeft = time;

const interval = setInterval(() => {
    timer.textContent = `Осталось ${timeLeft} секунд`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(interval);
        timer.remove();
    }
}, 1000)
};