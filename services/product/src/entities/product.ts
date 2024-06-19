export class Product {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly price: number,
    private readonly stock: number,
    private readonly id?: string
  ) {}
}
