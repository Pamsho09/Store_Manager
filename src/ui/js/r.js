const { remote } = require("electron");
const productForm = document.getElementById("productForm");
const main = remote.require("./main");
const categoriesList = document.getElementById("cat");
const providerList = document.getElementById("pro");
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productCode = document.getElementById("code");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProduct = {
    name: productName.value,
    price: productPrice.value,
    code: productCode.value,
    categories:document.getElementById("provider").value,
    provider:document.getElementById("categories").value
  };
  main.creatProduct(newProduct);
});
function renderCategories(tasks) {
  var ca = "";
  tasks.forEach((t) => {
    ca += `<option value=${t.idCategories}>${t.name}</option>`;
  });
  categoriesList.innerHTML =
    "<label >Category</label><select class=form-control id=categories > " +
    ca +
    "</select>";
  console.log(ca);
}
function renderProvider(tasks) {
  var ca = "";
  tasks.forEach((t) => {
    ca += `<option value=${t.id}>${t.nameProvider}</option>`;
  });
  providerList.innerHTML =
    "<label >Provider</label><select class=form-control id=provider > " +
    ca +
    "</select>";
  console.log(ca);
}
const getCategorie = async () => {
  products = await main.getCategories();
  console.log(products);
  renderCategories(products);
};
const getProvider = async () => {
  
  products = await main.getProvider();
  console.log(products);
  renderProvider(products);
};

async function init() {
  getCategorie();getProvider();
}

init();
