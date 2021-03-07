const fontInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const inputChange = (elem) => {
  spanText.style.fontSize = `${elem.target.value}px`;
};

fontInput.addEventListener("input", inputChange);
