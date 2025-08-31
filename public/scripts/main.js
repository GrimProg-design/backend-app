const img = document.querySelector("img");
const div = document.querySelector(".search");
const form_wrapper = document.querySelector(".form-wrapper");

let isOpen = false;

function form(isTrue) {
  const inp = document.createElement("input");
  const label = document.createElement("label");
  inp.id = "inp-name";
  label.className = "labels";

  const inp_p = document.createElement("input");
  const label_p = document.createElement("label");
  inp_p.id = "inp-pass";
  label_p.className = "labels";

  if (isTrue) {
    form_wrapper.style.margin = "20px";

    inp.style.width = "100px";
    label.textContent = "Enter your name:";
    form_wrapper.prepend(inp);
    form_wrapper.prepend(label);

    inp_p.style.width = "100px";
    label_p.textContent = "Enter your password:";
    form_wrapper.appendChild(label_p);
    form_wrapper.appendChild(inp_p);
  } else {
    document.querySelector("#inp-name").remove();
    document.querySelector("#inp-pass").remove();
    document.querySelectorAll(".labels").forEach((el) => el.remove());
  }
}

img.addEventListener("click", () => {
  let isTrue = null;
  if (!isOpen) {
    div.style.backgroundColor = "white";
    div.style.width = "200px";
    div.style.height = "400px";
    div.style.border = "1px solid black";
    isOpen = true;
    isTrue = true;
    form(isTrue);
  } else {
    div.style.backgroundColor = "white";
    div.style.width = "0";
    div.style.height = "0";
    div.style.border = "0";
    isOpen = false;
    isTrue = false;
    form(isTrue);
  }
});
