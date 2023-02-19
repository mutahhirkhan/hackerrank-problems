/**
 * Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces. 
Write a program that prints a staircase of size .

Function Description
Complete the staircase function in the editor below.
staircase has the following parameter(s):
. int n: an integer

Print
Print a staircase as described above.

Input Format
A single integer,n, denoting the size of the staircase.

Constraints
0 < n <= 100
 .

Output Format
Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input
6 

Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.
 */
function staircase(n) {
	// here we use just one for loop where i tracks the number of rows
	// the number of rows (i) should be less than or equal to n
	for (let i = 1; i <= n; i++) {
		// print out a " " n-i times and append a # i times
		// console log adds a new line by default

		console.log(" ".repeat(n - i) + "#".repeat(i));
	}
}

staircase(6);
