import { MessageCircle } from "lucide-react";

const WA_NUMBER = "918329088881";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />

      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-foreground px-4 py-2 rounded-xl font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-sm">
        Chat with us!
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rotate-45"></div>
      </div>
    </a>
  );
}
