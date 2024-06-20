import { Product } from '../db/schema';

export interface IProductInteractor {
  createProduct(productData: any): Promise<Product>;
  updateProduct(): Promise<{}>;
  getProductById(productId: string): Promise<Product | undefined>;
  getProducts(limit: number, offset: number): Promise<Product[]>;
  deleteProduct(productId: string): Promise<void>;
}
