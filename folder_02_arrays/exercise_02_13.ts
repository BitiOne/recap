'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7];
let reversedNumber1: number[] = [];
let reversedNumber2: number[] = [];

// Methode one:

reversedNumber1 = numbers.reverse();

// Methode two:

for(let i: number = 0; i < numbers.length; i++) {
  reversedNumber2.splice(0, 0, numbers[i]);
}

console.log(reversedNumber1);
console.log(reversedNumber2);