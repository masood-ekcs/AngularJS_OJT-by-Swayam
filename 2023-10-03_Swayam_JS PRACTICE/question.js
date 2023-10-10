// Q1.
// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.

// Hint: Use addition operator (+).
// Hint: Use a new variable which can be used to store and return the sum.

// Sample Input
// 89, 11

// Sample Output
// 100

// Explanation
// We get 89 + 11 = 100

function sumOfTwoNumbers(a, b) {
  let output = a + b;
  return console.log(output);
}

sumOfTwoNumbers(89, 11);

// Q2.

// Problem Description
// You are given a number a as an argument. You have to implement the function findCube that will return the cube of that number. Cube of a number basically means the number is multiplied by itself thrice.

// Hint: Use multiplication operator (*).

// Sample Input
// 3

// Sample Output
// 27

// Explanation
// Cube of 3 would be 3 x 3 x 3 = 27

function findCube(a) {
  let output = a * a * a;
  return console.log(output);
}

findCube(3);

// Q3.
// Problem Description
// You are given a number a as an argument. You have to implement the function incrementNumber that will increment the number by 1 and return the result.

// Hint: Use addition operator (+).

// Sample Input
// 10

// Sample Output
// 11

// Explanation
// 10 + 1 = 11

function incrementNumber(a) {
  let output = a + 1;
  return console.log(output);
}

incrementNumber(4);

// Q4.
// Problem Description
// You are given two decimal numbers a and b as arguments. You have to implement the function multiplyTwoDecimals which will multiply the two numbers.

// Hint: Use multiplication operator (*)

// Sample Input
// 896.78, 11.5

// Sample Output
// 10312.97

// Explanation
// 896.78 * 11.5 = 10312.97

function multiplyTwoDecimals(a, b) {
  let output = a * b;
  return console.log(output);
}

multiplyTwoDecimals(896.78, 11.5);

// Q5.
// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function remainderOfDivision that returns the remainder when you divide the first number by the second number.

// Hint: Choose the correct arithmetic operator that can give the remainder. Remainder will be a whole number.

// Sample Input
// 10, 3

// Sample Output
// 1

// Explanation
// When 10 is divided by 3, we get a quotient of 3 and a remainder of 1.

function remainderOfDivision(a, b) {
  let output = a % b;
  return console.log(output);
}

remainderOfDivision(10, 3);

// Q6.
// Problem Description
// You are given three numbers a, b and c as arguments. You have to implement the function compareNumbers such that EITHER the first number is equal to the second OR the second number is equal to the third, return true. Else, return false.

// Hint: This is a combination of comparison operator and logical operator.

// Sample Input
// 10, 99, 99

// Sample Output
// true

// Explanation
// The second number (99) and third number (99) are equal, hence true.

function compareNumbers(a, b, c) {
  if (a === b) {
    return console.log(true);
  } else if (b === c) {
    return console.log(true);
  }
}

compareNumbers(10, 99, 99);

// Q7.
// Problem Description
// You are given three numbers a, b and c as arguments. You have to implement the function isDescending that will return true only if the first number is greater than the second number AND the second number is greater than the third number. Else, return false.

// Hint: This is a combination of comparison operator and logical operator.

// Sample Input
// 10, 9, 7

// Sample Output
// true

// Explanation
// True, since 10 is greater than 9 and 9 is greater than 7.

function isDescending(a, b, c) {
  if (a > b && b > c) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isDescending(10, 9, 7);

// Q8.
// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function findLargest that will return the largest number between the two numbers.

// Hint: Use comparison operator (>).
// Hint: This can be solved u	sing if else.

// Sample Input
// 1, 9

// Sample Output
// 9

// Explanation
// As 9 is greater than 1, return 9.

function findLargest(a, b) {
  if (a > b) {
    return console.log(a, 'is largest');
  } else {
    return console.log(b, 'is largest');
  }
}

findLargest(1, 9);

// Q9.
// Problem Description
// You are given a number num as an argument. You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.

// Hint: Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly divided by 2.
// Hint: You can use conditionals to implement it.

// Sample Input
// 10

// Sample Output
// Even

// Explanation
// 10 is divisible by 2 hence the output is Even.

function evenOrOdd(a, b) {
  let num;
  if (a % 2 == 0) {
    num = 'Even';
    return console.log(num);
  } else {
    num = 'Odd';
    return console.log(num);
  }
}

evenOrOdd(10);

// Q 10.
// Problem Description
// You are given three numbers side1, side2 and side3 as arguments. You have to implement the function isEquilateralType that will return true if all the sides are equal else it will return false.
// Please note: All the sides will be greater than 0, that is side1> 0, side2> 0 and side3> 0.

// Hint: Equilateral means values of side1, side2 and side3 should be equal.

// Sample Input
// 9, 9, 9

// Sample Output
// true

// Explanation
// All the sides are equal therefore the output is true.

function isEquilateralType(side1, side2, side3) {
  if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 === side2 && side1 === side3) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
}

