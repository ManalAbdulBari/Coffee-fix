import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0a07]/90" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-medium text-amber-200 tracking-wide">
            4.9/5 &middot; 100+ Reviews &middot; Open Until 2 AM
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where Coffee
          <br />
          <span className="italic text-amber-400">Meets Comfort</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Experience premium coffee, cozy vibes, and unforgettable moments at Coffee Fix.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={() => scrollTo("#menu")}
            className="px-8 py-4 rounded-xl bg-amber-500 text-amber-950 font-semibold text-base hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            data-testid="button-view-menu"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollTo("#reserve")}
            className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
            data-testid="button-reserve-table"
          >
            Reserve Table
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
