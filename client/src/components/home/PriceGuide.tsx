import { useI18n } from "@/lib/i18n";

const PRICE_GUIDES = [
  {
    category: "PVC Pipes (ISI Standard)",
    items: [
      { size: "0.5 inch (15mm)", priceRange: "₹80 - ₹120" },
      { size: "1 inch (25mm)", priceRange: "₹150 - ₹220" },
      { size: "1.5 inch (40mm)", priceRange: "₹280 - ₹380" },
      { size: "2 inch (50mm)", priceRange: "₹420 - ₹580" },
      { size: "3 inch (75mm)", priceRange: "₹650 - ₹950" },
    ]
  },
  {
    category: "Water Tanks",
    items: [
      { size: "100 Liter (Small)", priceRange: "₹800 - ₹1,200" },
      { size: "500 Liter (Medium)", priceRange: "₹2,500 - ₹4,000" },
      { size: "1000 Liter (Large)", priceRange: "₹4,500 - ₹7,000" },
      { size: "2000 Liter (Extra Large)", priceRange: "₹8,000 - ₹12,000" },
    ]
  },
  {
    category: "Agriculture Sprayers",
    items: [
      { size: "5 Liter Manual", priceRange: "₹400 - ₹700" },
      { size: "10 Liter Knapsack", priceRange: "₹800 - ₹1,200" },
      { size: "15 Liter High Volume", priceRange: "₹1,200 - ₹1,800" },
      { size: "20 Liter Power Sprayer", priceRange: "₹4,000 - ₹7,000" },
    ]
  },
];

export function PriceGuide() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Price Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Approximate price ranges for common hardware items to help you plan your purchases. Prices may vary based on brand, quality, and current market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICE_GUIDES.map((guide, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl shadow-sm border border-border/50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-6 pb-4 border-b border-border/50">
                {guide.category}
              </h3>
              
              <div className="space-y-4">
                {guide.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {item.size}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary">
                        {item.priceRange}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-3xl p-8">
          <p className="text-center text-foreground text-lg">
            <span className="font-bold text-primary">Note:</span> These are reference prices only. For accurate pricing on specific products, please call or message us via WhatsApp. We also offer bulk discounts for large orders.
          </p>
        </div>
      </div>
    </section>
  );
}
