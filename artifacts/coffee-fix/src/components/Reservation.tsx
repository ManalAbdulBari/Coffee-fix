import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, CheckCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const timeSlots = [
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
  "10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM",
];

export default function Reservation() {
  const [confirmed, setConfirmed] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setConfirmed(data);
    reset();
  };

  return (
    <section id="reserve" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Reserve · Order · Visit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="p-8 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Reserve a Table</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                  data-testid="input-name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                  data-testid="input-phone"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("date")}
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    data-testid="input-date"
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
                <div>
                  <select
                    {...register("time")}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    data-testid="select-time"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                </div>
              </div>
              <div>
                <select
                  {...register("guests")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                  data-testid="select-guests"
                >
                  <option value="">Number of Guests</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} Guest{i > 0 ? "s" : ""}</option>
                  ))}
                </select>
                {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
              </div>
              <div>
                <textarea
                  {...register("notes")}
                  placeholder="Special requests (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm resize-none"
                  data-testid="input-notes"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20"
                data-testid="button-reserve"
              >
                Reserve Table
              </button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Order Now</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/923113492349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-green-500/20"
                  data-testid="link-whatsapp-order"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <a
                  href="tel:+923113492349"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-amber-500/40 text-amber-500 font-semibold hover:bg-amber-500/10 transition-all"
                  data-testid="link-call-order"
                >
                  Call to Order: +92 311 3492349
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Shop # 28, Green Avenue, W Canal Rd, Raza Town, Faisalabad, 38000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Open Daily &middot; Closes at 2:00 AM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {confirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            className="relative max-w-md w-full p-8 rounded-2xl bg-card border border-border shadow-2xl text-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => setConfirmed(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Reservation Confirmed!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you, <strong className="text-foreground">{confirmed.name}</strong>! Your table has been
              reserved for <strong className="text-foreground">{confirmed.date}</strong> at{" "}
              <strong className="text-foreground">{confirmed.time}</strong> for{" "}
              <strong className="text-foreground">{confirmed.guests} guest{Number(confirmed.guests) > 1 ? "s" : ""}</strong>.
              We'll confirm via WhatsApp shortly.
            </p>
            <button
              onClick={() => setConfirmed(null)}
              className="mt-6 px-6 py-3 rounded-xl bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 transition-colors"
              data-testid="button-confirm-close"
            >
              See You There!
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
