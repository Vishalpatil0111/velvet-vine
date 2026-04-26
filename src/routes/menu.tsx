import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, Flame } from "lucide-react";
import { GsapReveal } from "@/components/site/GsapReveal";
import pizzaImg from "@/assets/food-pizza.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import sandwichImg from "@/assets/food-sandwich.jpg";
import friesImg from "@/assets/food-fries.jpg";
import drinkImg from "@/assets/food-drink.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Snack Cafe" },
      { name: "description", content: "Snacks, bites, sides and drinks. View the full menu and order online for pickup or delivery." },
      { property: "og:title", content: "Menu — Snack Cafe" },
      { property: "og:description", content: "Pizza, burgers, sandwiches, sides and drinks." },
      { property: "og:image", content: pizzaImg },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; img: string; tag?: string };
const data: Record<string, Item[]> = {
  Pizza: [
    { name: "Margherita Classica", desc: "San Marzano, mozzarella di bufala, basil", price: "$14", img: pizzaImg, tag: "Bestseller" },
    { name: "Pepperoni Forno", desc: "Cup-and-char pepperoni, fior di latte, hot honey", price: "$16", img: pizzaImg },
    { name: "Funghi Tartufo", desc: "Wild mushroom, truffle oil, parmesan, thyme", price: "$18", img: pizzaImg, tag: "Chef's pick" },
    { name: "Diavola Piccante", desc: "Spicy salami, chili, mozzarella, oregano", price: "$17", img: pizzaImg },
    { name: "Quattro Formaggi", desc: "Mozz, gorgonzola, parmesan, provola", price: "$17", img: pizzaImg },
    { name: "Veggie Garden", desc: "Roasted peppers, zucchini, olives, basil", price: "$15", img: pizzaImg },
  ],
  Burgers: [
    { name: "Single Smash", desc: "Beef, american cheese, pickles, special sauce", price: "$10", img: burgerImg },
    { name: "Double Smash", desc: "2× beef, cheddar, special sauce, brioche", price: "$13", img: burgerImg, tag: "Bestseller" },
    { name: "Bacon Cheese", desc: "Smoked bacon, cheddar, caramelized onions", price: "$14", img: burgerImg },
    { name: "Spicy Diavola", desc: "Pepper jack, jalapeños, chipotle aioli", price: "$13", img: burgerImg },
    { name: "Mushroom Swiss", desc: "Sautéed mushrooms, melted swiss, truffle aioli", price: "$14", img: burgerImg, tag: "New" },
    { name: "Veggie Crunch", desc: "Crispy plant-based patty, lettuce, tomato", price: "$12", img: burgerImg },
  ],
  Sandwiches: [
    { name: "Grilled Chicken Ciabatta", desc: "Mozzarella, arugula, tomato, basil aioli", price: "$12", img: sandwichImg, tag: "Bestseller" },
    { name: "Italian Sub", desc: "Salami, ham, provolone, banana peppers, oil & vinegar", price: "$13", img: sandwichImg },
    { name: "Caprese Pressed", desc: "Mozzarella di bufala, tomato, basil, balsamic", price: "$11", img: sandwichImg },
    { name: "Turkey Avocado", desc: "Smoked turkey, avocado, swiss, sourdough", price: "$12", img: sandwichImg },
    { name: "Steak & Onion", desc: "Sliced ribeye, caramelized onion, melted provolone", price: "$15", img: sandwichImg },
  ],
  Sides: [
    { name: "Truffle Fries", desc: "Sea salt, parmesan, truffle oil", price: "$7", img: friesImg, tag: "Bestseller" },
    { name: "Classic Fries", desc: "Crispy, golden, sea salt", price: "$5", img: friesImg },
    { name: "Loaded Fries", desc: "Cheese sauce, bacon, scallions", price: "$8", img: friesImg },
    { name: "Garden Salad", desc: "Mixed greens, tomato, cucumber, lemon vinaigrette", price: "$8", img: friesImg },
  ],
  Drinks: [
    { name: "Iced Vanilla Latte", desc: "Cold-brew, vanilla, oat milk swirl", price: "$5", img: drinkImg },
    { name: "Cold Brew", desc: "24-hour steeped, smooth & strong", price: "$4.5", img: drinkImg },
    { name: "Lemonade", desc: "Fresh-squeezed, lightly sweet", price: "$4", img: drinkImg },
    { name: "Italian Soda", desc: "Sparkling water, choice of syrup", price: "$4", img: drinkImg },
  ],
};

const categories = Object.keys(data);

function MenuPage() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Full menu</span>
          <h1 className="mt-4 font-display text-6xl md:text-8xl max-w-4xl">
            Built fresh. <span className="text-gradient-warm italic">Made fast.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Every item is prepared to order. Wood-fired in 90 seconds, smashed on the flat-top, pressed till golden.
          </p>
        </GsapReveal>

        {/* Sticky category bar */}
        <div className="sticky top-24 z-30 mt-12 -mx-6 px-6 py-3 bg-[var(--background)]/80 backdrop-blur-xl border-y border-black/5">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="relative px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-colors shrink-0"
              >
                {active === cat && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 rounded-full bg-[var(--ink)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-medium ${active === cat ? "text-white" : "text-muted-foreground hover:text-[var(--ink)]"}`}>
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-5"
            >
              {data[active].map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex gap-5 card-soft rounded-3xl p-4 hover:shadow-[var(--shadow-soft)] transition-all"
                >
                  <div className="size-28 md:size-32 shrink-0 overflow-hidden rounded-2xl">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="flex-1 py-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl truncate">{item.name}</h3>
                      <span className="text-[var(--tomato)] font-display text-xl shrink-0">{item.price}</span>
                    </div>
                    {item.tag && (
                      <span className="mt-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[var(--tomato)] font-bold">
                        <Flame className="size-3" /> {item.tag}
                      </span>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
                    <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--ink)] text-white px-3.5 py-1.5 text-xs font-semibold hover:bg-[var(--tomato)] transition-colors">
                      <Plus className="size-3.5" /> Add to order
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-16 card-soft rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl">Ready to order?</h3>
            <p className="mt-2 text-muted-foreground">Pickup in 15 min · Delivery in 25 min · Free over $25</p>
          </div>
          <Link to="/contact" className="btn-primary self-start md:self-auto">
            <ShoppingBag className="size-4" /> Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
