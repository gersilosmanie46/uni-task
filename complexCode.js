/**
* Filename: complexCode.js
* Description: A complex code example showcasing various JavaScript concepts and functionality.
* Note: This code may seem abstract and convoluted but it is meant to demonstrate complexity and creativity.
* Author: Your Name
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to transform a string by removing non-alphabetic characters
function transformString(str) {
  let transformedStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/)) {
      transformedStr += str[i];
    }
  }
  
  return transformedStr;
}

// Generate a random number between min and max values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  
  return true;
}

// Calculate factorial of a number recursively
function calculateFactorial(num) {
  if (num === 0) return 1;
  
  return num * calculateFactorial(num - 1);
}

// Define an array of names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Create an array of Person objects
const people = names.map(name => new Person(name, getRandomNumber(18, 50)));

// Filter out people below 30 years old
const youngPeople = people.filter(person => person.age < 30);

// Sort young people by age in descending order
youngPeople.sort((a, b) => b.age - a.age);

// Calculate the sum of their ages
const totalAge = youngPeople.reduce((sum, person) => sum + person.age, 0);

console.log(`Total age of young people: ${totalAge}`);

// Find the longest name among all people
const longestName = names.reduce((longest, name) => name.length > longest.length ? name : longest, '');

console.log(`Longest name: ${longestName}`);

// Declare and initialize a 2D array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Get the sum of all elements in the matrix
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}

console.log(`Sum of elements in matrix: ${sum}`);

// Check if a number is a prime and print appropriate message
const number = getRandomNumber(1, 100);

if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}

// Use the transformString function
const sentence = 'This@isA^^Sentence!123';

console.log(transformString(sentence));

// Call the sayHello method of a Person object
const person = new Person('John Doe', 25);
person.sayHello();

// Calculate factorial of a number and print the result
const factorialNumber = getRandomNumber(1, 10);
const factorialResult = calculateFactorial(factorialNumber);

console.log(`Factorial of ${factorialNumber}: ${factorialResult}`);

// ...

// Continue adding more complex functionality or scenarios as needed
// This code is meant to showcase complexity and creativity, so feel free to add your own examples.