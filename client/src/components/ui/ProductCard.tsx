import { Product } from "@shared/schema";
import { Phone, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useI18n();
  const shopPhone = "918329139076";
  const callPhone = "9403514471";

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Shriram Hardware, I want this product: ${product.name} (Size: ${product.sizes})`);
    window.open(`https://wa.me/${shopPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-border/50 flex flex-col transition-all duration-500 ease-out hover:-translate-y-2">
      <div className="aspect-square w-full bg-secondary overflow-hidden rounded-3xl m-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        {product.sizes && (
          <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">
            <span className="font-semibold text-foreground">{t("sizesAvailable")}</span><br />{product.sizes}
          </p>
        )}
        
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-2xl font-bold text-base shadow-lg shadow-[#25D366]/20 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t("whatsappOrder")}</span>
          </button>
          
          <a
            href={`tel:+91${callPhone}`}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-2xl font-bold text-base shadow-lg shadow-primary/20 active:scale-95 transition-all duration-300"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>{t("callToOrder")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
