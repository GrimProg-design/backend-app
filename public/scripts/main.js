const img = document.querySelector("img");
const div = document.querySelector(".search");
const form_wrapper = document.querySelector(".form-wrapper");
const form_cont = document.createElement("form");

let isOpen = false;

function handleClick(btn, inp, e) {
  inp.addEventListener("change", () => {
    console.log(inp.value)
  })
}

function form(isTrue) {
  const btn = document.createElement("button");
  btn.textContent = "find";
  btn.style.backgroundColor = "rgb(50 201 91)";
  btn.style.marginTop = "20px";
  btn.style.borderRadius = "20px";
  btn.style.cursor = "pointer";
  btn.style.width = "100px"

  const inp = document.createElement("input");
  const label = document.createElement("label");
  inp.id = "inp-name";
  label.className = "labels";

  const inp_p = document.createElement("input");
  const label_p = document.createElement("label");
  inp_p.id = "inp-pass";
  label_p.className = "labels";

  handleClick(btn, inp)
  if (isTrue) {
    form_wrapper.style.margin = "20px";

    form_cont.setAttribute("actions", "/user");
    form_cont.setAttribute("method", "POST")

    inp.style.width = "100px";
    inp.style.borderRadius = "20px";
    inp.style.marginBottom = "20px";
    label.textContent = "Enter your name:";
    form_cont.prepend(inp);
    form_cont.prepend(label);

    inp_p.style.width = "100px";
    inp_p.style.borderRadius = "20px";
    label_p.textContent = "Enter your password:";
    form_cont.appendChild(label_p);
    form_cont.appendChild(inp_p);

    form_cont.appendChild(btn);

    form_wrapper.appendChild(form_cont)
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
