/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

• The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
• Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
• When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of a means it falls d units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?

For example, Sam's house is between s = 7 and t = 10. The apple tree is located at a = 4 and the orange at b = 12. There are m = 3 apples and n = 3 oranges. Apples are thrown apples = [2, 3, -4] units distance from a, and oranges = [3, -2, -4] units distance. Adding each apple distance to the position of the tree, they land at [4+2,4+3, 4 + −4] = [6, 7, 0]. Oranges land at [12 + 3, 12 + −2, 12 + −4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7 - 10 so we print

1
2

Function Description
Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line. countApplesAnd Oranges has the following parameter(s):

• s: integer, starting point of Sam's house location.
• t: integer, ending location of Sam's house location.
• a: integer, location of the Apple tree.
• b: integer, location of the Orange tree.
• apples: integer array, distances at which each apple falls from the tree.
• oranges: Integer array, distances at which each orange falls from the tree.

Input Format
The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains m. space-separated integers denoting the respective distances that each apple falls from point a.

The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

Constraints
• 1 ≤ s, t, a, b, m, n ≤ 105
• 105 < d < 105
• a< s <t<b

Output Format
Print two integers on two different lines:
1. The first integer: the number of apples that fall on Sam's house.
2. The second integer: the number of oranges that fall on Sam's house.

Sample Input 0
7 11
5 15
32
-2 2 1
5-6

Sample Output 0
1
1

Explanation 0
The first apple falls at position 5 - 2 = 3.
The second apple falls at position 5 + 2 = 7
The third apple falls at position 5 + 1 = 6.
The first orange falls at position 15 + 5 = 20.
The second orange falls at position 15 – 6 = 9.
Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of

output.
Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.


 * Counts the number of apples and oranges that land on or to the left/right of Sam's house.
 * @param {number} samStartingPoint - The starting point of Sam's house.
 * @param {number} samEndingPoint - The ending point of Sam's house.
 * @param {number} appleTreeLocation - The location of the apple tree.
 * @param {number} orangeTreeLocation - The location of the orange tree.
 * @param {number[]} apples - An array of integers representing the distances at which each apple falls from the tree.
 * @param {number[]} oranges - An array of integers representing the distances at which each orange falls from the tree.
 */
function countApplesAndOranges(samStartingPoint, samEndingPoint, appleTreeLocation, orangeTreeLocation, apples, oranges) {
	// Initialize empty arrays to store the apples and oranges that land on or to the left/right of Sam's house.
	let trueApples = [];
	let trueOranges = [];

	// Filter the array of apples to get the ones that land on or to the left/right of Sam's house.
	trueApples = apples.filter((ap) => ap + appleTreeLocation >= samStartingPoint && ap + appleTreeLocation <= samEndingPoint);

	// Filter the array of oranges to get the ones that land on or to the left/right of Sam's house.
	trueOranges = oranges.filter((or) => or + orangeTreeLocation >= samStartingPoint && or + orangeTreeLocation <= samEndingPoint);

	// Log the arrays of apples and oranges that land on or to the left/right of Sam's house to the console.
	console.log(trueApples.length);
	console.log(trueOranges.length);
}

const data1 = {
	samStartingPoint: 7,
	samEndingPoint: 11,
	appleTreeLocation: 5,
	orangeTreeLocation: 15,
	apples: [-2, 2, 1],
	oranges: [5, -6],
};
const data2 = {
	samStartingPoint: 15,
	samEndingPoint: 20,
	appleTreeLocation: 17,
	orangeTreeLocation: 25,
	apples: [-2, -1, 4, 6],
	oranges: [10, -10, -5, 4, 1],
};
const data3 = {
	samStartingPoint: 10,
	samEndingPoint: 30,
	appleTreeLocation: 12,
	orangeTreeLocation: 25,
	apples: [-7, -5, 0, 2, 10, 15],
	oranges: [-8, -7, 3, 6, 7, 15, -10, 0],
};
const data4 = {
	samStartingPoint: -10,
	samEndingPoint: 20,
	appleTreeLocation: -5,
	orangeTreeLocation: -2,
	apples: [-10, -5, 0],
	oranges: [-10, -5, 5, 10],
};
const data5 = {
	samStartingPoint: 0,
	samEndingPoint: 20,
	appleTreeLocation: 10,
	orangeTreeLocation: 15,
	apples: [-5, 7, 11, 12],
	oranges: [8, -10, 6, 3, 20],
};

countApplesAndOranges(
	data1.samStartingPoint,
	data1.samEndingPoint,
	data1.appleTreeLocation,
	data1.orangeTreeLocation,
	data1.apples,
	data1.oranges
);
countApplesAndOranges(
	data2.samStartingPoint,
	data2.samEndingPoint,
	data2.appleTreeLocation,
	data2.orangeTreeLocation,
	data2.apples,
	data2.oranges
);
countApplesAndOranges(
	data3.samStartingPoint,
	data3.samEndingPoint,
	data3.appleTreeLocation,
	data3.orangeTreeLocation,
	data3.apples,
	data3.oranges
);
countApplesAndOranges(
	data4.samStartingPoint,
	data4.samEndingPoint,
	data4.appleTreeLocation,
	data4.orangeTreeLocation,
	data4.apples,
	data4.oranges
);
countApplesAndOranges(
	data5.samStartingPoint,
	data5.samEndingPoint,
	data5.appleTreeLocation,
	data5.orangeTreeLocation5,
	data5.apples,
	data5.oranges
);
