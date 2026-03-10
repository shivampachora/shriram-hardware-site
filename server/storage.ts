import { db } from "./db";
import { categories, products, type Category, type Product } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCategories(): Promise<Category[]>;
  getProducts(categoryId?: number): Promise<Product[]>;
  createCategory(category: { name: string, imageUrl: string }): Promise<Category>;
  createProduct(product: { categoryId: number, name: string, sizes: string, imageUrl: string }): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getProducts(categoryId?: number): Promise<Product[]> {
    let query = db.select().from(products);
    if (categoryId !== undefined) {
      return await query.where(eq(products.categoryId, categoryId));
    }
    return await query;
  }

  async createCategory(category: { name: string, imageUrl: string }): Promise<Category> {
    const [inserted] = await db.insert(categories).values(category).returning();
    return inserted;
  }

  async createProduct(product: { categoryId: number, name: string, sizes: string, imageUrl: string }): Promise<Product> {
    const [inserted] = await db.insert(products).values(product).returning();
    return inserted;
  }
}

export const storage = new DatabaseStorage();
