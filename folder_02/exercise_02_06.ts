'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers: number[] = [1, 2, 3, 8, 5, 6];

numbers.map((e: number, i: number) => {
  if(i == 3) {
    numbers[i] = 4; 
  }
  return numbers;
});

console.log(numbers[3]);