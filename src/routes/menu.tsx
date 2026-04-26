import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuToast from "@/assets/menu-toast.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Maison Noir" },
      { name: "description", content: "Single-origin coffees, ceremonial teas, seasonal plates and desserts at Maison Noir." },
      { property: "og:title", content: "The Menu — Maison Noir" },
      { property: "og:description", content: "Single-origin coffees, ceremonial teas, seasonal plates and desserts." },
      { property: "og:image", content: menuCoffee },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img: string };
const data: Record<string, Item[]> = {
  Coffee: [
    { name: "Obsidian Espresso", desc: "Double shot, dark cocoa & smoke", price: "$5", img: menuCoffee },
    { name: "Velvet Cortado", desc: "Single-origin, silk-steamed milk", price: "$5.5", img: menuCoffee },
    { name: "Cold Brew Reserve", desc: "24-hour steeped, bottle service", price: "$8", img: menuCoffee },
    { name: "Pour Over Yirgacheffe", desc: "Jasmine, stone fruit, honey", price: "$9", img: menuCoffee },
  ],
  Tea: [
    { name: "Ceremonial Matcha", desc: "Stone-ground Uji, oat or whole", price: "$7", img: menuMatcha },
    { name: "Smoked Houjicha", desc: "Roasted leaves, caramel finish", price: "$6", img: menuMatcha },
    { name: "Jasmine Pearl", desc: "Hand-rolled, twice steeped", price: "$6", img: menuMatcha },
  ],
  Plates: [
    { name: "Avocado, Yuzu, Egg", desc: "Sourdough, herbs, soft poached", price: "$14", img: menuToast },
    { name: "Wild Mushroom Toast", desc: "Black truffle, parmesan crisp", price: "$16", img: menuToast },
    { name: "Smoked Salmon Tartine", desc: "Crème fraîche, dill, capers", price: "$17", img: menuToast },
  ],
  Sweets: [
    { name: "Gold Leaf Mousse", desc: "70% chocolate, sea salt, gold", price: "$11", img: menuDessert },
    { name: "Burnt Basque Cheesecake", desc: "Madagascar vanilla, honey", price: "$10", img: menuDessert },
    { name: "Olive Oil Cake", desc: "Citrus glaze, cardamom cream", price: "$9", img: menuDessert },
  ],
};

const categories = Object.keys(data);

function MenuPage() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The menu</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95]">
            A short list of <span className="italic text-gradient-gold">good things</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Every item is made in-house with seasonal ingredients. The menu shifts
            quietly with the weeks.
          </p>
        </Reveal>

        {/* Category tabs */}
        <div className="mt-16 flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-6 py-3 rounded-full text-sm transition-colors"
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active === cat ? "text-gold-foreground font-medium" : "text-muted-foreground"}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {data[active].map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group flex gap-5 glass-card rounded-3xl p-4 hover:border-gold/30 transition-colors"
                >
                  <div className="size-28 md:size-32 shrink-0 overflow-hidden rounded-2xl">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{item.name}</h3>
                      <span className="text-gold font-display text-xl shrink-0">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
