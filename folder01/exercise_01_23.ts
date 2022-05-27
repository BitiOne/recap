'use strict';

let lineCount: number = 9;
let asterix: string = "*";
let space: string = " ";

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
  for (let j: number = 1; j < (lineCount - i); j++) {
    space += " ";
  }
  console.log(space + asterix);
  asterix += "**";
  space = " ";
}

asterix = "*";

for (let k: number = 0; k < (lineCount -1); k++) {
  for (let l: number = 1; l < ((lineCount - k) - 1); l++) {
    asterix += "**";
  }
  space += " ";
  console.log(space + asterix);
  asterix = "*";
}