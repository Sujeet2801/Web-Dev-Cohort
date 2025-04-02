const obj = {
    fname: "sujeet",
    lname: "gupta"
}

const obj2 = {
    age: 21
}

// changing reference of prototype is not good => we can use class
obj2.__proto__ = obj;

console.log(obj2.__proto__);

/*************************************************************************/
// Prototype chaining
// Everything in js is object

const arr = [1, 2, 3, 4, 5];

console.log(arr.__proto__); // Array prototype
console.log(arr.__proto__.__proto__); // Object prototype
console.log(arr.__proto__.__proto__.__proto__); // null