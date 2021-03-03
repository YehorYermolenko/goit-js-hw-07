const ulCategories = document.querySelectorAll(".item");
console.log(`В списке ${ulCategories.length} категории.`);

const ulLiHeadings = ulCategories.forEach((el) => {
  console.log(`Категория: ${el.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${el.children[1].children.length}`);
});
