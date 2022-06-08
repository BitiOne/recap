'use strict';

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(givenNumber: number): number {
  let sumNumber: number = 0;

  for(let i: number = 0; i <= givenNumber; i++) {
    sumNumber += i;
  }

  return sumNumber;

}

console.log(sum(15));