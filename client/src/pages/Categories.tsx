import { useCategories } from "@/hooks/use-categories";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { useI18n } from "@/lib/i18n";

export default function Categories() {
  const { data: categories, isLoading } = useCategories();
  const { t } = useI18n();

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl font-black text-foreground mb-4">{t("categories")}</h1>
      <p className="text-xl text-muted-foreground mb-12">Browse our wide range of hardware products by category.</p>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="h-[250px] bg-secondary animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : categories?.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-border">
          <h3 className="text-2xl font-bold text-muted-foreground">No categories found.</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories?.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
