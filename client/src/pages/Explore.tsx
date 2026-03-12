import { useCategories } from "@/hooks/use-categories";
import { useProducts } from "@/hooks/use-products";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { useSearch, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Explore() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const categoryId = searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined;

  const { data: categories, isLoading: isLoadingCats } = useCategories();
  const { data: products, isLoading: isLoadingProds } = useProducts(categoryId);

  const selectedCategory = categories?.find(c => c.id === categoryId);

  if (categoryId && selectedCategory) {
    return (
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back nav */}
        <div className="mb-12">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-semibold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Categories
          </Link>

          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
            {selectedCategory.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse all {selectedCategory.name} products. Order via Call or WhatsApp.
          </p>
        </div>

        {isLoadingProds ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-[480px] bg-secondary animate-pulse rounded-3xl" />
            ))}
          </div>
        ) : products?.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl border border-border shadow-sm">
            <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 text-4xl">📦</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No products yet</h3>
            <p className="text-muted-foreground">Check back soon or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Our Products</p>
        <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Explore Products
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Select a category below to browse all available products with prices and ordering options.
        </p>
      </div>

      {isLoadingCats ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="h-72 bg-secondary animate-pulse rounded-3xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map(category => (
            <CategoryCard key={category.id} category={category} href={`/explore?categoryId=${category.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}
