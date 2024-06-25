import database from '../db';
import { Product, products } from '../db/schema';
import { IProductRepository } from '../interfaces/IProductRepository';
import { eq } from 'drizzle-orm';
import { NotFoundError } from '../utils/error/errors';

export class ProductRepository implements IProductRepository {
  async create(productData: any) {
    const product = await database
      .insert(products)
      .values(productData)
      .returning();
    return product[0];
  }

  async find(limit: number, offset: number) {
    return await database.select().from(products);
  }

  async findById(productId: string) {
    const product = await database.query.products.findFirst({
      where: eq(products.id, productId),
    });
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    return product;
  }

  async update(productId: string, productData: any) {
    const updatedProduct = await database
      .update(products)
      .set({})
      .where(eq(products.id, productId))
      .returning();
    return updatedProduct[0];
  }

  async delete(productId: string) {
    await database.delete(products).where(eq(products.id, productId));
  }
}
