// Default Parameters
// function sayHi(name = "Worl") {
//   console.log(`Hello ${name}`);
// }
// sayHi(); // Hello World
// sayHi("John"); // Hello John

// Rest Parameters
function greet(message,...names) {
  console.log(`${message} everyone!`);
  names.forEach(name => console.log(`Hi ${name}`));
}
greet("Welcome", "Mary", "John", "James");  //Welcome everyone!
                                            // Hi Mary
                                            // Hi John
                                            // Hi James

// Spread Operator
function greeting(person1, person2) {
  console.log(`Hello ${person1} and ${person2}`);
}
let names = ["John", "Mary"];
greeting(...names) // Hello John and Mary

function display(char1, char2, char3, char4) {
  console.log(char1, char2, char3, char4);
}
let letters = "abcd";
display(...letters); // a b c d