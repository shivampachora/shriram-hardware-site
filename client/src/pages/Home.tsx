import { useCategories } from "@/hooks/use-categories";
import { useProducts } from "@/hooks/use-products";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";

// Fallback data for empty states
const FALLBACK_CATEGORIES = [
  { id: 1, name: "Motors & Pumps", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" },
  { id: 2, name: "PVC Pipes", imageUrl: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=800&auto=format&fit=crop&q=60" },
  { id: 3, name: "Sprayers", imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=60" },
];

export default function Home() {
  const { data: categories, isLoading: isLoadingCats } = useCategories();
  const { data: products, isLoading: isLoadingProds } = useProducts();
  const { t } = useI18n();

  const displayCategories = categories?.length ? categories : FALLBACK_CATEGORIES;
  const topProducts = products?.slice(0, 3) || [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 py-6 md:p-8 max-w-[1400px] mx-auto">
        <HeroCarousel categories={displayCategories} />
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black text-foreground">{t("categories")}</h2>
            <Link href="/categories" className="text-primary font-bold hover:underline hidden sm:block text-lg">
              View All
            </Link>
          </div>
          
          {isLoadingCats ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 bg-secondary animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayCategories.slice(0, 8).map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/categories" className="inline-block bg-secondary text-foreground font-bold px-8 py-4 rounded-xl w-full">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {topProducts.length > 0 && (
        <section className="py-16 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-4xl font-black text-foreground">Featured Products</h2>
              <Link href="/products" className="text-primary font-bold hover:underline hidden sm:block text-lg">
                {t("allProducts")}
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shop Info Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-6">Visit Our Shop Today</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                We provide the best quality hardware, motors, and agriculture supplies directly to farmers and plumbers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-lg font-medium bg-black/20 p-4 rounded-xl">
                  <Clock className="w-8 h-8 shrink-0" />
                  <span>Open Everyday: 8:00 AM to 8:00 PM</span>
                </div>
                <div className="flex items-center gap-4 text-lg font-medium bg-black/20 p-4 rounded-xl">
                  <MapPin className="w-8 h-8 shrink-0" />
                  <span>Main Market Road, Pachora</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-inner border-4 border-white/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.721495913227!2d75.33946059999999!3d20.6698692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1438914b4de97%3A0xc61d6ce67b2d56a3!2sPachora%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
