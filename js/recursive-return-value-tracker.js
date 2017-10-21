'use strict';

var tracker = 0;
var callMe = function  () {
	tracker++;
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime'); // returns undefined
};

//callMe(); // First call

/* CALL STACK */
/*var callMe = function  () { // 1st definition 
	tracker++; //1
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime'); // 2nd call
	// returns undefined by default
};
var callMe = function  () { // 2nd definition
	tracker++; // 2
	if (tracker === 3) {
		return 'loops';
	}
	callMe('anytime'); // 3rd call EVALUATES to 'loops' but by default returns undefined.
};
var callMe = function  () { // 3rd definition
	tracker++; // 3
	if (tracker === 3) { // true
		return 'loops'; // returns 'loops'
	}
	callMe('anytime'); // not invoked
};*/
/* CALL STACK */