'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(listOfNumbers: number[]): number[] {
  return listOfNumbers.sort((a, b) => a - b);
}

function advancedBubble(listOfNumbersAdvanced: number[], givenBoolean: boolean): number[] {
  if(givenBoolean == false) {
    return listOfNumbersAdvanced.sort((a, b) => a - b);
  } else {
    return listOfNumbersAdvanced.sort((a, b) => b -a);
  }
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]