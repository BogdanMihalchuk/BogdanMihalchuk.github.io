var startTimer = document.querySelector('.start__timer');
var stopTimer = document.querySelector('.stop__timer');
var clear__timer = document.querySelector('.clear__timer');
var textTimer = document.querySelectorAll('.text__timer');
var msec = 1;
var sec = 1;
var min = 1;
var hour = 1;
var interval;

function timer() {
	if (msec < 1000) {
		textTimer[3].innerHTML = msec;
		msec = msec + 5;
	} else {
		if  (sec > 0 && sec < 60) {
			textTimer[2].innerHTML = sec + ":";
			sec++;
			msec = 0;
		} else {
			textTimer[2].innerHTML = "00:";
			sec = 1;
			msec = 0;
			 if (min > 0 && min < 60) {
				textTimer[1].innerHTML = min + ":";
				min++;
			} else {
				textTimer[1].innerHTML = "00:";
				min = 1;
				if (hour > 0 && hour < 24) {
					textTimer[0].innerHTML = hour + ":";
					hour++;
				} else {
					textTimer[0].innerHTML = "00:";
					hour = 1;
				}
			}
		}
	}

}

function clickStartTimer() {
	startTimer.classList.add("startTimerClick");
	stopTimer.classList.add("stopTimerClick");
	var timerInterval = setInterval(timer, 1);
	interval = timerInterval;

}

function clickStopTimer() {
	startTimer.classList.remove("startTimerClick");
	stopTimer.classList.remove("stopTimerClick");
	clearInterval(interval);
}

function clearTimer() {
	clearInterval(interval);
	msec = 1;
	sec = 1;
	min = 1;
	hour = 1;
	textTimer[0].innerHTML = '00:'
	textTimer[1].innerHTML = '00:'
	textTimer[2].innerHTML = '00:'
	textTimer[3].innerHTML = '000'
	startTimer.classList.remove("startTimerClick");
	stopTimer.classList.remove("stopTimerClick");
}

clear__timer.addEventListener('click', clearTimer);
startTimer.addEventListener('click', clickStartTimer);
stopTimer.addEventListener('click', clickStopTimer);