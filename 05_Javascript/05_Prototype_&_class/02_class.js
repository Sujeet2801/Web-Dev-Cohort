class Person {
  constructor(fname) {
    this.fname = fname;
  }
}

const p1 = new Person("sujeet");
console.log(p1.fname);

/****************************************************************/
// Prototype Inheritance

class Car{
    constructor(name, model){
        this.name = name;
        this.model =  model;
    }
}

class Vechicle extends Car {
    constructor(name, model, type){
        super(name, model)
        this.type = type;
    }
}

const v1 = new Vechicle("mar", "marut", "car")
// console.log(v1.name);

/**************************************************************************/
// if extends keyword is not present 

class Transport {
    constructor(name,model,type){
        this.type = type;
    }
}

// Not good practice
Transport.prototype = Car

const t1 = new Transport("mahindra", "scorpio", "SUV");
console.log(t1);