import database from '../db';
import { Product, products } from '../db/schema';
import { IProductRepository } from '../interfaces/IProductRepository';
import { eq } from 'drizzle-orm';

export class ProductRepository implements IProductRepository {
  async create(productData: any): Promise<Product> {
    const product = await database.insert(products).values(productData);
    return product[0];
  }

  async find(limit: number, offset: number): Promise<Product[]> {
    return await database.select().from(products);
  }

  async findById(productId: string): Promise<Product | undefined> {
    return await database.query.products.findFirst({
      where: eq(products.id, productId),
    });
  }

  async delete(productId: string): Promise<void> {
    await database.delete(products).where(eq(products.id, productId));
  }
}
