'use strict';

var tracker = 0;
var callMe = function  () {
	tracker++;
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime');
};

callMe(); // First call

/* CALL STACK */
var callMe = function  () { // 1st definition 
	tracker++; //1
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime'); // 2nd call
};
var callMe = function  () { // 2nd definition
	tracker++; // 2
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime'); // 3rd call
};
var callMe = function  () { // 3rd definition
	tracker++; // 3
	if (tracker === 3) { // true
		return 'loops'; // returns 'loops'
	}
	callMe('anytime'); // not invoked
};
/* CALL STACK */