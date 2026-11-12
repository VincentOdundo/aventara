import React from "react";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const { generateInquiry } = useWhatsApp();

  return (
    <a
      href={generateInquiry()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full flex items-center justify-center whatsapp-float hover:scale-110 transition-transform duration-300 editorial-shadow border-2 border-safari-brown"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-midnight-black" />
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
      className={`inline-flex items-center justify-center gap-3 btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold rounded-full hover:brightness-105 transition-all duration-300 active:scale-95 ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon size={20} className="text-midnight-black" />
      {children || "Book via WhatsApp"}
    </a>
  );
}
