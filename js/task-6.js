const typeInItput = document.querySelector("#validation-input");

const validNumber = typeInItput.getAttribute("data-length");

const onInputChange = (elem) => {
  if (elem.target.value.length === Number(validNumber)) {
    typeInItput.classList.add("valid");
    typeInItput.classList.remove("invalid");
  } else {
    typeInItput.classList.add("invalid");
    typeInItput.classList.remove("valid");
  }
};

typeInItput.addEventListener("change", onInputChange);
