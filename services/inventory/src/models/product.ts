export class Product {
  private name: string;
  private description: string;
  private price: number;
  private stock: number;
  private readonly id?: string;

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.id = id;
  }

  getProductId() {
    return this.id;
  }

  getProductName() {
    return this.name;
  }

  getProductDescription() {
    return this.description;
  }

  getProductPrice() {
    return this.price;
  }

  getProductStock() {
    return this.stock;
  }

  setProductName(name: string) {
    this.name = name;
  }

  setProductDescription(description: string) {
    this.description = description;
  }

  setProductPrice(price: number) {
    this.price = price;
  }

  addProductsToStock(stock: number) {
    this.stock += stock;
  }
}
