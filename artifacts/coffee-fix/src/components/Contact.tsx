import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            Come Visit
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-0.5">Address</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Shop # 28, Green Avenue, W Canal Rd,<br />
                      Raza Town, Faisalabad, 38000
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-0.5">Phone</div>
                    <a
                      href="tel:+923113492349"
                      className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
                      data-testid="link-phone"
                    >
                      +92 311 3492349
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <SiInstagram className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-0.5">Instagram</div>
                    <a
                      href="https://www.instagram.com/coffeefixpakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
                      data-testid="link-instagram"
                    >
                      @coffeefixpakistan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-0.5">Hours</div>
                    <p className="text-sm text-muted-foreground">Open Daily &middot; Closes at 2:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108857.59703764609!2d73.01673935!3d31.41049945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268800fe27c6f%3A0xb48febe400987f34!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Fix location map"
                data-testid="map-embed"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
