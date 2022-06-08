'use strict';

//let lineCount: number = 4;
let asterix: string = "*";
let space: string = " ";

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

export function drawPyramid(lineCount: number) {
  // write your code here for Gradescope testing

  for (let i: number = 0; i <= lineCount - 1; i++) {
    for (let j: number = 1; j < (lineCount - i); j++) {
      space += " ";
    }
    console.log(space + asterix);
    asterix += "**";
    space = " "
  }
}

drawPyramid(8);