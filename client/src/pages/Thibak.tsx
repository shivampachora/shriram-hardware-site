import { MessageCircle, Phone, Droplets, CheckCircle } from "lucide-react";

const CALL_NUMBER = "9403514471";
const WA_NUMBER = "918329088881";

const BENEFITS = [
  "Water saving up to 50–70%",
  "Better crop yield and quality",
  "Reduced labour and manual watering",
  "Subsidies available under government schemes",
  "Professional installation support",
];

export default function Thibak() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Shriram Hardware! I want to apply for Thibak (Drip Irrigation). Please guide me.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="py-20 bg-primary/5 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Droplets className="w-10 h-10 text-primary" />
          </div>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Drip Irrigation</p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Apply for<br />
            <span className="text-primary">Thibak</span> Yojana
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thibak (Drip Irrigation) helps farmers save water and grow better crops. We help you apply for government-subsidized drip irrigation systems.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-foreground mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Benefits of Drip Irrigation
              </h2>
              <div className="space-y-4">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/40 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                How to Apply?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                It's simple. Contact us via WhatsApp or call us. Our team will guide you through the complete process — from documentation to installation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Government schemes like <strong className="text-foreground">PM Krishi Sinchayee Yojana</strong> provide up to <strong className="text-primary">50–90% subsidy</strong> for eligible farmers.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Apply via WhatsApp
                </button>

                <a
                  href={`tel:+91${CALL_NUMBER}`}
                  className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg"
                >
                  <Phone className="w-6 h-6 fill-current" />
                  Call: {CALL_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Start Saving Water Today
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Contact Shriram Hardware Pachora for complete guidance on drip irrigation.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/95 font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 active:scale-95 shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 text-primary" />
            Chat on WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
