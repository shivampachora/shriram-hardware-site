import { Link } from "wouter";
import { MessageCircle, ChevronDown } from "lucide-react";

const WA_NUMBER = "918329139076";

export function PremiumHero() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Shriram Hardware! I need hardware products. Please help.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&fit=crop&q=85')`
        }}
      />

      {/* Layered Overlays for premium dark effect */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">

          {/* Tag line badge */}
          <div className="inline-flex items-center gap-2 bg-primary/30 backdrop-blur-sm border border-primary/40 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide uppercase">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Trusted by Farmers Since Years
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg" style={{ fontFamily: "var(--font-display)" }}>
            Shriram<br />
            <span className="text-primary">Hardware</span><br />
            Pachora
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-xl">
            Quality Hardware for Farmers and Plumbers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/explore"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/60 active:scale-95"
            >
              Explore Products
            </Link>

            <Link
              href="/thibak"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Apply for Thibak
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="w-7 h-7" />
      </div>
    </div>
  );
}
