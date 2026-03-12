import { Link } from "wouter";
import { Category } from "@shared/schema";
import { ArrowRight } from "lucide-react";

export function CategoryCard({ category, href }: { category: Category; href?: string }) {
  return (
    <Link 
      href={href ?? `/explore?categoryId=${category.id}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-500 ease-out hover:-translate-y-1"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary relative">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {category.name}
        </h3>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 ml-3">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
