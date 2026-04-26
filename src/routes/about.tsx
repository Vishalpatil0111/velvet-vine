import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sig1 from "@/assets/signature-1.jpg";
import sig2 from "@/assets/signature-2.jpg";
import exp1 from "@/assets/experience-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Signature — The Story of Maison Noir" },
      { name: "description", content: "Maison Noir began as a quiet ritual between three friends. Today it pours coffee, plates seasonal food and holds space in Brooklyn." },
      { property: "og:title", content: "Signature — The Story of Maison Noir" },
      { property: "og:description", content: "A quiet ritual between three friends, now a Brooklyn café." },
      { property: "og:image", content: sig1 },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-36 pb-10">
      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Signature</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            A small place built on <span className="italic text-gradient-gold">slow time</span>.
          </h1>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] aspect-[5/4]">
              <img src={exp1} alt="Maison Noir interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Est. 2014</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">A ritual between friends</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Maison Noir began on a winter morning, three friends, one small roaster
              and a stubborn belief that coffee deserved more attention than the city
              gave it. A decade later, the room has grown but the ritual hasn't moved.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["10", "Years pouring"],
                ["18", "Origins this year"],
                ["1", "Slow philosophy"],
              ].map(([n, l]) => (
                <div key={l} className="glass-card rounded-2xl p-4">
                  <p className="font-display text-3xl text-gold">{n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-32 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Coffee program</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Beans we travel for.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              We work directly with growers in Ethiopia, Colombia and Guatemala —
              paying above Fair Trade and roasting in small batches every Tuesday.
              Every bag is dated. Every cup is poured with intention.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] aspect-square">
              <img src={sig1} alt="Coffee" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="mt-32 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Kitchen</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Chef Amara's seasonal hand.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              The menu is short on purpose. Chef Amara writes it around the morning
              market — slow-fermented breads, plates assembled from what's at peak,
              desserts that arrive quietly under candlelight.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:order-1">
            <div className="overflow-hidden rounded-[2rem] aspect-square">
              <img src={sig2} alt="Chef" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
