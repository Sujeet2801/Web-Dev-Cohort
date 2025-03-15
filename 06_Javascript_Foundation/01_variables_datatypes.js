// Variable
let name = "hitesh";
const pi = 3.14;

// Data Types
let number = 42.4; // Number
let text = "Hello"; //String
let isTrue = true; // Boolean
let nothing = null; // Object(Null type)
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // Symbol

// Object literal(non singelton object)
let person = {
  name: "hitesh",
  age: 19,
  isStudent: true,
};

// Nuber convertion
let num = "42";
// let convertedNum = Number(num);
// let convertedNum = +num;
let convertedNum = parseInt(num);

// String convertion
let str = 123;
let convertedString = String(str);

// Arithemetic Operators
let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// Comparison Operator
let x = 10;
let y = 10;

// console.log(x == y); // Equal to
// console.log(x != y); // Not Equal to
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// Math
// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));

// console.log(Math.random() * 10);

// Generate number between 1 and 6
const min = 1;
const max = 6;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// String
let firstName = "hitesh"
let lastName = "Choudhary"

let fullName = firstName + " " + lastName //hiteshchoudhary

let message = "Hello World"

// console.log(message.toUpperCase());
// console.log(message.indexOf("W"));
// console.log(message.slice(0, 5));

let myName = "Hitesh"

let greeting = `Hello ${myName}, from chaicode`