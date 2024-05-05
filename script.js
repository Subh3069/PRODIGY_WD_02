let timer = null;
let isRunning = false;
let secondsElapsed = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const stopwatchDiv = document.querySelector('.stopwatch');

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

function updateDisplay() {
    display.innerText = formatTime(secondsElapsed);
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            secondsElapsed++;
            updateDisplay();
        }, 1000);
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = true;
        stopwatchDiv.classList.add('running'); // Add animation effect
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
        stopwatchDiv.classList.remove('running'); // Remove animation effect
    }
}

function resetTimer() {
    secondsElapsed = 0;
    updateDisplay();
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display and button states
updateDisplay();
stopButton.disabled = true;
resetButton.disabled = true;
