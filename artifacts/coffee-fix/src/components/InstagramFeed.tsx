import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { Heart } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
  "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&q=80",
  "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=400&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            Social
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Follow Our Journey
          </h2>
          <a
            href="https://www.instagram.com/coffeefixpakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-muted-foreground hover:text-amber-500 transition-colors group"
            data-testid="link-instagram-follow"
          >
            <SiInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">@coffeefixpakistan</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((src, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/coffeefixpakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              data-testid={`instagram-post-${i}`}
            >
              <img
                src={src}
                alt={`Coffee Fix Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-white">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <SiInstagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/coffeefixpakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground hover:text-amber-500 hover:border-amber-500/40 transition-all text-sm font-medium"
            data-testid="button-follow-instagram"
          >
            <SiInstagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
