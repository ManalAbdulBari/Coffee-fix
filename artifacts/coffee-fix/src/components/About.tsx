import { motion } from "framer-motion";
import { Star, Users, Calendar, Clock } from "lucide-react";

const stats = [
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: Users, value: "100+", label: "Happy Customers" },
  { icon: Calendar, value: "Since 2020", label: "Established" },
  { icon: Clock, value: "2 AM", label: "We Close At" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Haven for
              <br />
              <span className="italic text-amber-500">Coffee Lovers</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nestled in the heart of Faisalabad, Coffee Fix was born from a singular
                obsession — to bring world-class specialty coffee to Pakistan's textile
                capital. What started as a passion project has grown into the city's most
                beloved café experience.
              </p>
              <p>
                Every cup we pour is a testament to our commitment to quality. We source
                the finest single-origin beans, roasted to perfection, and prepared by
                baristas who treat coffee as an art form. But Coffee Fix is more than
                just coffee — it's a space where conversations flow freely, friendships
                deepen, and evenings stretch into the early hours.
              </p>
              <p>
                With a cozy, atmospheric interior designed for both intimate gatherings
                and late-night social sessions, we've become Faisalabad's go-to destination
                for those who appreciate the finer things in life. Open until 2 AM,
                because the best conversations never end early.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="font-serif text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
                alt="Coffee Fix café interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-xs text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
