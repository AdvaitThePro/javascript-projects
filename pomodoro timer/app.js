//App logic in JS goes here
// The data/time we want to countdown to
var alarm = new Audio('alarm.mp3');
let isTimerRunning = false;
const presetTimer = {
    Pomodoro: 25,
    LongBreak: 30,
    ShortBreak: 5,
    seconds: 0
};

let Timer = {
    mins: 0,
    seconds: 0
};

Timer.mins = presetTimer.Pomodoro;
Timer.seconds = 0;

// Setup
UpdateTimeDisplay();

function SetTime(timeMins) {
    Timer.mins = timeMins;
    Timer.seconds = presetTimer.seconds;
    resetMins = Timer.mins;
    resetSeconds = Timer.seconds;
    UpdateTimeDisplay();
}

function Onclick_PomodoroBtn() {
    SetTime(presetTimer.Pomodoro);
}

function Onclick_ShortBreakBtn() {
    SetTime(presetTimer.ShortBreak);
}

function Onclick_LongBreakBtn() {
    SetTime(presetTimer.LongBreak);
}

function UpdateResetTime() {
    
}

function UpdateTimeDisplay() {
    let formattedSeconds = ("0" + Timer.seconds).slice(-2)
    document.getElementById("timerText").innerHTML = `${Timer.mins}:${formattedSeconds}`;

    if (resetMins == 25) {
        document.getElementById("smallbreak").style.backgroundColor = "#800002";
        document.getElementById("longbreak").style.backgroundColor = "#800002";
        document.getElementById("pomodoro").style.backgroundColor = "#bb0003";
    } else if (resetMins == 5) {
        document.getElementById("pomodoro").style.backgroundColor = "#800002";
        document.getElementById("longbreak").style.backgroundColor = "#800002";
        document.getElementById("smallbreak").style.backgroundColor = "#bb0003";
    } else {
        document.getElementById("pomodoro").style.backgroundColor = "#800002";
        document.getElementById("smallbreak").style.backgroundColor = "#800002";
        document.getElementById("longbreak").style.backgroundColor = "#bb0003";
    }
}



function ToggleTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        document.getElementById("toggleBtn").textContent = "Pause";
        document.getElementById("resetBtn").disabled = true;
         interval = setInterval(function () {
            Timer.seconds--;
            if (Timer.seconds < 0) {
                Timer.mins--;
                Timer.seconds = 59
            }
        UpdateTimeDisplay();
        // What happens when timer runs out
        if (Timer.mins == 0 && Timer.seconds == 0) {
            clearInterval(interval)
            alarm.play();
            setTimeout(() => {
                alert("TIMES UP!")
                }, 100);
            }
        }, 1000)    // delay for each interval in milliseconds
    } else {
    document.getElementById("toggleBtn").textContent = "Start";
    document.getElementById("resetBtn").disabled = false;
    clearInterval(interval);
    isTimerRunning = false;
    }
}

function Reset() {
    clearInterval(interval);
    Timer.mins = resetMins;
    Timer.seconds = resetSeconds;
    UpdateTimeDisplay();
}
