function attachDragEvent(target){

    target.addEventListener('dragstart', function(){
        target.classList.add("flying")
    });
    target.addEventListener('dragend', function(){
        target.classList.remove("flying")
    });
}

const myButton = document.getElementById("addTaskButton");
let taskCounter = localStorage.getItem("taskCounter") || 0;
let buttonCounter = localStorage.getItem("buttonCounter") || 0;

myButton.addEventListener("click", function () {

  const input = prompt("What task you want to add!");

  if (!input || input.length === 0){
    return;
  }

  const myDiv = document.createElement('div')
    myDiv.setAttribute("class", "item")
    myDiv.setAttribute("draggable", "true");

    const addTask = document.createElement("p");
    // addTask.setAttribute("class", "item");
    // addTask.setAttribute("draggable", "true");
    addTask.innerHTML = input;
    myDiv.appendChild(addTask)

    const delButton = document.createElement('button')
    delButton.setAttribute("class", "deletebutton")
    delButton.innerHTML = "Delete"

    const img = document.createElement('img')
    img.setAttribute("class", "deleteImage")
    img.src = "./delete.png"
    delButton.innerHTML = img
    console.log(img);

    myDiv.appendChild(delButton)
    
    document.querySelector(".items").appendChild(myDiv)

    // console.log("task");
    attachDragEvent(myDiv)
  
    addTask.id = taskCounter++;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(input);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("taskCounter", taskCounter);

    delButton.id = buttonCounter++;
    let count = JSON.parse(localStorage.getItem("count")) || [];
    localStorage.setItem("count",  JSON.stringify(count));
    localStorage.setItem("buttonCounter", buttonCounter)
});

window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
    const addTask = document.createElement("p");
    addTask.setAttribute("class", "item");
    addTask.setAttribute("draggable", "true");
    addTask.id = "task-" + index;
    addTask.innerHTML = task;
    document.querySelector(".items").appendChild(addTask);
    attachDragEvent(addTask);
    });
};

// window.onload = function () {
//   let count = JSON.parse(localStorage.getItem("count")) || [];
//   count.forEach((task, index) => {
//   const delButton = document.createElement("button");
//   delButton.setAttribute("class", "deleteButton");
//   // delButton.setAttribute("draggable", "true");
//   delButton.id = "task-" + index;
//   delButton.innerHTML = task;
//   document.querySelector(".items").appendChild(delButton);
//   attachDragEvent(delButton);
//   });
// };

const allBoards = document.querySelectorAll(".board");
// console.log(allBoards);

const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  attachDragEvent(item)
});

allBoards.forEach((board) => {
  board.addEventListener("dragover", function () {
    console.log(board, "kuch to mere upar se gaya");
    const add = document.querySelector(".flying");
    board.append(add);
  });
});

// Delete Button
const delButton = document.querySelectorAll(".deleteButton")

delButton.forEach(item => {
  item.addEventListener("click", function(){
    const del = document.querySelector(".item")
    del.parentNode.removeChild(del)
    console.log(del);
  })
})

// Add table

const addTable = document.querySelector("#addTable")

addTable.addEventListener("click", function(){

  const div = document.createElement('div')
  
  const title = document.createElement('h2')
  const input = prompt("Add table name");
  title.innerHTML = input
  title.setAttribute("class", "title")
  div.appendChild(title)

  div.setAttribute("class", "board")
  div.setAttribute("id", input)

  document.querySelector(".container").appendChild(div)
})
