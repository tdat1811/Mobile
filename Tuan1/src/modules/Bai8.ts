class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  displayInfo(): void {
    console.log(`Name: ${this.name}, Price: ${this.price}`);
  }
}

const products: Product[] = [
  new Product("Laptop", 500),
  new Product("Phone", 200),
  new Product("Candy", 2),
];
const filter_products = products.filter((p) => p.price > 100);
filter_products.forEach((p) => p.displayInfo());
