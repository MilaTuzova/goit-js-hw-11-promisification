import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }

const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

let timerId = null;

start.addEventListener('click', onStartSwitchColors);
stop.addEventListener('click', onStopSwitchColors);

function onStartSwitchColors() {
    // console.log('click')
    start.setAttribute('disabled', true);

    start.classList.add('is-active');

    timerId = setInterval(() => {
        // console.log(colors[randomIntegerFromInterval(1, colors.length - 1)]);
        body.style.backgroundColor = colors[randomIntegerFromInterval(1, colors.length - 1)]
    }, 1000);
}

function onStopSwitchColors() {
    clearInterval(timerId);
    start.classList.remove('is-active');
    start.removeAttribute('disabled');
}