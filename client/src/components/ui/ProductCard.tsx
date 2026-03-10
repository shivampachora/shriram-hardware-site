import { Product } from "@shared/schema";
import { Phone, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useI18n();
  const shopPhone = "919999999999";

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Shriram Hardware, I want this product: ${product.name} (Size: ${product.sizes})`);
    window.open(`https://wa.me/${shopPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-border flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square w-full bg-secondary overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">
          {product.name}
        </h3>
        
        {product.sizes && (
          <p className="text-muted-foreground font-medium mb-6">
            {t("sizesAvailable")} <span className="text-foreground">{product.sizes}</span>
          </p>
        )}
        
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-[#25D366]/30 active:scale-95 transition-all"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>{t("whatsappOrder")}</span>
          </button>
          
          <a
            href={`tel:+${shopPhone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 px-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-95 transition-all"
          >
            <Phone className="w-6 h-6 fill-current" />
            <span>{t("callToOrder")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
