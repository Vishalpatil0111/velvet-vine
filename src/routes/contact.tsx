import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowUpRight, Check, Mail } from "lucide-react";
import { GsapReveal } from "@/components/site/GsapReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Order — Crust & Co" },
      { name: "description", content: "Visit Crust & Co in Brooklyn or order pickup/delivery. Open daily, hours, address and phone." },
      { property: "og:title", content: "Visit & Order — Crust & Co" },
      { property: "og:description", content: "Visit us in Brooklyn or order pickup / delivery." },
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
        className="peer w-full bg-transparent border-0 border-b-2 border-black/15 px-0 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-[var(--tomato)] transition-colors"
      />
      <label className="absolute left-0 top-3.5 text-muted-foreground text-base transition-all duration-300 pointer-events-none peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[var(--tomato)] peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[var(--tomato)]">
        {label}{required && <span className="text-[var(--tomato)] ml-0.5">*</span>}
      </label>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [orderType, setOrderType] = useState<"Pickup" | "Delivery" | "Dine-in">("Pickup");

  return (
    <div className="pt-32 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Visit · Order · Reserve</span>
          <h1 className="mt-4 font-display text-6xl md:text-8xl max-w-4xl">
            Let's get you <span className="text-gradient-warm italic">eating</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Pick a service below, send us your details, and we'll confirm in minutes.
          </p>
        </GsapReveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <GsapReveal className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-soft rounded-3xl p-12 text-center"
              >
                <div className="size-16 mx-auto rounded-full bg-[var(--tomato)] grid place-items-center mb-6">
                  <Check className="size-7 text-white" />
                </div>
                <h2 className="font-display text-3xl">Order received</h2>
                <p className="mt-3 text-muted-foreground">
                  We've sent a confirmation to your inbox. See you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="card-soft rounded-3xl p-7 md:p-10 space-y-8"
              >
                {/* Order type */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Service</p>
                  <div className="flex gap-2 flex-wrap">
                    {(["Pickup", "Delivery", "Dine-in"] as const).map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setOrderType(t)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                          orderType === t
                            ? "bg-[var(--ink)] text-white"
                            : "bg-[var(--cream)] text-[var(--ink)] hover:bg-black/5"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                  <FloatingInput label="Full name" required />
                  <FloatingInput label="Email" type="email" required />
                  <FloatingInput label="Phone" type="tel" required />
                  {orderType === "Delivery" ? (
                    <FloatingInput label="Delivery address" required />
                  ) : (
                    <FloatingInput label={orderType === "Dine-in" ? "Party size" : "Pickup time"} type={orderType === "Dine-in" ? "number" : "time"} required />
                  )}
                  {orderType === "Dine-in" && <FloatingInput label="Date" type="date" required />}
                  {orderType === "Dine-in" && <FloatingInput label="Time" type="time" required />}
                </div>

                <div className="relative">
                  <textarea
                    placeholder=" "
                    rows={3}
                    className="peer w-full bg-transparent border-0 border-b-2 border-black/15 px-0 py-3.5 text-foreground placeholder-transparent focus:outline-none focus:border-[var(--tomato)] transition-colors resize-none"
                  />
                  <label className="absolute left-0 top-3.5 text-muted-foreground text-base transition-all duration-300 pointer-events-none peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[var(--tomato)] peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[var(--tomato)]">
                    Notes (allergies, special requests)
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Confirm {orderType.toLowerCase()}
                  <ArrowUpRight className="size-4" />
                </motion.button>
              </form>
            )}
          </GsapReveal>

          {/* Info */}
          <GsapReveal delay={0.15} className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: "Find us", body: "128 Market Street\nBrooklyn, NY 11201" },
              { icon: Clock, title: "Hours", body: "Mon – Thu · 11am – 10pm\nFri – Sat · 11am – 12am\nSunday · 12pm – 9pm" },
              { icon: Phone, title: "Call ahead", body: "(347) 555 — 0192" },
              { icon: Mail, title: "Email", body: "hello@crustandco.cafe" },
            ].map((c) => (
              <div key={c.title} className="card-soft rounded-3xl p-6 flex gap-4">
                <div className="size-11 shrink-0 rounded-full bg-[var(--cream)] grid place-items-center">
                  <c.icon className="size-5 text-[var(--tomato)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--tomato)] font-semibold">{c.title}</p>
                  <p className="mt-2 text-muted-foreground whitespace-pre-line leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl overflow-hidden card-soft">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.998%2C40.694%2C-73.984%2C40.704&layer=mapnik"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  );
}
