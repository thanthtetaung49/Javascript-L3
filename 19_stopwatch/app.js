const getDisplay = document.querySelector(".display");
const getStartBtn = document.querySelector(".start");
const getPauseBtn = document.querySelector(".pause");
const getResetBtn = document.querySelector(".reset");

// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     milliseconds = 0;

var [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
// console.log(seconds);

var setIntervalDisplay;

getStartBtn.addEventListener("click", startTime);
getPauseBtn.addEventListener("click", pauseTime);
getResetBtn.addEventListener("click", resetTime);

function startTime() {
    
    setIntervalDisplay = setInterval(showDisplay, 100);
}

function pauseTime() {
    
    clearInterval(setIntervalDisplay);
}

function resetTime() {
    
    getDisplay.textContent = `00 : 00 : 00 : 00`;
    clearInterval(setIntervalDisplay);
}

function showDisplay() {

    milliseconds += 10;

    if (milliseconds === 1000) {

        milliseconds = 0;
        seconds++;

        if (seconds === 60) {

            seconds = 0;
            minutes++;

            if (minutes === 60) {

                minutes = 0;
                hours++;
            }
        }
    }

    // getDisplay.textContent = "";

    getDisplay.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}