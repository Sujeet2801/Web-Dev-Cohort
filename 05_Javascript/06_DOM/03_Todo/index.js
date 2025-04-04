const input = document.getElementById("todo-input");
const addTask = document.getElementById("todo-add");
const myUl = document.getElementById("items-container");

addTask.addEventListener("click", function () {

  const li = document.createElement("li");
  li.setAttribute("id", "lilist");
  li.innerText = input.value;

  const deleteTodo = document.createElement("button");
  deleteTodo.setAttribute("id", "closeButton");
  deleteTodo.innerText = "x";

  li.appendChild(deleteTodo);

  deleteTodo.addEventListener("click", function () {
    li.remove();
  });

    // myUl.appendChild(li);
  myUl.insertAdjacentElement("afterbegin", li);

  const deleteAll = document.createElement("button");
  if (myUl.children.length == 2) {
    deleteAll.innerText = "Delete All";
    myUl.appendChild(deleteAll);
    // myUl.insertAdjacentElement('afterend', deleteAll)
  }

  deleteAll.addEventListener("click", function () {
    while (myUl.firstChild) {
      myUl.removeChild(myUl.firstChild);
    }
  });

  input.value = "";
});
