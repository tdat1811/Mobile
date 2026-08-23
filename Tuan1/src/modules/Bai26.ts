class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
class Order {
  products: Product[] = [];
  constructor(products: Product[]) {
    this.products = products;
  }
  totalPrice(): number {
    let sum = 0;
    this.products.forEach((p) => (sum += p.price));
    return sum;
  }
}
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
];

const order = new Order(products);

console.log(order.totalPrice());
