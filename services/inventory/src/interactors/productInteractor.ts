import { IProductInteractor } from '../interfaces/IProductInteractor';
import { IProductRepository } from '../interfaces/IProductRepository';

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async createProduct(productData: any) {
    const product = await this.repository.create(productData);
    return product;
  }
  async updateProduct(productId: string, productData: any) {
    const updatedProduct = await this.repository.update(productId, productData);
    return updatedProduct;
  }

  async getProductById(productId: string) {
    const product = await this.repository.findById(productId);
    return product;
  }

  async getProducts(limit: number, offset: number) {
    const products = await this.repository.find(limit, offset);
    return products;
  }

  async deleteProduct(productId: string) {
    await this.repository.delete(productId);
  }
}
