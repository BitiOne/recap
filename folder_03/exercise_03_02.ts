'use strict';
  
// -  Create variable named `nameToGreet` and assign the value `Red Bear` to it
// -  Create a function called `greet()` that greets its input parameter
//     - It prints a greeting message e.g. `Greetings dear Green Fox`
// -  Greet `nameToGreet`

let nameToGreet: string = "Red Bear";

function greet(inputName: string) {
  console.log(`Greetings dear ${inputName}!`);
}

greet(nameToGreet);