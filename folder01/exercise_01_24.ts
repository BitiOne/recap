'use strict';

//let lineCount: number = 6;
let caracter: string = "";

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

export function drawSquare(lineCount: number) {
  // write your code here for Gradescope testing

  for (let i: number = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount - 1) {
      for (let j: number = 0; j < lineCount; j++) {
        caracter += "%";
      }
      console.log(caracter);
      caracter = "";
    } else {
      for (let k: number = 0; k < lineCount; k++) {
        if (k === 0 || k === lineCount -1) {
          caracter += "%";
        } else {
          caracter += " ";
        }
      }
      console.log(caracter);
      caracter = "";
    }
  }
}

drawSquare(6);