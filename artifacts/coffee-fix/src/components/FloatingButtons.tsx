import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            href="https://wa.me/923113492349"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-900/30 hover:scale-110 transition-transform"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            data-testid="button-floating-whatsapp"
            aria-label="Order via WhatsApp"
            title="Order Now via WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </motion.a>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-card border border-border text-muted-foreground hover:text-amber-500 hover:border-amber-500/40 flex items-center justify-center shadow-lg hover:scale-110 transition-all"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            data-testid="button-scroll-top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
