import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-full bg-gradient-warm grid place-items-center">
              <span className="font-display text-lg text-gold-foreground">M</span>
            </div>
            <span className="font-display text-2xl">
              Maison <span className="text-gold">Noir</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-muted-foreground leading-relaxed">
            A sanctuary of slow rituals — single-origin coffee, seasonal plates, and quiet hours
            tucked between the city's noise.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 grid place-items-center rounded-full glass-card hover:text-gold transition-colors"
                aria-label="social"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            42 Lantern Lane<br />
            Brooklyn, NY 11201
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Hours</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Mon–Fri · 7am – 10pm</li>
            <li>Sat–Sun · 8am – 11pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Maison Noir. Crafted with intention.</p>
          <p>Designed for the quiet hours.</p>
        </div>
      </div>
    </footer>
  );
}
