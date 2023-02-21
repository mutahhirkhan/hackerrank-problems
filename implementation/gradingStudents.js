/**
 * HackerLand University has the following grading policy:
  • Every student receives a grade in the inclusive range from 0 to 100.
  • Any grade less than 40 is a failing grade.
  Sam is a professor at the university and likes to round each student's grade according to these rules:
  • If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
  • If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
  Examples
  • grade = 84 round to 85 (85-84 is less than 3)
  ·
  grade = 29 do not round (result is less than 40)
  .
  grade = 57 do not round (60-57 is 3 or higher)
  Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.
  Function Description
  Complete the function gradingStudents in the editor below.
  gradingStudents has the following parameter(s):
  ⚫ int grades[n]: the grades before rounding
  Returns
  ⚫ int[n]: the grades after rounding as appropriate
  Input Format
  The first line contains a single integer, n, the number of students.

  The first line contains a single integer, n, the number of students. Each line ¿ of the n subsequent lines contains a single integer, grades[i].
  Constraints
  • 1 ≤ n ≤ 60
  • 0 < grades[i] < 100
  
  Sample Input 0
  4
  73
  67
  38
  33
  
  Sample Output 0
  75
  67
  40
  33

  Explanation 0
  | ID  | ORIGINAL GRADE  | FINAL GRADE
  |  1  |        73       |     75      
  |  2  |        67       |     67       
  |  3  |        38       |     40      
  |  4  |        33       |     33      

  1. Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
  2. Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67.
  3. Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40- 38 <3, the student's grade will be rounded to 40.
  4. Student 4 received a grade below 33, so the grade will not be modified and the student's final grade is 33. 

 * @dev Taking the remainder. every time the remainder with 5 returns number, to which if we add it into the 
 * original value would become the multiple of 5. so just that's it. if that value is 2 or less than we'll add it
 * otherwise we are instructed to not to scale up the grade when there's a difference of 3 or more marks.
 * e.g. 73 % 5 = 2 ==> 73 + 2 or i can write 73 + (73 % 5)
 * 
 * and if the value is lesser than 38 means no impact on the scaling either if we add the 2 marks for scaling.
 */
function gradingStudents(grades = []) {
	return grades.map((gr) => (gr > 37 ? (gr % 5 > 2 ? gr + (5 - (gr % 5)) : gr) : gr));
}

gradingStudents([73, 67, 38, 33]);
