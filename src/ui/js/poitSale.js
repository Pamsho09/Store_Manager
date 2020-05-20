const { remote } = require("electron");
const total=document.getElementById("price");
const main = remote.require("./main");
const tiketProduct = document.getElementById("tiket");

const codeProduct = document.getElementById("productCode");
 productForm.addEventListener("submit", (e) => {
    e.preventDefault();
        init();
  });

  /*const getProduct = async () => {
    products = await main.getProducts();
    console.log(products);
   
  };*/
 
  const getProduct = async()=>{
try {
  products = await main.getProducts(codeProduct.value);
    console.log(products);
   renderProducts(products)
} catch (error) {
  console.log(error)
}
    
  }
 var price =0
  function renderProducts(tasks) {
   
    tasks.forEach((t) => {
      tiketProduct.innerHTML += ` <div class="row ">
      <div class="col-md-8">
          <p>${t.name}</p>
      </div>


      <div class="col-md-2" id="quantity">
          <p>1</p>
      </div>
      <div class="col-md-2">
          <p>${t.price}</p>
      </div>




  </div>`;
  price+=t.price;
    });
     total.innerText=price;
    console.log(price);
    return price ;
  }
  async function init() {
    getProduct();
  }