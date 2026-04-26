import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-coffee.jpg";
import sig1 from "@/assets/signature-1.jpg";
import sig2 from "@/assets/signature-2.jpg";
import exp1 from "@/assets/experience-1.jpg";
import exp2 from "@/assets/experience-2.jpg";
import exp3 from "@/assets/experience-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — A Sanctuary of Slow Coffee & Seasonal Plates" },
      {
        name: "description",
        content:
          "Step into Maison Noir — single-origin coffee, seasonal plates, and quiet hours tucked between the city's noise.",
      },
      { property: "og:title", content: "Maison Noir — A Sanctuary of Slow Coffee" },
      {
        property: "og:description",
        content: "Single-origin coffee, seasonal plates, and quiet hours in Brooklyn.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[88vh]">
        {/* Left text */}
        <motion.div style={{ opacity }} className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
          >
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            Est. 2014 · Brooklyn
          </motion.div>

          <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="block"
            >
              Slow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="block italic text-gradient-gold pl-[12%]"
            >
              rituals,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="block"
            >
              dark roasts.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed"
          >
            A candle-lit corner of Brooklyn pouring single-origin coffee and plating
            seasonal dishes for the unhurried.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-500"
            >
              Reserve a Table
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 transition-all"
            >
              Explore Menu
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[exp2, sig1, exp3].map((src, i) => (
                <div key={i} className="size-9 rounded-full overflow-hidden ring-2 ring-background">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Loved by 12,000+ guests</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          style={{ y }}
          className="lg:col-span-5 relative h-[60vh] lg:h-[78vh]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]"
          >
            <img
              src={heroImg}
              alt="Barista pouring latte art"
              className="w-full h-full object-cover"
              width={1080}
              height={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -left-6 bottom-10 glass-card rounded-2xl p-4 max-w-[200px] hidden md:block"
          >
            <p className="text-xs uppercase tracking-widest text-gold mb-1">Today's brew</p>
            <p className="font-display text-lg leading-tight">Ethiopia Yirgacheffe</p>
            <p className="text-xs text-muted-foreground mt-1">Notes of jasmine & stone fruit</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-12 border-y border-border/60 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 shrink-0">
              {["Single-origin", "Seasonal menu", "Hand-roasted", "Slow brewed", "Brooklyn-made", "Open late"].map(
                (w) => (
                  <span key={w} className="flex items-center gap-16">
                    <span>{w}</span>
                    <span className="text-gold">✦</span>
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

function Signature() {
  const items = [
    {
      kicker: "Coffee program",
      title: "Beans we travel for",
      body: "We source single-origin lots directly from farmers in Ethiopia, Colombia and Guatemala — roasted in small batches each Tuesday.",
      img: sig1,
      align: "left",
    },
    {
      kicker: "Chef's table",
      title: "A menu that follows the season",
      body: "Chef Amara writes the menu around the morning's market — small plates, slow-fermented breads, and desserts finished with edible gold.",
      img: sig2,
      align: "right",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Signature</p>
        <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
          Crafted with <span className="italic text-gradient-gold">intention</span>.
        </h2>
      </Reveal>

      <div className="mt-20 space-y-32">
        {items.map((it, i) => (
          <div
            key={i}
            className={`grid lg:grid-cols-12 gap-10 items-center ${
              it.align === "right" ? "lg:[direction:rtl]" : ""
            }`}
          >
            <Reveal className="lg:col-span-7 [direction:ltr]">
              <div className="relative group overflow-hidden rounded-[2rem]">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full aspect-[5/4] object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5 [direction:ltr]">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{it.kicker}</p>
              <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{it.title}</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{it.body}</p>
              <div className="mt-8 h-px w-24 bg-gradient-warm" />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

import menuCoffee from "@/assets/menu-coffee.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuToast from "@/assets/menu-toast.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";

const menuItems = [
  { name: "Obsidian Espresso", desc: "Double shot, dark cocoa & smoke", price: "$5", img: menuCoffee, tag: "Coffee" },
  { name: "Ceremonial Matcha", desc: "Stone-ground Uji matcha, oat", price: "$7", img: menuMatcha, tag: "Tea" },
  { name: "Avocado, Yuzu, Egg", desc: "Sourdough, herbs, soft poached", price: "$14", img: menuToast, tag: "Plates" },
  { name: "Gold Leaf Mousse", desc: "70% chocolate, sea salt, gold", price: "$11", img: menuDessert, tag: "Sweets" },
  { name: "Obsidian Espresso", desc: "Double shot, dark cocoa & smoke", price: "$5", img: menuCoffee, tag: "Coffee" },
  { name: "Ceremonial Matcha", desc: "Stone-ground Uji matcha, oat", price: "$7", img: menuMatcha, tag: "Tea" },
];

function MenuPreview() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">The menu</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
              A short list of <span className="italic text-gradient-gold">good things</span>.
            </h2>
          </div>
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View full menu
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide pb-6">
          <div className="flex gap-6 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))]">
            {menuItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="group w-[280px] md:w-[340px] shrink-0"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs uppercase tracking-widest">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl">{item.name}</h3>
                        <span className="text-gold font-display text-xl">{item.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Experience</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
            Lantern light, <span className="italic text-gradient-gold">long evenings</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[160px]">
          <Reveal className="col-span-7 md:col-span-5 row-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl group">
              <img src={exp1} alt="Café interior" className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-widest text-gold">The room</p>
                <p className="font-display text-xl mt-1">Marble, brass, candlelight</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="col-span-5 md:col-span-3 row-span-2">
            <div className="h-full overflow-hidden rounded-3xl group">
              <img src={exp2} alt="" className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 md:col-span-4 row-span-3">
            <div className="h-full overflow-hidden rounded-3xl group">
              <img src={exp3} alt="" className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="col-span-5 md:col-span-3 row-span-1">
            <div className="h-full glass-card rounded-3xl p-5 flex flex-col justify-between">
              <p className="text-xs uppercase tracking-widest text-gold">Open late</p>
              <p className="font-display text-2xl leading-tight">Until 11pm<br/>weekends</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "The most beautiful corner of the city. I came for the espresso and stayed three hours.",
    name: "Liana M.",
    role: "Writer",
  },
  {
    quote: "Every detail considered — from the music to the way the cups warm in your hands.",
    name: "Daniel R.",
    role: "Designer",
  },
  {
    quote: "Maison Noir feels like a secret you want to keep, but can't help sharing.",
    name: "Sofia K.",
    role: "Photographer",
  },
];

function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Whispers</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
            Words from <span className="italic text-gradient-gold">our regulars</span>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 h-full flex flex-col"
              >
                <div className="text-gold flex gap-0.5 mb-6">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3.5 fill-gold" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug flex-1">"{t.quote}"</p>
                <div className="mt-8 pt-6 border-t border-border/60">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass-card p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-radial opacity-60 pointer-events-none" />
            <p className="relative text-xs uppercase tracking-[0.3em] text-gold">A seat awaits</p>
            <h2 className="relative mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl mx-auto">
              Reserve your <span className="italic text-gradient-gold">slow hour</span>.
            </h2>
            <p className="relative mt-6 text-muted-foreground max-w-xl mx-auto">
              We hold a small number of tables each evening. Book yours below — or stop by.
            </p>
            <Link
              to="/contact"
              className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-gold-foreground hover:shadow-[var(--shadow-glow)] transition-all"
            >
              Reserve a Table
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Signature />
      <MenuPreview />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
}
