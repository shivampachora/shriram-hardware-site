import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="w-full">
      <div className="bg-primary py-20 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6">{t("contact")}</h1>
        <p className="text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
          We are here to help you. Visit our store or contact us directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("callUs")}</h3>
            <p className="text-lg text-muted-foreground mb-6">Call us directly to place an order or inquire about products.</p>
            <a href="tel:+919999999999" className="text-3xl font-black text-primary hover:underline">
              +91 99999 99999
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("address")}</h3>
            <p className="text-lg text-muted-foreground mb-2">
              Main Market Road, Near Station
            </p>
            <p className="text-lg text-muted-foreground font-semibold">
              Pachora, Maharashtra 424201
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("openingHours")}</h3>
            <p className="text-lg text-muted-foreground font-medium mb-2">Monday - Sunday</p>
            <p className="text-2xl font-black text-foreground">8:00 AM - 8:00 PM</p>
          </div>

        </div>

        <div className="mt-16 bg-white rounded-3xl overflow-hidden shadow-2xl border border-border h-[600px] flex">
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
  );
}
