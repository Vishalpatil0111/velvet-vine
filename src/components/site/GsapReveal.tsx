import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal-on-scroll wrapper powered by GSAP.
 * - Smooth y/opacity entrance
 * - Optional stagger over direct children when `stagger` is true
 */
export function GsapReveal({
  children,
  className,
  delay = 0,
  y = 40,
  stagger = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: boolean;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger ? Array.from(el.children) : [el];
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay,
      stagger: stagger ? 0.08 : 0,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
