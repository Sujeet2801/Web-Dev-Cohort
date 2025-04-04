const form = document.getElementById("input-form");
const submitBtn = document.getElementById("submit-btn");
const displayReviews = document.getElementById("display-reviews");
const reviewsList = document.getElementById("reviews-list");

submitBtn.addEventListener("click", function () {
  const myLi = document.createElement("li");
  myLi.setAttribute("id", "review");
  myLi.innerText = form.value;
  reviewsList.appendChild(myLi);

  const currentDate = document.createElement("p");
  currentDate.innerText = new Date().toLocaleString();
  currentDate.setAttribute("id", "currentDate")
  myLi.appendChild(currentDate);

  form.value = "";
});
