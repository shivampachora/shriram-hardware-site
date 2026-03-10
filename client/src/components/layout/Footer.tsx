import { MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="font-display font-black text-2xl text-primary-foreground mb-4">
              Shriram Hardware Pachora
            </h3>
            <p className="text-gray-400 text-lg">
              Your trusted partner for all agricultural and plumbing needs. Quality products, best prices.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">{t("shopInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <p className="text-gray-300 text-lg">
                  Main Market Road, Near Station,<br />
                  Pachora, Maharashtra 424201
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <p className="text-gray-300 text-lg">Mon - Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">{t("callUs")}</h4>
            <a 
              href="tel:+919999999999" 
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white px-6 py-4 rounded-xl font-bold text-xl transition-colors"
            >
              <Phone className="w-6 h-6 fill-current" />
              +91 99999 99999
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shriram Hardware Pachora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
