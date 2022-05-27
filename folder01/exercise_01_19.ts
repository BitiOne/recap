'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let givenNumber: number = 5;
let sumNumber: number = 0;
let counter: number = 0;

for (let i:number = 1; i <= givenNumber; i++) {
  sumNumber += i;
  counter += 1;
}

console.log("Sum: " + sumNumber + ", Average: " + sumNumber / counter);