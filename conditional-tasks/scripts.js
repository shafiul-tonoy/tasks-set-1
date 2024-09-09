/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 600;
let cokePrice;

burgerPrice > 500 ? (cokePrice = "free") : (cokePrice = "30 taka");
// console.log(cokePrice);

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 87;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  default:
    grade = "F";
}

//   console.log(grade);

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 81;
let friendScore = 82;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("go for a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("message unseen");
  } else {
    console.log("block");
  }
} else {
  console.log("sleep and sad");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 5;
// let num2 = 2;
let [num1, num2] = [5, 2];
let result;

num1 > num2 ? (result = Math.pow(num1, 2)) : (result = num1 + num2);
// console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let [age, type, fare] = [6, , 800];

if (age < 10) {
  fare = "free";
  console.log(`Fare: ${fare}`);
} else if (age >= 60) {
  fare = fare * 0.85;
  console.log(`Fare: ${fare}`);
} else if (type == "student") {
  fare = fare * 0.5;
  console.log(`Fare: ${fare}`);
} else {
  console.log(`Fare: ${fare}`);
}
