const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const newIngredient = document.querySelector(`#ingredients`);

const newElements = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  return newLi;
});

console.log(newElements);

newIngredient.append(...newElements);
