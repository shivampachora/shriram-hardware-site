import { Link } from "wouter";
import { Category } from "@shared/schema";
import { ArrowRight } from "lucide-react";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link 
      href={`/products?categoryId=${category.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary relative">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
