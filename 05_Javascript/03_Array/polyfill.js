const arr = [1, 2, 3, 4, 6, 7];

// Signature of map function
// output => return new array, input => userFn
// console.log(arr.map((e) => e * 3));

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i]);
      result.push(value);
    }
    return result;
  };
}

// console.log(arr.myMap((e) => e * 3));
/*******************************************************************/

// Signature of filter
// output => array of true values, input => userfn
// console.log(arr.filter((e) => e % 2 == 0));

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}
// console.log(arr.myFilter((e) => e % 2 == 0));
/**********************************************************************/

// Signature of reduce
// return result, userfn

console.log(arr.reduce((acc, curr) => acc + curr));

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn) {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      //   console.log(userFn(this[i]));
      sum = sum + this[i];
    }
    return sum;
  };
}
console.log(arr.myReduce((acc, curr) => acc + curr));
