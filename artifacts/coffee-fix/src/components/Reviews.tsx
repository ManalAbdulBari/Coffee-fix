import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ali Hassan", initial: "A", color: "bg-amber-600", date: "Jan 2024", text: "Best café in Faisalabad hands down. The Caramel Macchiato is out of this world. Love the ambiance — perfect for late nights!" },
  { name: "Sarah Khan", initial: "S", color: "bg-rose-700", date: "Feb 2024", text: "Coffee Fix has become my second home. The staff is so warm, the coffee is consistently perfect, and the tiramisu is divine." },
  { name: "Umar Farooq", initial: "U", color: "bg-emerald-700", date: "Feb 2024", text: "Came for the coffee, stayed for the vibes. The cold brew is exceptional. Open till 2 AM — lifesaver for night owls!" },
  { name: "Fatima Malik", initial: "F", color: "bg-purple-700", date: "Mar 2024", text: "Absolutely gorgeous interior. The Hazelnut Latte is my go-to. Great place to work or catch up with friends." },
  { name: "Zain Ahmed", initial: "Z", color: "bg-sky-700", date: "Mar 2024", text: "Tried the signature espresso and it blew me away. Premium quality at reasonable prices. Highly recommend!" },
  { name: "Hira Baig", initial: "H", color: "bg-pink-700", date: "Apr 2024", text: "Absolutely stunning ambiance. The best dessert selection in Faisalabad. Five stars every single time." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            What People Say
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-serif text-2xl font-bold text-foreground ml-1">4.9</span>
            <span className="text-muted-foreground">/5.0 &middot; Based on 100+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-amber-500/30 transition-all hover:shadow-lg hover:shadow-amber-500/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`card-review-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                >
                  {review.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
