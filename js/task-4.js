const value = document.querySelector("span");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
