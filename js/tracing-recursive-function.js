'use strict';

var callMe = function  () {
	callMe();
	callMe();
	callMe('anytime');
};

callMe();

/*****CALL STACK*****/
var callMe = function  () { // 1st definition on call stack
	callMe(); // 2nd call to callMe function places its definition on call stack the 2nd time.
	callMe(); // this never invoked
	callMe('anytime'); // this never invoked
};
var callMe = function  () { // 2nd
	callMe(); // 3rd 
	callMe(); // this never invoked
	callMe('anytime'); // this never invoked
};
var callMe = function  () { // 3rd
	callMe(); // 4th
	callMe(); // this never invoked
	callMe('anytime'); // this never invoked
};

/* First statement of this function always calls itself as soon as this function is invoked, Hence goes into infinite loop and never runs any other statement after 1st statement */

/***CALL STACK*****/