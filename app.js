// Regular Function 1
// let greeting = function() {
//   return "Hello World";
// }

// Arrow Function 1
let greeting = () => "Hello World";

let message = greeting();
console.log(message); // Hello World

// Regular Function 2
// let greet = function greetings(name) {
//   return `Hello ${name}`;
// }

// Arrow Function 2
let greet = name => `Hello ${name}`
let msg = greet("John");
console.log(msg); // Hello John

let sum = (num1, num2) => num1 + num2;

let output = sum(10, 5);
console.log(output);

/*  this
    Refers to the owner of the function we are executing  
    Unlike regular functions,
    Arrow function do not have their own this value
*/

let msgThis = {
  name: "John",
  regularFunction: function() {
    console.log(`Hello ${this.name}`);
  },
  arrowFunction: () => console.log(`Hi ${this.name}`)
}

msgThis.regularFunction();
msgThis.arrowFunction();