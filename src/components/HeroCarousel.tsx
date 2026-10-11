"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { waLink } from "@/config/site";
import { heroSlides } from "@/content/copy";
import { WhatsAppIcon } from "./WhatsAppButton";

const DELAY = 5000;

export function HeroCarousel() {
  const [emblaRef, api] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect).on("reInit", onSelect);
    return () => {
      api.off("select", onSelect).off("reInit", onSelect);
    };
  }, [api]);

  const playing = !userPaused && !reducedMotion;

  // Timer diulang tiap slide berganti, jadi navigasi manual tidak langsung disusul slide berikutnya.
  useEffect(() => {
    if (!api || !playing || hovering || focused) return;
    const id = window.setTimeout(() => api.scrollNext(), DELAY);
    return () => window.clearTimeout(id);
  }, [api, playing, hovering, focused, selected]);

  const prev = useCallback(() => api?.scrollPrev(reducedMotion), [api, reducedMotion]);
  const next = useCallback(() => api?.scrollNext(reducedMotion), [api, reducedMotion]);
  const goTo = useCallback((i: number) => api?.scrollTo(i, reducedMotion), [api, reducedMotion]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Pilihan totebag pre-order"
      className="relative bg-ink"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y" aria-live={playing ? "off" : "polite"}>
          {heroSlides.map((slide, i) => {
            const Heading = i === 0 ? "h1" : "p";
            return (
              <div
                key={slide.image}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} dari ${heroSlides.length}`}
                inert={i !== selected}
                className="relative h-[72svh] max-h-[680px] min-h-[480px] min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  preload={i === 0}
                  fetchPriority={i === 0 ? "high" : undefined}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6 sm:pb-14">
                  <Heading className="max-w-2xl text-3xl leading-tight font-bold text-white sm:text-5xl">
                    {slide.title}
                  </Heading>
                  <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">{slide.text}</p>
                  <a
                    href={waLink(slide.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-wa-location={`hero-${i + 1}`}
                    className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-wa px-5 py-3 text-base font-semibold text-wa-ink transition-colors hover:bg-wa-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <WhatsAppIcon />
                    <span>{slide.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
