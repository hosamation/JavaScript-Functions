// Function Context
// let greeting = {};
// greeting.sayHi = function() {
//   console.log("Hi");
//   console.log(this);
// }

// function sayHi() {
//   console.log("Hi");
//   console.log(this);
// }
// let greeting = new sayHi(); // Hi
                            // {sayHi:f}

// greeting.sayHi(); // Hi

// Call 
let person1 = {name: "John", age:22};

let sayHi = function(message) {
  console.log(`${message}, ${this.name}`);
}
sayHi.call(person1, "Hi"); // Hi, John

// apply
function introduction(name, profession) {
  console.log(`My name is ${name} and I am a ${profession}.`);
  console.log(this);
}
introduction("John", "student");
introduction.apply(undefined, ["Mary", "Lawyer"]);
introduction.call(undefined, ["James", "artist"]);

// bind
let person2 = {
  name: "Mary",
  getName: function() {
    return this.name;
  }
};
let person3 = {name: "John"};
let getNameCopy = person2.getName.bind(person3);
console.log(getNameCopy()); // John

// eval

let x =1;
let y = 2;
let s = "abc"
console.log(eval("x + y + 1")); // 4
console.log(eval("x + y + s")); // 3abc

// parseInt
console.log(parseInt("F", 16)); // 15
console.log(parseInt("15", 10)); // 15
console.log(parseInt("Hi", 10)); // NaN

// parseFloat
console.log(parseFloat("3.99")); // 3.99
console.log(parseFloat("3.99e-1")); // 39.9
console.log(parseFloat("")); // NaN

// escape
console.log(escape("text")); // text
console.log(escape(" ")); // %20
console.log(escape("abc&%")); // abc%26%25

// unescape
console.log(unescape("text")); // text
console.log(unescape("%20")); // 
console.log(unescape("abc%26%25")); // abc&%

