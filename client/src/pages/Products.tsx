import { useProducts } from "@/hooks/use-products";
import { useCategories } from "@/hooks/use-categories";
import { ProductCard } from "@/components/ui/ProductCard";
import { useSearch } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Products() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const categoryId = searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined;

  const { data: products, isLoading: isLoadingProducts } = useProducts(categoryId);
  const { data: categories } = useCategories();
  const { t } = useI18n();

  const selectedCategory = categories?.find(c => c.id === categoryId);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-foreground mb-4">
          {selectedCategory ? selectedCategory.name : t("allProducts")}
        </h1>
        <p className="text-xl text-muted-foreground">
          Find exactly what you need. Easy to order via Call or WhatsApp.
        </p>
      </div>
      
      {isLoadingProducts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-[500px] bg-white border border-border animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : products?.length === 0 ? (
        <div className="text-center py-32 bg-white rounded-3xl border border-border shadow-sm">
          <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">📦</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">{t("noProducts")}</h3>
          <p className="text-xl text-muted-foreground">Check back later or try another category.</p>
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
