const form = document.getElementById("input-form");
const submitBtn = document.getElementById("submit-btn");
const reviewsList = document.getElementById("reviews-list");
const ratingButtons = document.querySelectorAll(".ratings"); 

submitBtn.addEventListener("click", function () {
  const reviewText = form.value.trim();

  if (!reviewText || selectedRating === 0) {
    alert("Please enter a review and select a rating.");
    return;
  }

  const myLi = document.createElement("li");
  myLi.setAttribute("id", "review");

  // Review text
  const reviewPara = document.createElement("p");
  reviewPara.innerText = reviewText;
  myLi.appendChild(reviewPara);

  // Star rating
  const starsPara = document.createElement("p");
  for(let i=0; i<selectedRating; i++){
    starsPara.innerText += '⭐';
  }
  // starsPara.innerText = "⭐".repeat(selectedRating);
  myLi.appendChild(starsPara);

  // Current date
  const currentDate = document.createElement("p");
  currentDate.innerText = new Date().toLocaleString();
  currentDate.setAttribute("id", "currentDate");
  myLi.appendChild(currentDate);

  // Append review to list
  reviewsList.appendChild(myLi);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute("id", "delBtn")
  deleteBtn.innerText = "Deletev Review";
  myLi.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function(e){
    const value = e.target;
    console.log(value);
    console.log(myLi);
    myLi.remove()
  })

  // Reset form
  form.value = "";
  selectedRating = 0;
  ratingButtons.forEach(b => b.style.backgroundColor = "");
});

let selectedRating = 0;

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    selectedRating = parseInt(btn.value);

    // ratingButtons.forEach(b => b.style.backgroundColor = ""); 
    btn.style.backgroundColor = "#ffd700";
  });
});