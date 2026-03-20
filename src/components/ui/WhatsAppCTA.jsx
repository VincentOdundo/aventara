import React from "react";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import { MessageCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const { generateInquiry } = useWhatsApp();

  return (
    <a
      href={generateInquiry()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center whatsapp-float hover:scale-110 transition-transform duration-300 editorial-shadow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-white" />
    </a>
  );
}

export function WhatsAppBookButton({
  safari,
  season,
  price,
  guests = 1,
  className = "",
  children,
  size = "lg",
}) {
  const { generateLink } = useWhatsApp();
  const link = generateLink({
    packageName: safari.title,
    days: safari.days,
    season,
    price,
    guests,
  });

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20BD5C] transition-all duration-300 active:scale-95 ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon size={20} className="text-white" />
      {children || "Book via WhatsApp"}
    </a>
  );
}
