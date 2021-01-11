///////////////////
/// Definitions//
/////////////////

let countdown;

const timerSettings = {
  study: 25,
  short: 5,
  long: 45,
  intervals: 4,
};

/////////// BUTTONS ////////////////
const startBtn = document.getElementById("startBtn");

///////// FUNCTIONALITY /////////////
const timerDisplay = document.querySelector(".displayTimer");

const titleDisplay = document.querySelector(".titleDisplay");

const endTime = document.querySelector(".timeLeft");

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

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
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Focus until ${hour < 10 ? "0" : ""}${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
/////////////////////
/// Button Events ///
/////////////////////

startBtn.addEventListener("click", function () {
  timer(1500);
});
