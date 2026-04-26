import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[var(--ink)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-10 rounded-full bg-[var(--tomato)] grid place-items-center">
              <span className="font-display text-lg text-white">C</span>
            </div>
            <span className="font-display text-2xl text-white">
              Snack<span className="text-[var(--mustard)]">Cafe</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-white/70">
            Wood-fired pizza, smash burgers and pressed sandwiches — built fast, made honest.
            Pickup, delivery, dine-in.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--tomato)] transition-colors"
                aria-label="social"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--mustard)] mb-4">Visit</h4>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
            <MapPin className="size-4 mt-0.5 shrink-0" />
            128 Market Street<br />Brooklyn, NY 11201
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
            <Phone className="size-4 mt-0.5 shrink-0" />
            (347) 555 — 0192
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--mustard)] mb-4 flex items-center gap-2">
            <Clock className="size-3.5" /> Hours
          </h4>
          <ul className="space-y-1 text-sm text-white/70">
            <li className="flex justify-between"><span>Mon – Thu</span><span>11am – 10pm</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>11am – 12am</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>12pm – 9pm</span></li>
          </ul>
          <Link to="/menu" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--tomato)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--mustard)] hover:text-[var(--ink)] transition-colors">
            Start an order
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Snack Cafe.</p>
          <p>Hand-tossed in Brooklyn.</p>
        </div>
      </div>
    </footer>
  );
}
