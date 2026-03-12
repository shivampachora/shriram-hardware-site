import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";
import { Link } from "wouter";

const CALL_NUMBER = "9403514471";
const WA_NUMBER = "918329139076";
const INSTA_URL = "https://www.instagram.com/shriram_hardware_pachora";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-black text-3xl text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Shriram Hardware
            </h3>
            <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-6">Pachora</p>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Your trusted partner for premium quality hardware — motors, pipes, sprayers, and more — serving farmers and plumbers across Pachora.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href={`tel:+91${CALL_NUMBER}`}
                className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
              <a
                href={INSTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/explore", label: "Explore Products" },
                { href: "/thibak", label: "Apply for Thibak" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Shop Info</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">Hours</p>
                  <p className="text-white/60 text-sm">8:00 AM – 8:00 PM, Daily</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:+91${CALL_NUMBER}`} className="text-white font-semibold text-sm hover:text-primary transition-colors block">{CALL_NUMBER}</a>
                  <a href={`https://wa.me/${WA_NUMBER}`} className="text-white/60 text-sm hover:text-white transition-colors block" target="_blank" rel="noopener noreferrer">8329139076 (WhatsApp)</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">Address</p>
                  <p className="text-white/60 text-sm leading-relaxed">Main Market Road,<br />Pachora, Maharashtra 424201</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps embed */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-white/10 h-52">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.721495913227!2d75.33946059999999!3d20.6698692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1438914b4de97%3A0xc61d6ce67b2d56a3!2sPachora%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Shriram Hardware Pachora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
