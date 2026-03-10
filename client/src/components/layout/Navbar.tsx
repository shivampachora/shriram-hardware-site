import { Link, useLocation } from "wouter";
import { Phone, MapPin, Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useI18n();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/categories", label: t("categories") },
    { href: "/products", label: t("products") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur shadow-sm border-b border-border">
      {/* Top Bar for quick actions */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 99999 99999</span>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Pachora, Maharashtra</span>
            </a>
          </div>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-display font-black text-2xl text-primary leading-tight">
              Shriram Hardware
            </span>
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Pachora
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-bold text-lg px-2 py-1 border-b-4 transition-colors hover:text-primary ${
                  location === link.href ? "border-primary text-primary" : "border-transparent text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-border p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`p-4 rounded-xl font-bold text-xl ${
                location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
