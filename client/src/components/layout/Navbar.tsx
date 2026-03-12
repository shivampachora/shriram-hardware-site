import { Link, useLocation } from "wouter";
import { Phone, MessageCircle, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

const CALL_NUMBER = "9403514471";
const WA_NUMBER = "918329088881";
const INSTA_URL = "https://www.instagram.com/shriram_hardware_pachora";

export function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore Products" },
    { href: "/thibak", label: "Apply for Thibak" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" onClick={() => setIsMenuOpen(false)}>
            <span className="font-black text-xl md:text-2xl text-primary tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Shriram Hardware
            </span>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Pachora
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Icons + Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Call */}
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hidden md:flex"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{CALL_NUMBER}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hidden md:flex"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href={INSTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white hover:opacity-90 transition-all hidden md:flex"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Mobile call icon */}
            <a
              href={`tel:+91${CALL_NUMBER}`}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white md:hidden"
              aria-label="Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3.5 rounded-xl font-semibold text-base transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile action buttons */}
            <div className="flex gap-3 mt-3 px-2">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
              <a
                href={INSTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-3 rounded-xl font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
