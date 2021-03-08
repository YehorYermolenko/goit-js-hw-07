const typeInItput = document.querySelector("#validation-input");
let validNumber = Number(typeInItput.getAttribute("data-length"));

const onChange = (el) =>
  el.target.value.length === validNumber ? updateClass(el, "valid", "invalid") : updateClass(el, "invalid", "valid");

function updateClass(elem, addClass, removeClass) {
  elem.target.classList.add(addClass);
  elem.target.classList.remove(removeClass);
}

typeInItput.addEventListener("change", onChange);
