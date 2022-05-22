'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let sentence: string = "I won't cheat on the exam!";
let counter: number = 1;

for (let i: number = 0; i < 100; i++) {
  console.log(counter, sentence);
  counter += 1;
}