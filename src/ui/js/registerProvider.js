const { remote } = require("electron");
const productForm = document.getElementById("productForm");
const main = remote.require("./main");

const providerName = document.getElementById("name");


productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProvider = {
    nameProvider: providerName.value
    
  };
  main.creatProvider(newProvider);
});
