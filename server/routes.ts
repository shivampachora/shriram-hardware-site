import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.categories.list.path, async (req, res) => {
    try {
      const allCategories = await storage.getCategories();
      res.status(200).json(allCategories);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.products.list.path, async (req, res) => {
    try {
      const input = api.products.list.input?.parse(req.query) || {};
      const allProducts = await storage.getProducts(input.categoryId);
      res.status(200).json(allProducts);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid query parameters" });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed database if empty
  seedDatabase().catch(console.error);

  return httpServer;
}

async function seedDatabase() {
  const existingCategories = await storage.getCategories();
  if (existingCategories.length === 0) {
    const cats = [
      { name: "Motors", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Motors" },
      { name: "Starters", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Starters" },
      { name: "PVC Pipes", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=PVC+Pipes" },
      { name: "Elbows", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Elbows" },
      { name: "Couplings", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Couplings" },
      { name: "Valves", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Valves" },
      { name: "Agriculture Sprayers", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Agriculture+Sprayers" },
      { name: "Water Tanks", imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Water+Tanks" }
    ];

    for (const cat of cats) {
      const createdCat = await storage.createCategory(cat);
      
      // Add a couple of products per category
      await storage.createProduct({
        categoryId: createdCat.id,
        name: `Premium ${cat.name} 1`,
        sizes: "Small, Medium, Large",
        imageUrl: `https://placehold.co/400x400/f8fafc/0f172a?text=Premium+${cat.name}+1`
      });
      
      await storage.createProduct({
        categoryId: createdCat.id,
        name: `Standard ${cat.name} 2`,
        sizes: "Medium, Large",
        imageUrl: `https://placehold.co/400x400/f8fafc/0f172a?text=Standard+${cat.name}+2`
      });
    }
    console.log("Database seeded with categories and products.");
  }
}
