import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "mr";

interface Translations {
  [key: string]: {
    en: string;
    mr: string;
  };
}

const translations: Translations = {
  home: { en: "Home", mr: "मुख्यपृष्ठ" },
  products: { en: "Products", mr: "उत्पादने" },
  categories: { en: "Categories", mr: "श्रेण्या" },
  contact: { en: "Contact", mr: "संपर्क" },
  viewProducts: { en: "View Products", mr: "उत्पादने पहा" },
  callToOrder: { en: "Call to Order", mr: "ऑर्डर करण्यासाठी कॉल करा" },
  whatsappOrder: { en: "WhatsApp Order", mr: "व्हॉट्सॲपवर ऑर्डर करा" },
  sizesAvailable: { en: "Available Sizes:", mr: "उपलब्ध आकार:" },
  shopInfo: { en: "Shop Information", mr: "दुकानाची माहिती" },
  address: { en: "Address", mr: "पत्ता" },
  openingHours: { en: "Opening Hours", mr: "उघडण्याची वेळ" },
  callUs: { en: "Call Us", mr: "आम्हाला कॉल करा" },
  allProducts: { en: "All Products", mr: "सर्व उत्पादने" },
  noProducts: { en: "No products found.", mr: "कोणतीही उत्पादने आढळली नाहीत." },
};

interface I18nContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: keyof typeof translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "mr" : "en"));
  };

  const t = (key: keyof typeof translations) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
