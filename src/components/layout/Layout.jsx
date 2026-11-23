import Navbar from "./Navbar";
import Footer from "./Footer";
import { WhatsAppFloat } from "../ui/WhatsAppCTA";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-sand-cream text-midnight-black font-body">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
