import { Product } from '../db/schema';

export interface IProductRepository {
  create(input: any): Promise<Product>;
  find(limit: number, offset: number): Promise<Product[]>;
  findById(productId: string): Promise<Product | undefined>;
  delete(productId: string): Promise<void>;
}
