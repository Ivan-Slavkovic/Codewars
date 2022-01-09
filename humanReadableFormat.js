/*
Your task in order to complete this Kata is to write a function which formats a duration, 
given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise,
the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer 
and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by 
" and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, 
but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, 
but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater 
than any valid more significant unit of time.
*/

function formatDuration(seconds) {
	// Complete this function
	if (seconds == 0) {
		return 'now';
	}
	let hoursNum = 0,
		minsNum = 0,
		yearsNum = 0,
		daysNum = 0,
		secondsNum = 0;
	yearsNum = Math.floor(seconds / 31536000);
	daysNum = Math.floor(seconds / 86400 - yearsNum * 365);
	hoursNum = Math.floor(seconds / 3600 - daysNum * 24 - yearsNum * 8760);
	minsNum = Math.floor(
		seconds / 60 - hoursNum * 60 - daysNum * 1440 - yearsNum * 525600
	);
	secondsNum =
		seconds -
		minsNum * 60 -
		hoursNum * 3600 -
		daysNum * 86400 -
		yearsNum * 31536000;

	// console.log(minsNum, secondsNum);
	let yearUnit = yearsNum + ' year';
	if (yearsNum != 1) yearUnit += 's';

	let dayUnit = daysNum + ' day';
	if (daysNum != 1) dayUnit += 's';

	let hourUnit = hoursNum + ' hour';
	if (hoursNum != 1) hourUnit += 's';

	let minUnit = minsNum + ' minute';
	if (minsNum != 1) minUnit += 's';

	let secondsUnit = secondsNum + ' second';
	if (secondsNum != 1) secondsUnit += 's';

	let tempArrayNum = [ yearsNum, daysNum, hoursNum, minsNum, secondsNum ];
	let counter = 0;
	for (let i = 0; i < tempArrayNum.length; i++) {
		if (tempArrayNum[i] == 0) {
			tempArrayNum.shift();
			counter++;
		}
		if (tempArrayNum[i] > 0) {
			break;
		}
	}
	let format = [];
	// let tempArrayUnit = [ secondsUnit, minUnit, hourUnit, dayUnit, yearUnit ];
	// tempArrayUnit.reverse();
	let tempArrayUnit = [ yearUnit, dayUnit, hourUnit, minUnit, secondsUnit ];
	for (let i = 0; i < tempArrayNum.length; i++) {
		if (tempArrayNum[i] > 0) {
			format.push(tempArrayUnit[counter + i]);
		}
	}
	if (format.length > 1) {
		format[format.length - 2] += ' and ';
	}
	let finalFormat = '';
	console.log(format);
	for (let i = 0; i < format.length; i++) {
		if (i == format.length - 2) {
			format[format.length - 2] += ' and ';
		} else if (i == format.length - 1) {
			finalFormat += format[i];
			console.log(format[i]);
		} else {
			if (format[i].includes('and')) {
				finalFormat += format[i];
				continue;
			}
			finalFormat += format[i] + ', ';
		}
	}
	console.log(finalFormat);
}
formatDuration(886014);
