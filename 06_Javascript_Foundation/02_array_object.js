// Array
let chaiTypes = ["Masala Chai", "Ginger chai", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
const data = chaiTypes.pop();
// console.log(data); //

let index = chaiTypes.indexOf("Green Tea");
// console.log(index);

if (index !== -1) {
  chaiTypes.splice(index, 1);
}

// console.log(chaiTypes); 

// Finding all the occurrences of an element
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
// console.log(indices);
// [0, 2, 4]

chaiTypes.forEach((chai, index) => {
  // console.log(`${index + 1}: ${chai}`);
});

// Merging arrays
let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
// console.log(newChaiTypes);

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, mil, sugar, spices with some love",
};

// Destructuring
let { name, ingredients } = chaiRecipe; // Object Destructuring
let [firstChai, secondChai] = chaiTypes; // Array Destructuring
let [value, setValue] = useState(); // React 

// console.log(myingredients);
// console.log(secondChai);