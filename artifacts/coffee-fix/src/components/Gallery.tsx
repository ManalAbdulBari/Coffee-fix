import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", alt: "Café interior" },
  { src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&q=80", alt: "Coffee bar" },
  { src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=600&q=80", alt: "Latte art" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80", alt: "Cozy seating" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", alt: "Espresso pour" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80", alt: "Café food" },
  { src: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&q=80", alt: "Café ambiance" },
  { src: "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=600&q=80", alt: "Dessert plate" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            Visual Story
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            A Glimpse Inside
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every corner of Coffee Fix tells a story — come see it for yourself.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`gallery-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
