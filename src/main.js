const { BrowserWindow, Notification, Menu } = require("electron");
const { getConnection } = require("./database");

let window;
async function creatProduct(product) {
  try {
    const conn = await getConnection();
    product.price = parseFloat(product.price);
    product.code = parseInt(product.code);
    product.provider = parseInt(product.provider);
    product.categories = parseInt(product.categories);
var name=product.name;
    const result = await conn.query("INSERT INTO product SET?", product);
    console.log(result);
    new Notification({
      title: "Product " +name+"",
      body: "New product saved successfully",
    }).show();
  } catch (error) {
    console.log(error);
  }
}
async function creatProvider(provider) {
  try {
    const conn = await getConnection();

    const result = await conn.query("INSERT INTO provedor SET?", provider);
    console.log(result);
    new Notification({
      title: "Provider Add",
      body: "New product saved successfully",
    }).show();
  } catch (error) {
    console.log(error);
  }
}
async function creatCategory(categories) {
  try {
    const conn = await getConnection();

    const result = await conn.query("INSERT INTO categories SET?", categories);
    console.log(result);
    new Notification({
      title: "Category Add",
      body: "New product saved successfully",
    }).show();
  } catch (error) {
    console.log(error);
  }
}
const getCategories = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM categories");
  return results;
};



const getProducts= async code => {
  var cod = code
 try {
  const conn = await getConnection();
  const results = await conn.query( "SELECT * FROM product WHERE code ="+cod);
  return results;
 } catch (error) {
   console.log(error)
 }
  
}

const getProvider = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM provedor");
  return results;
};
function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("src/ui/index.html");
} // Menu.setApplicationMenu(false)

module.exports = {
  createWindow,
  creatProduct,
  creatProvider,
  creatCategory,
  getCategories,
  getProvider,
 getProducts
};
