import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Clock, Phone, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Maison Noir" },
      { name: "description", content: "Reserve a table at Maison Noir in Brooklyn. Quiet evenings, candlelight, and seasonal plates." },
      { property: "og:title", content: "Reserve a Table — Maison Noir" },
      { property: "og:description", content: "Reserve a table at Maison Noir in Brooklyn." },
    ],
  }),
  component: ContactPage,
});

function FloatingInput({
  label,
  type = "text",
  required,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="relative group">
      <input
        {...rest}
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full bg-transparent border-0 border-b border-border/80 px-0 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors"
      />
      <label className="absolute left-0 top-4 text-muted-foreground text-base transition-all duration-300 pointer-events-none peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs">
        {label}{required && <span className="text-gold ml-0.5">*</span>}
      </label>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-36 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Reservations</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            Hold a <span className="italic text-gradient-gold">table</span> for you.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Tell us when you'd like to come by — we'll confirm by email within the hour.
          </p>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-12 text-center"
              >
                <div className="size-16 mx-auto rounded-full bg-gold grid place-items-center mb-6">
                  <Check className="size-7 text-gold-foreground" />
                </div>
                <h2 className="font-display text-3xl">Reservation received</h2>
                <p className="mt-3 text-muted-foreground">
                  We'll send a confirmation to your inbox shortly. See you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                  <FloatingInput label="Full name" required />
                  <FloatingInput label="Email" type="email" required />
                  <FloatingInput label="Phone" type="tel" />
                  <FloatingInput label="Party size" type="number" defaultValue={2} required />
                  <FloatingInput label="Date" type="date" required />
                  <FloatingInput label="Time" type="time" required />
                </div>

                <div className="relative">
                  <textarea
                    placeholder=" "
                    rows={3}
                    className="peer w-full bg-transparent border-0 border-b border-border/80 px-0 py-4 text-foreground placeholder-transparent focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <label className="absolute left-0 top-4 text-muted-foreground text-base transition-all duration-300 pointer-events-none peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs">
                    Notes (allergies, occasion)
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-gold-foreground hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  Confirm reservation
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </form>
            )}
          </Reveal>

          {/* Info */}
          <Reveal delay={0.15} className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: "Find us", body: "42 Lantern Lane\nBrooklyn, NY 11201" },
              { icon: Clock, title: "Hours", body: "Mon–Fri · 7am – 10pm\nSat–Sun · 8am – 11pm" },
              { icon: Phone, title: "Call ahead", body: "(347) 555 — 0142\nhello@maisonnoir.cafe" },
            ].map((c) => (
              <div key={c.title} className="glass-card rounded-3xl p-6 flex gap-4">
                <div className="size-11 shrink-0 rounded-full bg-secondary grid place-items-center">
                  <c.icon className="size-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">{c.title}</p>
                  <p className="mt-2 text-muted-foreground whitespace-pre-line leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
