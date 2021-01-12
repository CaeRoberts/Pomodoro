///////////////////
/// Definitions//
/////////////////

/////////// BUTTONS ////////////////

const startBtn = document.getElementById("startBtn");
const start2Btn = document.getElementById("startBtn2");
const pauseBtn = document.getElementById("pauseBtn");

/////////// SECTIONS ///////////////
const timerDisplay = document.querySelector(".displayTimer");

const titleDisplay = document.querySelector(".titleDisplay");

const endTime = document.querySelector(".timeLeft");

const pomoSection = document.querySelector(".Pomosection");

///////////////////////////////////
let countdown;

let timerSettings = {
  study: 25,
  short: 5,
  long: 45,
  pause: 0,
  intervals: 4,
};

///////// FUNCTIONS /////////////

function timer(seconds) {
  // 1500
  const now = Date.now();
  const then = now + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      timerEnds();
      return;
    }
    timerSettings.pause = secondsLeft;
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  /////////////////////////////////////
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  ///////////////////////////////////////
  const titleDisplayer = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds} - Pomodoro Timer`;
  titleDisplay.textContent = titleDisplayer;
  ///////////////////////////////////////
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Focus until ${hour < 10 ? "0" : ""}${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
////////////////////////////////////////////////////////
////////////////// BREAK TIMERS ///////////////////////
///////////////////////////////////////////////////////

function timerBreak(seconds) {
  // 1500
  const now = Date.now();
  const then1 = now + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime1(then1);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then1 - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      breakEnds();
      return;
    }
    timerSettings.pause = secondsLeft;
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayEndTime1(timestamp) {
  const end1 = new Date(timestamp);
  const hour1 = end1.getHours();
  const minutes1 = end1.getMinutes();
  endTime.textContent = `Break until ${hour1 < 10 ? "0" : ""}${hour1}:${
    minutes1 < 10 ? "0" : ""
  }${minutes1}`;
}
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function pause() {
  clearInterval(countdown);
  interval = null;
}

function timerEnds() {
  // PLAY AUDIO HERE
  //
  /////////////////////
  timerDisplay.textContent = `05:00`;
  pauseBtn.style.display = "None";
  start2Btn.style.display = "inline";
}

function breakEnds() {
  // PLAY AUDIO HERE
  //
  /////////////////////
  timerDisplay.textContent = `25:00`;
  pauseBtn.style.display = "None";
  startBtn.style.display = "inline";
}
/////////////////////
/// Button Events ///
/////////////////////

startBtn.addEventListener("click", function () {
  timer(timerSettings.study * 60);
  startBtn.style.display = "None";
  pauseBtn.style.display = "inline";
  setInterval(countdown);
});

pauseBtn.addEventListener("click", function () {
  resumeBtn.style.display = "Inline";
  pauseBtn.style.display = "None";
  clearInterval(countdown);
});

resumeBtn.addEventListener("click", function () {
  pauseBtn.style.display = "inline";
  resumeBtn.style.display = "none";
  timer(timerSettings.pause);
  // const newThen = Date.now + seconds * 1000;
});

startBtn2.addEventListener("click", function () {
  timerBreak(timerSettings.short * 60);
  start2Btn.style.display = "None";
  pauseBtn.style.display = "inline";
  setInterval(countdown);
});

/* 
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
              To-do list section
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
*/
