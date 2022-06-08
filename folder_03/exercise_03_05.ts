'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(givenNumber: number): number {
  let factorialNumber: number = 1;

  for(let i: number = 1; i <= givenNumber; i++) {
    factorialNumber *= i;
  }

  if(givenNumber == 0) {
    return 1;
  } else {
    return factorialNumber;
  }
}

console.log(calculateFactorial(1));