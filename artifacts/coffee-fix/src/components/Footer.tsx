import { Coffee } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const quickLinks = ["Home", "Menu", "About", "Gallery", "Reviews", "Reserve"];

const scrollTo = (id: string) => {
  const el = document.querySelector(`#${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0604] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-amber-500/10">
                <Coffee className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-serif text-xl font-bold text-amber-100">Coffee Fix</span>
            </div>
            <p className="text-sm text-amber-900/60 leading-relaxed max-w-xs">
              Where Coffee Meets Comfort. Faisalabad's premium café experience, open daily until 2 AM.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-200/80 tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-amber-900/50 hover:text-amber-400 transition-colors"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-200/80 tracking-wider uppercase mb-4">
              Contact & Social
            </h4>
            <div className="space-y-2 text-sm text-amber-900/50">
              <p>Shop # 28, Green Avenue, W Canal Rd,<br />Raza Town, Faisalabad, 38000</p>
              <a
                href="tel:+923113492349"
                className="block hover:text-amber-400 transition-colors"
                data-testid="footer-phone"
              >
                +92 311 3492349
              </a>
              <a
                href="mailto:info@coffeefix.pk"
                className="block hover:text-amber-400 transition-colors"
                data-testid="footer-email"
              >
                info@coffeefix.pk
              </a>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/coffeefixpakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 hover:bg-amber-500/20 transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-900/40">
            &copy; 2024 Coffee Fix &ndash; Faisalabad. All rights reserved.
          </p>
          <p className="text-xs text-amber-900/40">
            Crafted with love in Faisalabad
          </p>
        </div>
      </div>
    </footer>
  );
}
