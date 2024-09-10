/**
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array 

 */

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// console.log(fruits[2]);
fruits[1] = "jambura";
// console.log(fruits);

/**
 Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */

let touristDestinations = ['Paris', 'Tokyo', 'New York'];
touristDestinations.push("dhaka");
console.log(touristDestinations);
touristDestinations.push("rajshahi", "Khulna"); 
console.log(touristDestinations);
touristDestinations.pop(); 
console.log(touristDestinations);

/**
 Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
 */

const favoriteMovies = ['Inception', 'The Matrix', 'Interstellar'];
const hobbies = ['Reading', 'Hiking', 'Cooking'];

let arr = favoriteMovies.concat(hobbies);
console.log(favoriteMovies, hobbies, arr);


