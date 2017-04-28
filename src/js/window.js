var timerIntervalId;
var timerRemainingDuration;
var statusFlag;

// http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer() {
	// show or hide windows
	$("#registerModule").hide();
	$("#clockModule").show();
	// timer logic
	statusFlag = 1;
	timerRemainingDuration = $('#countdownTime').val() * 60;
	clockTicking();
}

function toggleTimer() {
	// clear timer
	window.clearInterval(timerIntervalId);
	// start/stop timer
	if (statusFlag == 1) { // timer is running
		statusFlag = 2;
	} else { // timer is stopped
		statusFlag = 1;
		clockTicking();
	}
}

function resetTimer() {
	// show or hide windows
	$("#registerModule").show();
	$("#clockModule").hide();
	// reset timer
	statusFlag = 2;
	timerRemainingDuration = 0;
	window.clearInterval(timerIntervalId);
	$('#remainingTimeText').text("start");
}

function clockTicking() {
	var minutes, seconds;
	timerIntervalId = setInterval(function () {
		// convert time to minutes and seconds
		minutes = parseInt(timerRemainingDuration / 60, 10);
		seconds = parseInt(timerRemainingDuration % 60, 10);
		// format the display to always show ##:##
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		// display the time
		$('#remainingTimeText').text(minutes + ":" + seconds);
		// time goes by
		if (--timerRemainingDuration < -1) {
				window.clearInterval(timerIntervalId);
				$('#remainingTimeText').text("end");
				alert("time is up");
		}
	}, 1000);
}

// Run this function after the page has loaded
$(function () {})
