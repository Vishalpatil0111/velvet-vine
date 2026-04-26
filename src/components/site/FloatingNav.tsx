import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { gsap } from "gsap";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Visit" },
] as const;

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!mobileRef.current) return;
    if (open) {
      gsap.fromTo(
        mobileRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    }
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "w-[min(94%,1000px)]" : "w-[min(96%,1200px)]"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-white/40 backdrop-blur-md border border-black/5"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-9 rounded-full bg-[var(--ink)] grid place-items-center">
              <span className="font-display text-base text-white">C</span>
            </div>
            <span className="font-display text-lg tracking-tight">
              Crust<span className="text-[var(--tomato)]">&Co</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm transition-colors ${
                    active ? "text-[var(--ink)] font-semibold" : "text-muted-foreground hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 size-1.5 rounded-full bg-[var(--tomato)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link to="/menu" className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--tomato)] transition-colors">
            <ShoppingBag className="size-4" />
            Order Now
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center size-10 rounded-full bg-[var(--ink)] text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          ref={mobileRef}
          className="fixed inset-x-4 top-24 z-50 md:hidden card-soft rounded-3xl p-6"
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-[var(--cream)] transition-colors font-display text-2xl"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-[var(--tomato)] px-5 py-3.5 text-center font-semibold text-white"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
