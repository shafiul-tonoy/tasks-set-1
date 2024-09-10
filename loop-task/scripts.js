/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

for (let i = 1; i < 201; i++) {
  console.log(i);
  if (i == 100) {
    break;
  }
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let [num, sum] = [1, 0];
while (true) {
  if (sum >= 100) {
    break;
  }
  sum += num;
  num++;
  console.log(sum);
}
console.log(sum);

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let i = 1; i < 41; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i < 86; i += 2) {
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
}

/***
Generate a multiplication table for number 9
 */

for (let i = 1; i < 11; i++) {
  console.log(`9*${i}=${9 * i}\n`);
}

/***
Implement a countdown timer that counts down from 21 to 15.
 */

for (let i = 21; i > 14; i--) {
  console.log(i);
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i < 101; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log(`Find${i}`);
    break;
  }
  console.log(i);
}
