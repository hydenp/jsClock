// define variables to hold the values of time and display it
let seconds = 0;
let minutes = 0;
let displayS = 0;
let displayM = 0;

// vars to hold status and interval
let isRunning = false;
let interval = null;


// function to increment the clock

function Clock() {

  // first increment the seconds
  seconds++;

  // check if we have reached a full minute
  if(seconds === 60) {
    minutes++;
    seconds = 0;
  }

  // make the correct display
  if(seconds < 10) {
    displayS = "0" + seconds.toString();
  }
  else {
    displayS = seconds;
  }

  if(minutes < 10) {
    displayM = "0" + minutes.toString();
  }
  else {
    displayM = minutes;
  }

  // update the value in index.html
  document.getElementById('time').innerHTML = displayM + ":" + displayS;



}

// update every second


function startStop() {
  // if the clock is not running
  if(isRunning === false) {
    // start the clock and updat the status
    interval = window.setInterval(Clock, 1000);
    isRunning = true;

    // update the button
    document.getElementById('startstop').innerHTML = "Stop";
  }
  // if the clock is running
  else {
    // stop the clock and update the status
    window.clearInterval(interval);
    isRunning = false;

    // update the button
    document.getElementById('startstop').innerHTML = "Start";
  }
}

// function to reset the Clock
function Reset() {
  // stop the clock and update the status
  window.clearInterval(interval);
  isRunning = false;

  // update the button and time value
  document.getElementById('startstop').innerHTML = "Start";
  document.getElementById('time').innerHTML = "00:00";

  // set the values of seconds and minutest back to zero
  seconds = 0;
  minutes = 0;
}
