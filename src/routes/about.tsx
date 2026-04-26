import { createFileRoute, Link } from "@tanstack/react-router";
import { GsapReveal } from "@/components/site/GsapReveal";
import { Flame, Leaf, Award, ArrowUpRight } from "lucide-react";
import interiorImg from "@/assets/cafe-interior.jpg";
import pizzaImg from "@/assets/food-pizza.jpg";
import burgerImg from "@/assets/food-burger.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Crust & Co" },
      { name: "description", content: "Crust & Co started as a single wood-fired oven in Brooklyn. Today we serve pizza, burgers and sandwiches with the same honest standard." },
      { property: "og:title", content: "Our Story — Crust & Co" },
      { property: "og:description", content: "From one oven to a Brooklyn favorite." },
      { property: "og:image", content: interiorImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <GsapReveal>
          <span className="pill bg-[var(--cream)] text-[var(--tomato)]">Our story</span>
          <h1 className="mt-4 font-display text-6xl md:text-8xl max-w-4xl">
            One oven. One <span className="text-gradient-warm italic">honest</span> standard.
          </h1>
        </GsapReveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <GsapReveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] aspect-[5/4]">
              <img src={interiorImg} alt="Crust & Co interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </GsapReveal>
          <GsapReveal delay={0.1} className="lg:col-span-5 flex flex-col justify-center">
            <span className="pill bg-[var(--cream)] text-[var(--tomato)] w-fit">Est. 2018</span>
            <h2 className="mt-4 font-display text-4xl leading-tight">Built by people who eat here too</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              We opened with a wood-fired oven, a flat-top, and a stubborn rule: only serve food we'd want to eat
              every day. Six years in, the rule still runs the kitchen.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["6", "Years cooking"],
                ["12k+", "Orders / month"],
                ["4.9", "Avg rating"],
              ].map(([n, l]) => (
                <div key={l} className="card-soft rounded-2xl p-4">
                  <p className="font-display text-3xl text-[var(--tomato)]">{n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{l}</p>
                </div>
              ))}
            </div>
          </GsapReveal>
        </div>

        {/* Pillars */}
        <div className="mt-28 grid md:grid-cols-3 gap-5">
          {[
            { icon: Flame, title: "Wood-fired", body: "A 900°F oven crisps every crust in 90 seconds." },
            { icon: Leaf, title: "Local sourcing", body: "Produce and dairy from regional farms, weekly." },
            { icon: Award, title: "Made to order", body: "Nothing sits. Every plate hits the pass hot." },
          ].map((p, i) => (
            <GsapReveal key={p.title} delay={i * 0.07}>
              <div className="card-soft rounded-3xl p-7 h-full">
                <div className="size-12 rounded-xl bg-[var(--cream)] grid place-items-center text-[var(--tomato)]">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            </GsapReveal>
          ))}
        </div>

        {/* Split sections */}
        <div className="mt-28 grid lg:grid-cols-2 gap-10 items-center">
          <GsapReveal>
            <span className="pill bg-[var(--cream)] text-[var(--tomato)]">The dough</span>
            <h2 className="mt-4 font-display text-5xl leading-tight">48-hour cold-fermented.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              We mix every morning, then rest it cold for two full days. It's why the
              crust is light, airy, and easy on the stomach.
            </p>
          </GsapReveal>
          <GsapReveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] aspect-square">
              <img src={pizzaImg} alt="Pizza" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </GsapReveal>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <GsapReveal className="lg:order-2">
            <span className="pill bg-[var(--cream)] text-[var(--tomato)]">The patty</span>
            <h2 className="mt-4 font-display text-5xl leading-tight">Smashed, never pressed.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              80/20 fresh chuck, smashed onto a screaming-hot flat-top for that
              crunchy crust and juicy center. Served on a brioche we bake daily.
            </p>
          </GsapReveal>
          <GsapReveal delay={0.1} className="lg:order-1">
            <div className="overflow-hidden rounded-[2rem] aspect-square">
              <img src={burgerImg} alt="Burger" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </GsapReveal>
        </div>

        {/* CTA */}
        <div className="mt-28">
          <GsapReveal>
            <div className="rounded-[2rem] bg-[var(--ink)] text-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h3 className="font-display text-4xl md:text-5xl max-w-xl">
                Hungry yet? <span className="text-[var(--mustard)] italic">Let's eat.</span>
              </h3>
              <Link to="/menu" className="btn-primary self-start md:self-auto">
                See the menu <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  );
}
