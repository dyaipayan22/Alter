import { Product } from '../db/schema';
import { CreateProductDto } from '../dto/productDto';

export interface IProductInteractor {
  createProduct(productData: CreateProductDto): Promise<Product>;
  updateProduct(productId: string, data: any): Promise<Product>;
  getProductById(productId: string): Promise<Product>;
  getProducts(limit: number, offset: number): Promise<Product[]>;
  deleteProduct(productId: string): Promise<void>;
}
