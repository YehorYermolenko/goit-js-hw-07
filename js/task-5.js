const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

console.log(output.textContent);

const onInput = (e) => {
  e.target.value !== "" ? (output.textContent = e.target.value) : (output.textContent = "незнакомец");
};
input.addEventListener("input", onInput);
