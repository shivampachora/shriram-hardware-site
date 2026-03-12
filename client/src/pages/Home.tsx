import { Link } from "wouter";
import { PremiumHero } from "@/components/home/PremiumHero";
import { PriceGuide } from "@/components/home/PriceGuide";
import { Phone, MessageCircle, Award, Tag, Users } from "lucide-react";

const CALL_NUMBER = "9403514471";
const WA_NUMBER = "918329139076";

const FEATURE_CARDS = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Quality Products",
    desc: "We stock only ISI-certified and trusted brand hardware — motors, pipes, valves, and more."
  },
  {
    icon: <Tag className="w-8 h-8 text-primary" />,
    title: "Best Prices",
    desc: "Fair pricing on every product. Bulk orders and farmer-friendly rates available on request."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Trusted by Farmers",
    desc: "Serving hundreds of farmers and plumbers across Pachora and nearby villages for years."
  }
];

const AESTHETIC_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=70",
    label: "Motors & Pumps"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=70",
    label: "PVC Pipes"
  },
  {
    src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&auto=format&fit=crop&q=70",
    label: "Agriculture Sprayers"
  },
  {
    src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&auto=format&fit=crop&q=70",
    label: "Water Tanks"
  }
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <PremiumHero />

      {/* ── Category Entry ── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Our Products</p>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Everything You<br className="hidden md:block" /> Need, In One Place
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From motors and pipes to sprayers and water tanks — we carry a full range of quality hardware for every need.
            </p>
          </div>

          {/* Aesthetic image preview grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {AESTHETIC_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative group aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-bold drop-shadow-sm">{img.label}</p>
              </div>
            ))}
          </div>

          {/* Single CTA */}
          <div className="text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-12 py-5 rounded-2xl text-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50 active:scale-95"
            >
              Explore Hardware Categories
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURE_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl border border-border/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Price Guide ── */}
      <PriceGuide />

      {/* ── Quick Actions ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed">
            Call us directly or send a WhatsApp message. We're available every day from 8 AM to 8 PM.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-2xl text-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-6 h-6 fill-current" />
              Call Shop
            </a>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-10 py-5 rounded-2xl text-xl shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              WhatsApp Order
            </a>
          </div>

          <p className="mt-10 text-muted-foreground font-medium">
            Call: <a href={`tel:+91${CALL_NUMBER}`} className="text-primary font-bold hover:underline">{CALL_NUMBER}</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            WhatsApp: <span className="text-primary font-bold">8329139076</span>
          </p>
        </div>
      </section>

    </div>
  );
}
