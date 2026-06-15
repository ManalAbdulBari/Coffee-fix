import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reserve" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 shadow-lg shadow-black/20 border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
            data-testid="nav-logo"
          >
            <div className="p-1.5 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
              <Coffee className="w-5 h-5 text-amber-500" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Coffee Fix
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-amber-500 transition-colors rounded-lg hover:bg-amber-500/5"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              data-testid="button-theme-toggle"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => handleNav("#reserve")}
              className="hidden md:flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-amber-500 text-amber-950 hover:bg-amber-400 transition-colors"
              data-testid="button-order-now"
            >
              Order Now
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="button-hamburger"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-3 py-3 text-sm font-medium text-muted-foreground hover:text-amber-500 hover:bg-amber-500/5 rounded-lg transition-colors"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#reserve")}
                className="w-full mt-2 px-4 py-3 text-sm font-semibold rounded-lg bg-amber-500 text-amber-950 hover:bg-amber-400 transition-colors"
                data-testid="button-mobile-order"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
