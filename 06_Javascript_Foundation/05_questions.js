let expenses = [
  { description: "Groceries", amount: 30, category: "Food" },
  { description: "Electricity", amount: 90, category: "Utilities" },
  { description: "Dinner", amount: 20, category: "Food" },
  { description: "Interner Bill", amount: 10, category: "Utilities" },
];

const expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report;
  },
  { Food: 0, Utilities: 0 }
);
// console.log(expenseReport);

const tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare Presentation", completed: false, priority: 1 },
];

// method chaining
let pendingTask = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(pendingTask);

const movieRatings = [
  { title: "Movie A", ratings: [1, 3, 3] },
  { title: "Movie B", ratings: [2, 3, 4] },
  { title: "Movie C", ratings: [2, 7, 3] },
];

const avgMovieRatings = movieRatings.map((rating) => {
  const total = rating.ratings.reduce((acc, movie) => acc + movie, 0);
  const averageRatings = total / rating.ratings.length;
  rating.ratings = averageRatings.toFixed(2);
  return rating;

  //   return {title: rating.title, ratings: averageRatings.toFixed(2)}
});

// console.log(avgMovieRatings);

// Call and Bind
let person1 = {
  name: "sujeet",
  greet: function () {
    console.log(`Hello ${this.name}`);
  }
};

let person2 =  {
    name: "hitesh"
}

// person1.greet.call(person2)
const bindGreet = person1.greet.bind(person2) // return a new function
console.log(bindGreet);
bindGreet()