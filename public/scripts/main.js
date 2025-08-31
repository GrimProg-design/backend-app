const img = document.querySelector("img");
const div = document.querySelector(".search");

let isOpen = false;

img.addEventListener("click", () => {
  if (!isOpen) {
    div.style.backgroundColor = "white";
    div.style.width = "200px";
    div.style.height = "400px";
    div.style.border = "1px solid black";
    isOpen = true
  } else {
    div.style.backgroundColor = "white";
    div.style.width = "0";
    div.style.height = "0";
    div.style.border = "0";
    isOpen = false
  }
});
