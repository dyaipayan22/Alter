import { Product } from '../db/schema';
import { CreateProductDto } from '../dto/productDto';

export interface IProductRepository {
  create(productData: CreateProductDto): Promise<Product>;
  find(limit: number, offset: number): Promise<Product[]>;
  findById(productId: string): Promise<Product>;
  update(productId: string, productData: any): Promise<Product>;
  delete(productId: string): Promise<void>;
}
