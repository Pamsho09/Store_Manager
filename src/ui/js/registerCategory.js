const { remote } = require("electron");
const productForm = document.getElementById("productForm");
const main = remote.require("./main");

const categoryName = document.getElementById("name");


productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCategory = {
    name: categoryName.value
    
  };
  main.creatCategory(newCategory);
});
