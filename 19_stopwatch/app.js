// const getDisplay = document.querySelector(".display");
const getDisplay = document.querySelectorAll(".display");
const getStartBtn = document.querySelector(".start");
const getPauseBtn = document.querySelector(".pause");
const getResetBtn = document.querySelector(".reset");
const getDisplaySec = document.getElementById("display-second");
const getDisplayMlSec = document.getElementById("display-millisecond");
const modeBtn = document.querySelector(".mode-btn");

// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     milliseconds = 0;

var [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
// console.log(seconds);

var setIntervalDisplay;

// getStartBtn.addEventListener("click", startTime);
// getPauseBtn.addEventListener("click", pauseTime);
// getResetBtn.addEventListener("click", resetTime);

// function startTime() {

//     clearInterval(setIntervalDisplay);
//     setIntervalDisplay = setInterval(showDisplay, 10);
// }

// function pauseTime() {

//     clearInterval(setIntervalDisplay);
// }

// function resetTime() {

//     clearInterval(setIntervalDisplay);
//     [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
//     getDisplay.innerHTML = "00 : 00 : 00 : 000";
// }

// function showDisplay() {

//     milliseconds += 10;

//     if (milliseconds === 1000) {

//         milliseconds = 0;
//         seconds++;

//         if (seconds === 60) {

//             seconds = 0;
//             minutes++;

//             if (minutes === 60) {

//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//     // getDisplay.textContent = "";

//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

//     getDisplay.textContent = `${h} : ${m} : ${s} : ${ms}`;
// }

//////////////////////////////////////////////////////////////////

var idx = 0;
// getDisplay[idx].style.display = "block";

modeBtn.onclick = function () {
  reload();
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];

  getDisplay[idx].style.display = "none";

  idx++;

  if (idx > 1) {
    idx = 0;
  }

  getDisplay[idx].style.display = "block";

  modeBtn.innerHTML = `Mode ${idx + 1}`;

  console.log(idx);
};

getStartBtn.onclick = function () {
  clearInterval(setIntervalDisplay);
  setIntervalDisplay = setInterval(showDisplay, 10);
};

getPauseBtn.onclick = function () {
  clearInterval(setIntervalDisplay);
};

getResetBtn.onclick = function () {
  reload();
};

function reload() {
  if (idx === 0) {
    clearInterval(setIntervalDisplay);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    getDisplay[idx].innerHTML = "00 : 00 : 00 : 000";
  } else {
    clearInterval(setIntervalDisplay);
    milliseconds = "00";
    seconds = "00";
    getDisplayMlSec.innerHTML = milliseconds;
    getDisplaySec.innerHTML = seconds;
  }
}

function showDisplay() {
  if (idx === 0) {
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

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    getDisplay[idx].textContent = `${h} : ${m} : ${s} : ${ms}`;
  } else {
    milliseconds++;

    if (milliseconds <= 9) {
      getDisplayMlSec.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 9) {
      getDisplayMlSec.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
      milliseconds = 0;
      seconds++;
      getDisplayMlSec.innerHTML = "0" + 0;
      getDisplaySec.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
      getDisplaySec.innerHTML = seconds;
    }
  }
}

// 17SW
