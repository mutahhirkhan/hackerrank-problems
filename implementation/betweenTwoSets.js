/**
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example
a = [2, 6]
b = [24, 36]

There are two numbers between the arrays: 6 and 12.
6%2 = 0,6%6 = 0,24%6 = 0 and 36%6 = 0 for the first value.
12%2 = 0, 12%6 = 0 and 24%12 = 0, 36%12 = 0 for the second value. Return 2.

Function Description
Complete the getTotalx function in the editor below. It should return the number of integers that are betwen the sets.

getTotalx has the following parameter(s):
• int a[n]: an array of integers
• int b[m]: an array of integers

Returns
• int: the number of integers that are between the sets

Input Format
The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
The second line contains n distinct space-separated integers a[i] where 0 ≤i<n.
The third line contains m distinct space-separated integers b[j] where 0 ≤ j < m.

Constraints
• 1 ≤n, m < 10
• 1 ≤ a[i] ≤ 100
• 1 ≤ b[j] ≤ 100

Sample Input
2 3
2 4
16 32 96

sample output
3

Explanation
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
 */

function getGCD(n1, n2) {
	if (n2 === 0) {
		return n1;
	}
	return getGCD(n2, n1 % n2);
}

function getLCM(n1, n2) {
	if (n1 === 0 || n2 === 0) {
		return 0;
	} else {
		const gcd = getGCD(n1, n2);
		return Math.abs(n1 * n2) / gcd;
	}
}

/**
 *
 * @param {array<number>} a
 * @param {array<number>} b
 * @returns {number} number of integers that are common lcm and gcd of a and b
 * @see https://studyalgorithms.com/array/hackerrank-between-two-sets/
 * @dev multiple of array 'a' and factors of array 'b'
 */
function getTotalX(a, b) {
	let result = 0;

	// Get LCM of all elements of a
	let lcm = a[0];
	for (let i = 1; i < a.length; i++) {
		lcm = getLCM(lcm, a[i]);
	}

	// Get GCD of all elements of b
	let gcd = b[0];
	for (let i = 1; i < b.length; i++) {
		gcd = getGCD(gcd, b[i]);
	}

	// Count multiples of lcm that divide the gcd
	let multiple = 0;
	while (multiple <= gcd) {
		multiple += lcm;

		// Check if multiple is a factor of gcd
		if (gcd % multiple === 0) {
			result++;
		}
	}

	// return the total count of integers that are common lcm and gcd of a and b
	return result;
}

console.log(getTotalX([2, 4], [16, 32, 96])); // 3
console.log(getTotalX([2, 6], [24, 36])); // 2
console.log(getTotalX([3, 4], [24, 48])); // 2
console.log(getTotalX([1, 2, 3], [6, 12, 24])); // 1
console.log(getTotalX([1, 2, 3], [6, 12, 24, 36])); // 1
console.log(getTotalX([1, 2, 3], [6, 12, 24, 36, 48])); // 1
