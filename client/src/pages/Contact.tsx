import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";

const CALL_NUMBER = "9403514471";
const WA_NUMBER = "918329139076";
const INSTA_URL = "https://www.instagram.com/shriram_hardware_pachora";

export default function Contact() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Shriram Hardware! I have a query.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="py-20 bg-primary/5 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            We're available every day from 8 AM to 8 PM. Reach us via call, WhatsApp, or visit our shop.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <div className="bg-secondary/40 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>Call Us</h3>
              <a href={`tel:+91${CALL_NUMBER}`} className="text-2xl font-black text-primary hover:underline block mb-1">{CALL_NUMBER}</a>
              <p className="text-muted-foreground text-sm">8:00 AM – 8:00 PM, Daily</p>
            </div>

            <div className="bg-secondary/40 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>WhatsApp</h3>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-[#25D366] hover:underline block mb-1">8329139076</a>
              <p className="text-muted-foreground text-sm">Quick order &amp; inquiry</p>
            </div>

            <div className="bg-secondary/40 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>Instagram</h3>
              <a href={INSTA_URL} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-pink-500 hover:underline block mb-1">@shriram_hardware_pachora</a>
              <p className="text-muted-foreground text-sm">Follow for updates</p>
            </div>

          </div>

          {/* Address + Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            <div className="bg-white border border-border/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Our Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shriram Hardware Pachora<br />
                    Main Market Road, Near Station<br />
                    Pachora, Maharashtra 424201
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border/50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Opening Hours</h3>
                  <p className="text-muted-foreground">Monday – Sunday</p>
                  <p className="text-2xl font-black text-foreground mt-1">8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 h-[480px]">
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
      </section>

      {/* Quick Action Banner */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-foreground mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Get in Touch Right Now
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call: {CALL_NUMBER}
            </a>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
