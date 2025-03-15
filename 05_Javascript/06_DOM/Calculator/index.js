const myButtonContainer = document.getElementById("buttons-container");
const display = document.getElementById("display-number");
const total = document.getElementById("total-button");

let calculate = "";

myButtonContainer.addEventListener("click", function (e) {
  
    const addNumber = e.target.value;
    display.innerText += addNumber; // Show numbers continuously in display

    if (!isNaN(addNumber) || ["+", "-"]) {
      calculate += addNumber;
    }
  
  console.log(calculate);
});

function compute() {
  try {
    const result = eval(calculate);
    display.innerText = result;
    console.log("Result:", result);

  } catch (error) {
    display.innerText = "Error!";
    console.error("Invalid expression:", error);
  }
}

function clearDisplay(){
    console.log("done");
    display.innerText = ""
    calculate = ""
}
