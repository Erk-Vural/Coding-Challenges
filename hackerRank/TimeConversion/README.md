Given a time in  12-hour AM/PM format, convert it to military (24-hour) time.

Note: 
* 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
* 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

<h3>Example</h3>

* s = '12:01:00PM'

    Return '12:01:00'.

* s = '12:01:00AM'

    Return '00:01:00'.

<h3>Function Description</h3>

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

* string s: a time in 12 hour format

<h3>Returns</h3>

* string: the time in 24 hour format

<h3>Input Format</h3>

A single string that represents a time in -hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

<h3>Constraints</h3>
*  All input times are valid

<h3>Sample Input 0</h3>

    07:05:45PM

<h3>Sample Output 0</h3>

    19:05:45

