'use strict';

// Write a function called `findUniqueItems()` that takes a list of numbers 
// as a parameter and returns a list of numbers in which every number is unique 
// (occurs only once)

export function findUniqueItems(numbers: number[]): number[] {
  let numberIsUnique: boolean = true;
  let returnArray: number[] = [];

  for(let i: number = 0; i < numbers.length; i++) {
    for(let j: number = 0; j < returnArray.length; j++) {
      if(numbers[i] === returnArray[j]) {
        numberIsUnique = false;
      }
    }

    if(numberIsUnique == true) {
      returnArray.push(numbers[i]);
    }

    numberIsUnique = true;
  }

  return returnArray;
}

// Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
// should print: `[1, 11, 34, 52, 61]`