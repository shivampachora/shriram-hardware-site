import { Link } from "wouter";
import { MessageCircle } from "lucide-react";

export function PremiumHero() {
  const shopPhone = "919999999999";

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I'm interested in your hardware products and services.");
    window.open(`https://wa.me/${shopPhone}?text=${text}`, "_blank");
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop&q=80')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Shop Name */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            Shriram Hardware
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 font-light mb-10 drop-shadow-md">
            Quality Hardware for Farmers and Plumbers
          </p>
          
          {/* Subtext */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto drop-shadow-sm">
            Your trusted partner for premium motors, pipes, agricultural sprayers, and all hardware needs
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              href="/products"
              className="bg-white hover:bg-white/95 text-primary font-bold px-10 py-4 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:shadow-xl active:scale-95"
            >
              View Products
            </Link>
            
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-2xl shadow-[#25D366]/40 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              WhatsApp Order
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white/60">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
