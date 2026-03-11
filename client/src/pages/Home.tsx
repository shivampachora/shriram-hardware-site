import { useCategories } from "@/hooks/use-categories";
import { useProducts } from "@/hooks/use-products";
import { PremiumHero } from "@/components/home/PremiumHero";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { PriceGuide } from "@/components/home/PriceGuide";
import { MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";

export default function Home() {
  const { data: categories, isLoading: isLoadingCats } = useCategories();
  const { data: products, isLoading: isLoadingProds } = useProducts();
  const { t } = useI18n();

  const topProducts = products?.slice(0, 6) || [];

  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Category Explorer Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-black text-foreground mb-3">Explore Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our complete range of hardware products, organized by category for easy shopping
            </p>
          </div>
          
          {isLoadingCats ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-72 bg-secondary animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories?.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popular Products Section */}
      {topProducts.length > 0 && (
        <section className="py-28 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl font-black text-foreground mb-3">Popular Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Handpicked selection of our best-selling items
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/products" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-12 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Price Guide */}
      <PriceGuide />

      {/* Shop Information */}
      <section className="py-28 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-black text-foreground mb-3">Visit Us Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Located in the heart of Pachora, ready to serve your hardware needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">Shriram Hardware Pachora</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Your trusted partner for premium quality hardware, motors, pipes, agricultural sprayers, and complete hardware solutions for farmers and plumbers.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Opening Hours</p>
                      <p className="text-muted-foreground">8:00 AM to 8:00 PM, Open Every Day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+919999999999" className="text-primary hover:underline font-medium">+91 9999999999</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Main Market Road, Pachora, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-lg border border-border/50">
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
