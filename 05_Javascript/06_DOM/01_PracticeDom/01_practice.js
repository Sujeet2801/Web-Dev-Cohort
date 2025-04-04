const element = document.getElementById("main");

element.addEventListener("click", function(e){
    const value = e.target.innerText
    console.log(value);
})

const p = document.createElement("p");
p.innerText = "sujeet1";

element.appendChild(p)