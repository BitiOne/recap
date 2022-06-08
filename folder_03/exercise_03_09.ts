'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

function findMatchingIndexes(givenNumber: number, givenArray: number[]): number[] {
  let returningArray: number[] = [];

  givenArray.forEach(function(value: number, index: number) {
    if(givenArray[index].toString().includes(givenNumber.toString()) == true) {
      returningArray.push(index);
    };
  });

  return returningArray;
}

// Example
console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'