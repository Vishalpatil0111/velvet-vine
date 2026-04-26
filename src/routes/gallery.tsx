import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-coffee.jpg";
import sig1 from "@/assets/signature-1.jpg";
import sig2 from "@/assets/signature-2.jpg";
import exp1 from "@/assets/experience-1.jpg";
import exp2 from "@/assets/experience-2.jpg";
import exp3 from "@/assets/experience-3.jpg";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuToast from "@/assets/menu-toast.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maison Noir" },
      { name: "description", content: "Lantern light, marble counters, and quiet evenings — a visual journal of Maison Noir." },
      { property: "og:title", content: "Gallery — Maison Noir" },
      { property: "og:description", content: "A visual journal of Maison Noir." },
      { property: "og:image", content: exp1 },
    ],
  }),
  component: GalleryPage,
});

const images = [heroImg, exp1, sig1, menuCoffee, exp3, sig2, exp2, menuMatcha, menuToast, menuDessert];

function GalleryPage() {
  return (
    <div className="pt-36 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            A visual <span className="italic text-gradient-gold">journal</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Glances of the room, the cups, the hands and the small still hours.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
