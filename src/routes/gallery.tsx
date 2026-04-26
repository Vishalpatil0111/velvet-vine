import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GsapReveal } from "@/components/site/GsapReveal";
import pizzaImg from "@/assets/food-pizza.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import sandwichImg from "@/assets/food-sandwich.jpg";
import friesImg from "@/assets/food-fries.jpg";
import drinkImg from "@/assets/food-drink.jpg";
import interiorImg from "@/assets/cafe-interior.jpg";
import heroImg from "@/assets/food-hero.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Snack Cafe" },
      { name: "description", content: "A look inside Crust & Co — the food, the room, the people." },
      { property: "og:title", content: "Gallery — Crust & Co" },
      { property: "og:description", content: "A visual journal of Crust & Co." },
      { property: "og:image", content: interiorImg },
    ],
  }),
  component: GalleryPage,
});

const images = [heroImg, interiorImg, pizzaImg, burgerImg, sandwichImg, friesImg, drinkImg, pizzaImg, burgerImg, sandwichImg];

function GalleryPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".gal-item");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          },
        );
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Gallery</span>
          <h1 className="mt-4 font-display text-6xl md:text-8xl max-w-4xl">
            The food. The <span className="text-gradient-warm italic">room</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
            A look at what comes out of the kitchen and the room you'll eat it in.
          </p>
        </GsapReveal>

        <div ref={gridRef} className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((src, i) => (
            <div
              key={i}
              className="gal-item mb-5 break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer card-soft"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
