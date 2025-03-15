// "use strict";

// ============================ 1️⃣ Object.assign(target, source) ============================ //
const obj = { name: "sujeet", rollno: 2000290310172 };
const obj1 = { section: "C", branch: "ECE" };

// Merging objects
console.log(Object.assign({}, obj, obj1));

// Cloning an object
const clone = Object.assign({}, obj);
console.log(clone === obj); // false (not the same reference)

// Assigning from a string (only enumerable properties)
console.log(Object.assign({}, "sujeet"));

// ============================ 2️⃣ Object.create(proto, properties) ============================ //
const obj2 = { name: "objectcreate", rollno: 2000290310172 };
const q = Object.create(obj2);
obj2.name = "sujeetobjectcreate"; // Change in the prototype affects q
console.log(q.name); // sujeetobjectcreate

const o1 = Object.create(
  {},
  { p: { value: 42, writable: false } } // Read-only property
);
console.log(o1.p); // 42

// ============================ 3️⃣ Object.defineProperty(obj, prop, descriptor) ============================ //
const objDefProp = {};
Object.defineProperty(objDefProp, "fname", { value: 42, writable: false });
objDefProp.fname = 445; // No effect (writable: false)
console.log(objDefProp.fname); // 42

// ============================ 4️⃣ Object.entries(obj) ============================ //
const objEntry = { fname: "Sujeet", lname: "Gupta" };
console.log(Object.entries(objEntry));

for (const [key, value] of Object.entries(objEntry)) {
  console.log(`${key}: ${value}`);
}

// Example with unordered keys
const unorderedObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(unorderedObj)); // Sorted by key (2, 7, 100)

// ============================ 5️⃣ Object.freeze(obj) (Shallow freeze) ============================ //
const objfreeze = { prop: 42, foo: "bar" };
Object.freeze(objfreeze);
objfreeze.prop = 455; // No effect
console.log(objfreeze.prop); // 42

// Nested object modification (shallow freeze)
const objEntryShallowCopy = { internal: {} };
Object.freeze(objEntryShallowCopy);
objEntryShallowCopy.internal.a = "Value"; // Works because internal is not frozen
console.log(objEntryShallowCopy.internal.a); // "Value"

// ============================ 6️⃣ Deep Freeze Function ============================ //
function deepFreeze(object) {
  for (const key of Reflect.ownKeys(object)) {
    const value = object[key];
    if (value && typeof value === "object") deepFreeze(value);
  }
  return Object.freeze(object);
}

const deepFreezeObj = { internal: { a: null } };
deepFreeze(deepFreezeObj);
deepFreezeObj.internal.a = 45; // No effect
console.log(deepFreezeObj.internal.a); // null

// ============================ 7️⃣ Object.fromEntries(obj) ============================ //

const mapEntries = new Map([["foo", "bar"], ["baz", 42]]);
console.log(Object.fromEntries(mapEntries)); // { foo: "bar", baz: 42 }

// ============================ 8️⃣ Object.getPrototypeOf(obj) ============================ //
const proto = {};
const prototypeOfObject = Object.create(proto);
console.log(Object.getPrototypeOf(prototypeOfObject) === proto); // true

// ============================ 9️⃣ Object.groupBy() Alternative ============================ //
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// Using reduce() for groupBy functionality
const groupedInventory = inventory.reduce((acc, item) => {
  (acc[item.type] ||= []).push(item);
  return acc;
}, {});
console.log(groupedInventory);

// ============================ 🔟 Object.hasOwn(obj, prop) ============================ //
const example = { prop: "exists" };
console.log(Object.hasOwn(example, "prop")); // true
console.log("prop" in example); // true (works for inherited props too)

// ============================ 1️⃣1️⃣ Object.is(value1, value2) ============================ //
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

const foo = { a: 1 };
const bar = { a: 1 };
console.log(Object.is(foo, bar)); // false (different references)

// ============================ 1️⃣2️⃣ Object.keys(obj) ============================ //
console.log(Object.keys({ a: 1, b: 2 })); // ["a", "b"]

// Example with unordered keys
const anObjKeys = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObjKeys)); // ["2", "7", "100"]

// ============================ 1️⃣3️⃣ Object.seal(obj) ============================ //
const object1 = { property1: 42 };
Object.seal(object1);
object1.property1 = 33; // Works
delete object1.property1; // Doesn't work
console.log(object1.property1); // 33