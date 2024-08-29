//Example for each method.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function print(element){
    console.log(element)
}
//numbers.forEach(print)
//This prints out even numbers
numbers.forEach(function (el){
   if (el % 2 === 0){
    console.log(el)
   }
})

const movies = [
    {
        title: 'Alien',
        score: 99
    },
    {
        title: 'Deadpool & Wolverine',
        score: 99
    },
    {
        title: 'The Thing',
        score: 95
    },
    {
        title: 'Dawn of the Dead',
        score: 90
    }
]

movies.forEach(function(movie){
   console.log(`${movie.title} - ${movie.score}/100`)

})
// Mapping an Array Examples.
const doubles = numbers.map(function(num){
    return num*2;
})

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})
/*
Map Practice:

It's time to get practice with the map method!

Define a variable named firstNames and assign it to the result of mapping over the existing array,
 fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.
 e.g., console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']
Please note:

 The fullNames array is an array of objects with each object containing properties for the first
 and last names of each character. You may need to click the "Reset code" link if you do not see
 the fullNames array pre-loaded into the exercise's index.js file.

 This exercise has been updated, you may see Q&A threads from this lecture that relate to the 
 original exercise which no longer exists. They can be ignored

*/
//Answer:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(fname){
    return fname.first;
})

//Arrow Functions Examples.
const add = (x,y) => {
    return x + y;
}
const square = (x) => {
    return x * x;
}
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
//Arrow practice:
/*
 Arrow Function Exercise
 Write an arrow function expression called greet.  It should accept a single string argument, 
 representing a person's name.  It should return a greeting string as shown below:
 greet("Hagrid") should return this string: Hey Hagrid! 
 greet("Luna") should return this string: Hey Luna!
 Be sure to use arrow function syntax!


*/
// Answer:
const greet = (name) => {
    return `Hey ${name}!`;
}


//Arrow function with implicit return example:
const rolldie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

const add2 = (a,b) => a + b;

// map with arrow implicit:
const newMovies = movies.map(movie1 =>
    `${movie1.title.toUpperCase()} - ${movie1.score / 10}`
)