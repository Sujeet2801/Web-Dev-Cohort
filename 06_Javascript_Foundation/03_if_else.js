// Example of factory
function prepareChai(type) {
  if (typeof type === "string") {
    if (type === "Masala Chai") {
      console.log("Adding spices to the chai");
    } else {
      console.log("Preparing regular chai");
    }
  } else {
    console.log("Enter String value");
  }
}

// prepareChai("4");
// prepareChai("Ginger Chai");

/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.
*/

function calculateTotal(amount) {
  // convert to number
  if (typeof amount !== "number") {
    amount = +amount;
    return amount;
  }

  // return amount > 1000 ? (amount - (amount / 10)) : amount;
  return amount > 1000 ? amount * 0.9 : amount;
}

let finalBill = calculateTotal(5);
// console.log(finalBill);
// console.log(calculateTotal(1300));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.
*/

function trafficLight(color) {
  if (typeof color !== "string") {
    color = String(color);
    // console.log(color);
  }

  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Chalan kaat do");
  }
}

// trafficLight("yellow");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

// checktruthyValue(1) // true
// checktruthyValue(0) // false
// checktruthyValue("hitesh") // true
// checktruthyValue("") // false
// checktruthyValue(" ") // true
// checktruthyValue([]) // true
// checktruthyValue({}) // true
// checktruthyValue([1, 2, 3]) // true

function login(username, password, loginIp) {
  if (username === "admin" && (password === "1234" || loginIp == "127")) {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}
