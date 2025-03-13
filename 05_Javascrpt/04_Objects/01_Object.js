// Static methods

//*********************** Object.assign(target, source) *********************//
const obj = {
  name: "sujeet",
  rollno: 2000290310172,
};

const obj1 = {
  section: "C",
  branch: "ECE",
};

// merging objects
// console.log(Object.assign({}, obj, obj1));

// clone
const clone = Object.assign({}, obj);
// console.log(clone == obj);

// more
const more = Object.assign({}, "sujeet");
// console.log(more); // only strings are enumerable

//****************** 02 Object.create(proto, properties) ********************//

const obj2 = {
  name: "objectcreate",
  rollno: 2000290310172,
};

const q = Object.create(obj2);
obj2.name = "sujeetobjectcreate";
// console.log(q); // not access of own properties but still access of obj2 properties

// const o = {}
// const o1 = Object.create(Object.prototype);
// console.log(o == o1);

const o = { __proto__: null };
const o1 = Object.create(
  {},
  {
    p: {
      value: 42,
    },
  }
);
o1.p = 24;
o1.p = 25;
// console.log(o1);

/**************************** Object.defineProperty(obj, prop, descriptor) **********/
const objDefProp = {};
Object.defineProperty(objDefProp, "fname", {
  value: 42,
  writable: false,
});

objDefProp.fname = 445;
// console.log(objDefProp.fname);

//*************************** Object.entries() ********************//

const objEntry = {
  fname: "sujeet",
  lname: "gupta",
};

// console.log(Object.entries(objEntry));
// console.log(Object.entries("objEntry"));

for (const [element , value] of Object.entries(objEntry)) {
    console.log(`${element}: ${value}`);
}
