const ulCategories = document.querySelectorAll(".item");
console.log(`В списке ${ulCategories.length} категории.`);
const ulLiHeadings = ulCategories.forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
