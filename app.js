console.log("Hello World");

// Function

function greetings(name) {
  console.log(`Hello ${name}`);
}

greetings("John"); // Hello John


// Function with Arguments
function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(2, 3);
console.log(result); // 5

// The ARguments Object
function printAll() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printAll(1, 2, 3, 4, 5); // 1 2 3 4 5
printAll(10,20) //10 20

// Function Scope
function greeting() {
  let message = "Hello";
  let sayHi = function hi() {
    console.log(message);
  }
  sayHi(); // Hello
}
greeting();
// console.log(message); // ReferenceError: message is not defined

// Block Scope
let message = "Hello";
if (message === "Hello") {
  let message = "Inside if block";
  console.log(message); // Inside if block
}

console.log(message); // Hello

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Hello"); // Hello
})();

// Closures
function setupCounter(val) {
  return function counter() {
    return val++;
  }
}

let counter1 = setupCounter(0);
console.log(counter1()); // 0
console.log(counter1()); // 1

let counter2 = setupCounter(10);
console.log(counter2()); // 10