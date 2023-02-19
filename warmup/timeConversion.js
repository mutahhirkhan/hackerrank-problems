/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s'12:01:00PM'
Return '12:01:00'.

s'12:01:00AM'
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
• string s: a time in 12 hour format

Returns
• string: the time in 24 hour format

Input Format
A single strings that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
• All input times are valid

Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
 */
function timeConversion(s) {
	String.prototype.replaceAt = function (index, replacement) {
		return this.substring(0, index) + replacement + this.substring(index + replacement.length);
	};

	//special case if time is 12AM or 12PM
	if (s.length > 1) {
		if(s[0] === '1' && s[1] === '2'){
			if(s[s.length - 2] === "A"){
				s = s.replaceAt(0, '0');
				s = s.replaceAt(1, '0');
			}
		}
		//directly accessing for less computation
		else if (s[s.length - 2] === "P") {
			let newPrefix = String(Number(s[0] + s[1]) + 12);

			s = s.replaceAt(0, newPrefix[0]);
			s = s.replaceAt(1, newPrefix[1]);
		}
	}

	//multiple replacements at a time.
	s = s.replace(/AM|PM/g, "");
	return s;
}
// timeConversion('07:05:45PM')

let times = [
	"07:05:45PM",
	"10:30:15AM",
	"02:45:00PM",
	"11:20:30PM",
	"06:15:45AM",
	"01:00:00PM",
	"09:30:00PM",
	"12:00:00AM",
	"12:00:00PM",
	"09:00:00AM",
	"05:00:00PM",
	"06:30:00PM",
	"11:59:59PM",
];

times.forEach((time) => timeConversion(time));