isEquilateralType(9, 9, 9);

// Q 11.
// Problem Description
// You are given two numbers age and weight as arguments. You have to implement the function checkBloodDonationEligiblity that will determine if the given age is eligible for blood donation or not.

// If the age is less than 18, return "UnderAge",
// If the age is more than 18, but weight is less than or equal to 50, return "NotEligible",
// If the age is more than 18, but weight more than 50, return 'Eligible'.

// Hint: List down multiple conditions and explore nested if-else.

// Sample Input
// 25,55

// Sample Output
// Eligible

// Explanation
// As age is greater than 18 and weight is greater than 50, thus "Eligible".

function checkBloodDonationEligiblity(age, weight) {
  if (age < 18 || weight <= 50) {
    return console.log('Not Eligible');
  } else {
    return console.log('Eligible');
  }
}

checkBloodDonationEligiblity(16, 40);
checkBloodDonationEligiblity(18, 40);
checkBloodDonationEligiblity(20, 40);
checkBloodDonationEligiblity(16, 60);
checkBloodDonationEligiblity(18, 50);
checkBloodDonationEligiblity(18, 60);
checkBloodDonationEligiblity(20, 60);

//  --- OR
function checkBloodDonationEligiblity2(age, weight) {
  if (age >= 18 && weight <= 50) {
    return console.log('Not Eligible');
  } else if (age >= 18 && weight > 50) {
    return console.log('Eligible');
  } else {
    return console.log('Under Age');
  }
}

checkBloodDonationEligiblity2(16, 60);
checkBloodDonationEligiblity2(18, 40);
checkBloodDonationEligiblity2(20, 60);

// Q 12 - Medium level
// Problem Description
// A year is considered a leap year, if either of the 2 conditions are met:
// The year is multiple of 400.
// The year is multiple of 4 and not multiple of 100.
// You are given the number year as an argument. You have to implement the function checkLeapYear that will return "LEAP YEAR" if it's a leap year else return "COMMON YEAR".

// Hint: Write down the conditions. Use conditional and logical operators.

// Sample Input
// 2020

// Sample Output
// LEAP YEAR

// Explanation
// 2020 is divisible by 4 and not by 100, thus it's a LEAP YEAR.

function checkLeapYear(year) {
  if (year % 4 == 0) {
    //   if (year % 4 == 0 || year % 400 == 0) {
    return console.log('Leap Year');
  } else {
    return console.log('Common Year');
  }
}

checkLeapYear(2000);
checkLeapYear(2020);
checkLeapYear(2021);
checkLeapYear(2022);
checkLeapYear(2023);
checkLeapYear(2024);

// Q13.
// Problem Description
// You are given names of two students. They will form a team for an upcoming coding competition. The name of the team is the concatenation of the first characters of the two given names. Return the name of the team given the name of the students as arguments.

// Sample Input 1
// Anu, Rao

// Sample Output 1
// AR

// Explanation
// The first character of Anu is ‘A’ and that of Rao is ‘R’. After concatenating it we get AR.

// Sample Input 2
// Ravi, Faizan

// Sample Output 2
// RF

// Explanation
// The first character of Ravi is ‘R’ and that of Faizan is ‘F’. After concatenating it we get RF.

function team(s1, s2) {
  let c1 = s1[0];
  let c2 = s2[0];
  return console.log(c1 + c2);
}

team('Masood', 'Ahmad');
team('Soorma', 'Bhopali');
team('Ghabbar', 'Singh');
team(5, 9);

// Q 14 .
// Problem Description
// You are given a number n as an argument. You have to implement a function findSumOfFirstN which will add all the numbers from 1 to n and returns the sum.
// Please note that the value of n will be always greater than 0.

// Hint 1: Use a new variable that can be used to store and return the sum.
// Hint 2: Use for-loop to iterate from 1 to n.

// Sample Input 1
// 3

// Sample Output 1
// 6

// Explanation
// For n = 3, output is 6 i.e, 1 + 2 + 3

// Sample Input 2
// 5

// Sample Output 2
// 15

// Explanation
// For n = 5, output is 15 i.e, 1 + 2 + 3 + 4 + 5

function findSumOfFirstN(n) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum += i;
  }
  return console.log(totalSum);
}

findSumOfFirstN(3);
findSumOfFirstN(5);
findSumOfFirstN(6);
findSumOfFirstN(9);
