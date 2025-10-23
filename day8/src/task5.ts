type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const product1: Product = {
  id: 1,
  name: "T-shirt",
  price: 800,
  inStock: true,
};
const product2: Product = {
  id: 2,
  name: "Shirt",
  price: 1000,
  inStock: true,
};

function display(product1: Product) {
  console.log(
    `Product ${product1.id}:${product1.name} costs:${product1.price}`
  );
}
display(product1);
