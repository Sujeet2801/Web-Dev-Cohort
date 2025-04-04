// 1st method
function changeBackgroundColorBlack() {
  document.body.style.backgroundColor = "black";
}

function changeBackgroundColorWhite() {
  document.body.style.backgroundColor = "white";
}

// 2nd method
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// 3rd method
const button = document.getElementById("theme-button");
button.addEventListener("click", function (e) {
  if(e.target.innerText === 'Dark Mode'){
    changeBackgroundColor('black')
    e.target.innerText = 'Light Mode'
    }
    else {
    changeBackgroundColor('white')
    e.target.innerText = 'Dark Mode'
  }
});
