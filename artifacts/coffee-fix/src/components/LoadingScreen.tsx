import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f0a07]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full border-4 border-amber-800/30 border-t-amber-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Coffee className="w-8 h-8 text-amber-500" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-serif text-3xl font-semibold tracking-wide text-amber-100">
                Coffee Fix
              </h1>
              <p className="mt-1 text-sm text-amber-700/70 tracking-[0.2em] uppercase">
                Faisalabad
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
