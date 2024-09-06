/*
 String Tasks
 task-1
    Count how many times a string has the letter a 
 */

let str = "this is a big aeroplane and awesome";
let count = 0;
for (let char of str) {
  if (char === "a") {
    count += 1;
  }
}

document.getElementById("one").innerHTML = `Result--- ${count}`;

/*
Task-2:
Count how many times a string has the letter a or A
*/

let str2 = "this is a big Aeroplane and awesome and Attractive";
let count2 = 0;
for (let char of str2) {
  if (char === "a" || char === "A") {
    count2 += 1;
  }
}

document.getElementById("two").innerHTML = `Result--- ${count2}`;

/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/

let str3 = "hello abc, india, orange, uganda";
let store = [];
let vowels = ["a", "e", "i", "o", "u"];

for (let element of vowels) {
  str3.includes(element) ? store.push(true) : store.push(false);
}

store.includes(false)
? (document.getElementById("three").innerHTML = `not contain`)
: (document.getElementById("three").innerHTML = `Contain`);

/*
Task-4:
  If a given string has either x, replace x by y. if the given string has X, replace it by Y.  
*/

let str4 = "xray and Xray and x-man and X-man";
let star5 = str4.replaceAll("x", "y").replaceAll("X", "Y");  

document.getElementById("four").innerHTML = star5;

/*
Task-5:
  Capitalize Every first Letter of each word in a String  
*/

let str6 = "if a given string has either x, replace x by y. if the given string has X, replace it by Y.";
let arr6 = str6.split(" ");
let arr7 = [];


for (let element of arr6){    
    let star7 = element.at(0).toUpperCase().concat(element.slice(1)) ; 
    arr7.push(star7)  
}

let result = arr7.join(" ")

document.getElementById("five").innerHTML = result;




 
  



