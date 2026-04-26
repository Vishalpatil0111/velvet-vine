import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Star, Clock, Truck, Flame, MapPin, ShoppingBag, Phone } from "lucide-react";
import { GsapReveal } from "@/components/site/GsapReveal";
import heroImg from "@/assets/food-hero.jpg";
import pizzaImg from "@/assets/food-pizza.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import sandwichImg from "@/assets/food-sandwich.jpg";
import friesImg from "@/assets/food-fries.jpg";
import drinkImg from "@/assets/food-drink.jpg";
import interiorImg from "@/assets/cafe-interior.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crust & Co — Pizza · Burgers · Sandwiches in Brooklyn" },
      { name: "description", content: "Wood-fired pizza, smash burgers and pressed sandwiches. Order pickup or delivery in 25 minutes. Open daily in Brooklyn." },
      { property: "og:title", content: "Crust & Co — Pizza · Burgers · Sandwiches" },
      { property: "og:description", content: "Wood-fired pizza, smash burgers and pressed sandwiches. Order in 25 minutes." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

/* -------------------- HERO -------------------- */
function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.7 })
        .from(".hero-line", { y: 80, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(".hero-meta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-img", { scale: 1.15, opacity: 0, duration: 1.4, ease: "power3.out" }, 0.2)
        .from(".hero-chip", { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.6");

      // floating images
      gsap.to(".float-a", { y: -16, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".float-b", { y: 14, duration: 4.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

      // parallax hero image
      gsap.to(".hero-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative pt-32 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
        <div className="lg:col-span-7 relative z-10">
          <span className="hero-eyebrow pill bg-[var(--cream)] text-[var(--ink)] border border-black/5">
            <span className="size-1.5 rounded-full bg-[var(--tomato)] animate-pulse" />
            Open now · Delivery in ~25 min
          </span>

          <h1 className="mt-6 font-display text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.88] tracking-[-0.04em]">
            <span className="hero-line block">Pizza,</span>
            <span className="hero-line block">
              <span className="text-gradient-warm italic">burgers</span>
              <span className="text-[var(--ink)]"> &</span>
            </span>
            <span className="hero-line block">sandwiches.</span>
          </h1>

          <p className="hero-sub mt-7 max-w-md text-lg text-muted-foreground leading-relaxed">
            Wood-fired in 90 seconds. Smashed to order. Pressed till golden.
            Pick a meal — we'll have it ready before you arrive.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/menu" className="hero-cta btn-primary group">
              <ShoppingBag className="size-4" />
              Order Now
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/contact" className="hero-cta btn-ghost">
              <MapPin className="size-4" />
              Find a table
            </Link>
          </div>

          <div className="hero-meta mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[burgerImg, pizzaImg, sandwichImg].map((src, i) => (
                  <div key={i} className="size-9 rounded-full overflow-hidden ring-2 ring-background">
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-[var(--mustard)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">4.9 · 2,400+ reviews</p>
              </div>
            </div>
            <div className="h-10 w-px bg-black/10 hidden sm:block" />
            <div className="text-sm text-muted-foreground">
              <span className="text-[var(--ink)] font-semibold">Free delivery</span> over $25
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[60vh] lg:h-[78vh]">
          <div className="hero-img absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Hands holding pizza slice with cheese pull"
              className="w-full h-full object-cover"
              width={1600}
              height={1920}
            />
          </div>

          {/* Floating chips */}
          <div className="hero-chip float-a absolute -left-4 top-12 card-soft rounded-2xl p-4 max-w-[200px] hidden md:block">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--tomato)] font-semibold">
              <Flame className="size-3.5" /> Wood-fired
            </div>
            <p className="font-display text-lg mt-1 leading-tight">Margherita</p>
            <p className="text-xs text-muted-foreground mt-1">Ready in 6 min</p>
          </div>

          <div className="hero-chip float-b absolute -right-2 bottom-8 card-soft rounded-2xl p-4 max-w-[220px] hidden md:block">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--tomato)] font-semibold">
              <Truck className="size-3.5" /> Delivery
            </div>
            <p className="font-display text-lg mt-1 leading-tight">~25 min</p>
            <p className="text-xs text-muted-foreground mt-1">Free over $25</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 border-y border-black/10 py-5 overflow-hidden bg-[var(--ink)] text-[var(--cream)]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm uppercase tracking-[0.25em] font-semibold">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0 pr-12">
              {["Wood-fired pizza", "Smash burgers", "Pressed sandwiches", "25-min delivery", "Open till midnight", "Loyalty rewards"].map(
                (w, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-12">
                    <span>{w}</span>
                    <span className="text-[var(--mustard)]">★</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- VALUE / WHY US -------------------- */
function ValueRow() {
  const items = [
    { icon: Flame, title: "Wood-fired ovens", body: "900°F crust in 90 seconds." },
    { icon: Clock, title: "Ready in 25 min", body: "Pickup or delivery, on time." },
    { icon: Truck, title: "Free delivery", body: "On orders over $25, citywide." },
    { icon: Star, title: "4.9 / 5 rating", body: "From 2,400+ happy regulars." },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <GsapReveal key={it.title} delay={i * 0.05}>
            <div className="card-soft rounded-2xl p-5 h-full">
              <div className="size-11 rounded-xl bg-[var(--cream)] grid place-items-center text-[var(--tomato)]">
                <it.icon className="size-5" />
              </div>
              <p className="mt-4 font-display text-xl">{it.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </div>
          </GsapReveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------- CATEGORIES (3 BIG CARDS) -------------------- */
function Categories() {
  const cats = [
    { name: "Pizza", img: pizzaImg, blurb: "Wood-fired, hand-stretched dough", from: "$12", color: "var(--tomato)" },
    { name: "Burgers", img: burgerImg, blurb: "Smashed beef, brioche, melted cheese", from: "$11", color: "var(--mustard)" },
    { name: "Sandwiches", img: sandwichImg, blurb: "Pressed ciabatta, layered fresh", from: "$10", color: "var(--clay)" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Built to crave</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl max-w-3xl">
              Pick your <span className="text-gradient-warm italic">category</span>.
            </h2>
          </div>
          <Link to="/menu" className="group inline-flex items-center gap-2 text-sm font-semibold">
            See full menu
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </GsapReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {cats.map((c, i) => (
            <GsapReveal key={c.name} delay={i * 0.08}>
              <Link
                to="/menu"
                className="group relative block overflow-hidden rounded-3xl aspect-[4/5] card-soft"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="pill bg-white/90 text-[var(--ink)]">From {c.from}</span>
                </div>
                <div className="absolute bottom-5 inset-x-5 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-display text-4xl">{c.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{c.blurb}</p>
                  </div>
                  <div
                    className="size-12 rounded-full grid place-items-center transition-transform group-hover:rotate-45"
                    style={{ background: c.color, color: "white" }}
                  >
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </Link>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BESTSELLERS HORIZONTAL SCROLL -------------------- */
const bestsellers = [
  { name: "Margherita Classica", desc: "San Marzano, mozzarella di bufala, basil", price: "$14", img: pizzaImg, tag: "Bestseller" },
  { name: "Double Smash", desc: "2× beef, cheddar, special sauce, brioche", price: "$13", img: burgerImg, tag: "Top rated" },
  { name: "Grilled Chicken Ciabatta", desc: "Mozzarella, arugula, tomato, basil aioli", price: "$12", img: sandwichImg, tag: "New" },
  { name: "Truffle Fries", desc: "Sea salt, parmesan, truffle oil", price: "$7", img: friesImg, tag: "Side" },
  { name: "Iced Vanilla Latte", desc: "Cold-brew, vanilla, oat milk swirl", price: "$5", img: drinkImg, tag: "Drink" },
];

function Bestsellers() {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="pill bg-white text-[var(--tomato)] border border-black/5">Bestsellers</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              The <span className="text-gradient-warm italic">crowd</span> favorites.
            </h2>
          </div>
        </GsapReveal>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-5 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))]">
          {bestsellers.map((item, i) => (
            <GsapReveal key={i} delay={i * 0.05}>
              <div className="group w-[260px] md:w-[300px] shrink-0">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] card-soft">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 pill bg-white/90 text-[var(--ink)]">{item.tag}</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                  <span className="font-display text-lg text-[var(--tomato)] shrink-0">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-10">
        <Link to="/menu" className="btn-primary">
          See full menu
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

/* -------------------- HOW IT WORKS -------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Choose your meal", body: "Browse pizza, burgers, sandwiches and sides." },
    { n: "02", title: "Pick a time", body: "ASAP, scheduled pickup, or delivery." },
    { n: "03", title: "We make it fresh", body: "Wood-fired & smashed-to-order in minutes." },
    { n: "04", title: "Eat happy", body: "Hot and ready when you arrive." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal className="max-w-2xl mb-14">
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">How it works</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            Order in <span className="text-gradient-warm italic">three taps</span>.
          </h2>
        </GsapReveal>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <GsapReveal key={s.n} delay={i * 0.07}>
              <div className="relative card-soft rounded-3xl p-6 h-full">
                <span className="font-display text-6xl text-[var(--tomato)] opacity-20 leading-none">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- INTERIOR / VISIT BANNER -------------------- */
function VisitBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img src={interiorImg} alt="Crust & Co interior" className="w-full h-[55vh] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end max-w-2xl">
              <span className="pill bg-white/90 text-[var(--ink)] w-fit">Dine in</span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl text-white">
                Bright room. <span className="italic text-[var(--mustard)]">Honest food.</span>
              </h2>
              <p className="mt-3 text-white/85 max-w-md">
                Walk in any day, no reservation needed. Group of 6+? Give us a call.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  <MapPin className="size-4" /> Get directions
                </Link>
                <a href="tel:+13475550192" className="btn-ghost bg-white/90">
                  <Phone className="size-4" /> (347) 555 — 0192
                </a>
              </div>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
const testimonials = [
  { quote: "Best margherita in Brooklyn — and the delivery is genuinely 25 minutes.", name: "Liana M.", role: "Regular" },
  { quote: "Smash burger is the perfect lunch. Crust on the patty, melt on the cheese.", name: "Daniel R.", role: "Designer" },
  { quote: "I've tried every sandwich. The grilled chicken ciabatta wins, every time.", name: "Sofia K.", role: "Photographer" },
];

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal className="max-w-2xl mb-14">
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Loved locally</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            What <span className="text-gradient-warm italic">regulars</span> say.
          </h2>
        </GsapReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <GsapReveal key={i} delay={i * 0.08}>
              <div className="card-soft rounded-3xl p-7 h-full flex flex-col">
                <div className="text-[var(--mustard)] flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-black/10">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- BIG CTA -------------------- */
function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--ink)] text-white p-12 md:p-20 text-center">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-[var(--tomato)] blur-3xl opacity-40" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-[var(--mustard)] blur-3xl opacity-30" />
            <span className="relative pill bg-white/10 text-white">Hungry?</span>
            <h2 className="relative mt-5 font-display text-5xl md:text-7xl max-w-3xl mx-auto">
              Order now. <span className="text-gradient-warm italic">Eat in 25.</span>
            </h2>
            <p className="relative mt-5 text-white/70 max-w-xl mx-auto">
              Pickup or delivery, every day from 11am till late.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/menu" className="btn-primary">
                <ShoppingBag className="size-4" /> Start your order
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <MapPin className="size-4" /> Visit us
              </Link>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <ValueRow />
      <Categories />
      <Bestsellers />
      <HowItWorks />
      <VisitBanner />
      <Testimonials />
      <CTA />
    </>
  );
}
