/*global $, require, _, console */
'use strict';


function startTimer() {
	var s 		= 0
	, m 		= 0
	, counter 	= window.setInterval(function() {
		s++;


		if (s === 59) {
			s = 0;
			m++;
		}

		s = addZed(s);

		if (m >= 3) {
			stopTimer(m, counter);
		}
		document.getElementById('content').innerHTML = m + ':' + s;

	}, 1000);
}

function addZed(s) {
	if (s < 10){
		s = '0' + s;
		return s;
	}
	return s;
}

	//TODO: fix incrementing...
function minutes(s) {
	var m = (s/60).toString();
	s = 0;
	m = parseInt(m, 10);
	return m;
}

function stopTimer(s, counter) {
	window.clearInterval(counter);
}

function randomNumb(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


startTimer();