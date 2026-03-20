import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { WhatsAppFloat } from "../ui/WhatsAppCTA";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
