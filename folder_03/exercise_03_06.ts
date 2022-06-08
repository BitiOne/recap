'use strict';
  
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(givenParameters: any[]) {
  console.log(givenParameters);
}

printParams([2, 4, 7, 23, 75, 12]);
printParams(["yes", "no", "maybe"]);