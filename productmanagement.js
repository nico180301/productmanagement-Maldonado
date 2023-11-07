class ProductManagement {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(name, price, description, image, code, stock) {
    if (!name || !price || !description || !image || !code || !stock) {
      console.error("All fields are required");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.error("Product with this code already exists");
      return;
    }

    const newProduct = {
      id: this.nextId++,
      name,
      price,
      description,
      image,
      code,
      stock,
    };
    this.products.push(newProduct);
    console.log(`Product ${name} added successfully`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error("Product not found");
      return;
    }
    return product;
  }
}

const productManager = new ProductManagement();

productManager.addProduct(
  "notebook",
  999.99,
  "Ultimo modelo de notebook",
  "notebook.png",
  "LP100",
  50
);
productManager.addProduct(
  "Celular",
  599.99,
  "Ultimo modelo de celular",
  "celular.png",
  "SP200",
  100
);

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
console.log(productManager.getProductById(3));

module.exports = ProductManagement;
