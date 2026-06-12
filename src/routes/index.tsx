import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroKnefeh from "@/assets/hero-knefeh.jpg";
import baklava from "@/assets/baklava.jpg";
import knefehCroissant from "@/assets/knefeh-croissant.jpg";
import halawet from "@/assets/halawet.jpg";
import icecream from "@/assets/icecream.jpg";
import giftbox from "@/assets/giftbox.jpg";
import chocolates from "@/assets/chocolates.jpg";
import maamoul from "@/assets/maamoul.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L'Abeille D'Or — Since 1991. Taste of Happiness." },
      { name: "description", content: "Lebanese oriental sweets and patisserie since 1991. Knefeh, baklava, halawet el jebn, ice cream and gift boxes across 14+ branches in Lebanon." },
      { property: "og:title", content: "L'Abeille D'Or — Taste of Happiness" },
      { property: "og:description", content: "Lebanese oriental sweets & patisserie since 1991." },
    ],
  }),
  component: Home,
});

const Bee = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
    <path d="M32 6 L40 12 L40 20 L24 20 L24 12 Z" fill="currentColor" opacity=".15" />
    <ellipse cx="32" cy="36" rx="13" ry="18" fill="currentColor" />
    <path d="M32 22 V52 M20 28 H44 M20 36 H44 M20 44 H44" stroke="var(--ivory)" strokeWidth="2.2" />
    <ellipse cx="16" cy="30" rx="11" ry="6" fill="currentColor" opacity=".35" transform="rotate(-25 16 30)" />
    <ellipse cx="48" cy="30" rx="11" ry="6" fill="currentColor" opacity=".35" transform="rotate(25 48 30)" />
    <circle cx="28" cy="22" r="1.6" fill="var(--ivory)" />
    <circle cx="36" cy="22" r="1.6" fill="var(--ivory)" />
  </svg>
);

const Hex = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 115" className={className} aria-hidden>
    <polygon points="50,2 96,28 96,87 50,113 4,87 4,28" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

function Home() {
  // scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-cocoa">
      <Nav />
      <Hero />
      <About />
      <Sweets />
      <Reviews />
      <Locations />
      <Instagram />
      <Gifting />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-bronze text-ivory shrink-0">
            <Bee className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <div className="leading-tight min-w-0">
            <div className="font-display text-lg sm:text-xl tracking-wide truncate" style={{ fontFamily: "var(--font-display)" }}>
              L'Abeille D'Or
            </div>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-bronze">Since 1991</div>
          </div>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden md:flex items-center gap-7 text-sm text-cocoa/80 mr-6">
            {[
              ["About", "#about"],
              ["Our Sweets", "#sweets"],
              ["Reviews", "#reviews"],
              ["Locations", "#locations"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="relative hover:text-bronze transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-bronze after:transition-all hover:after:w-full">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="#locations" className="inline-flex items-center gap-2 rounded-full bg-bronze text-ivory px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide shadow-soft hover:bg-cocoa transition-colors">
            Find a Branch
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroKnefeh}
        alt="Signature knefeh on sesame bun"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cocoa/70 via-cocoa/40 to-ivory" />
      <div className="absolute inset-0 -z-10 honeycomb-bg opacity-25 mix-blend-overlay" />

      <div className="relative text-center px-6 pt-28 pb-20 max-w-4xl">
        <div className="inline-flex items-center gap-3 text-bronze-light animate-fade-in-slow">
          <span className="h-px w-10 bg-bronze-light/70" />
          <span className="uppercase tracking-[0.4em] text-[11px]">Lebanon · Est. 1991</span>
          <span className="h-px w-10 bg-bronze-light/70" />
        </div>

        <h1 className="mt-6 text-ivory font-display text-5xl sm:text-7xl md:text-8xl leading-[1.02] animate-fade-up">
          <span className="block italic font-light" style={{ fontFamily: "var(--font-script)" }}>
            L'Abeille
          </span>
          <span className="block tracking-wide">D'OR</span>
        </h1>

        <p className="mt-8 text-ivory/90 text-lg sm:text-xl font-light tracking-wide animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Since 1991. <span className="text-bronze-light">Taste of Happiness.</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#sweets" className="rounded-full bg-bronze text-ivory px-7 py-3.5 text-sm font-medium tracking-wide shadow-elegant hover:bg-bronze-light transition-colors">
            Explore Our Sweets
          </a>
          <a href="#locations" className="rounded-full border border-ivory/40 text-ivory px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-ivory hover:text-cocoa transition-colors">
            Find a Branch
          </a>
        </div>

        <div className="mt-20 text-ivory/60 text-xs tracking-[0.3em] uppercase animate-fade-in-slow" style={{ animationDelay: "0.7s" }}>
          Scroll
          <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-ivory/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-36 px-6 overflow-hidden">
      <Hex className="absolute -right-24 top-12 h-72 w-72 text-bronze/15" />
      <Hex className="absolute -left-32 bottom-0 h-96 w-96 text-bronze/10" />
      <div className="mx-auto max-w-5xl text-center reveal">
        <span className="gold-divider text-xs uppercase tracking-[0.35em]">Our Story</span>
        <h2 className="mt-6 text-4xl sm:text-6xl font-display leading-tight">
          Three decades of <em className="font-light text-bronze">Lebanese</em> sweetness.
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-cocoa/75">
          Founded in 1991, L'Abeille D'Or began as a single family pâtisserie with one
          ambition — to give every customer's day a sweeter taste. Today, across 14+
          branches in Lebanon, we still bake by hand each morning, with the same
          recipes, the same patience, and the same love.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left">
          {[
            { k: "Mission", v: "To give our customers' lives a sweeter taste — serving the freshest, highest quality products daily." },
            { k: "Vision", v: "To become the number one patisserie in Lebanon — and a name known wherever Lebanese hearts wander." },
            { k: "Certified", v: "ISO 22000:2005 food safety certified, ensuring every bite meets the world's highest standards." },
          ].map((c) => (
            <div key={c.k} className="reveal group p-8 bg-card rounded-sm border border-border hover:border-bronze/40 transition-colors shadow-soft">
              <div className="text-bronze text-xs uppercase tracking-[0.3em]">{c.k}</div>
              <p className="mt-4 text-cocoa/80 leading-relaxed font-light">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sweets = [
  { name: "Knefeh", tag: "The Signature", img: heroKnefeh, desc: "Our most beloved creation — hot, fresh, on a golden sesame bun.", featured: true },
  { name: "Baklava", tag: "Oriental Sweets", img: baklava, desc: "Layers of golden phyllo, butter, pistachio and honey syrup." },
  { name: "Knefeh Croissant", tag: "Innovation", img: knefehCroissant, desc: "The innovation you never knew you needed. Flaky meets fragrant." },
  { name: "Halawet El Jebn", tag: "Heritage", img: halawet, desc: "Rolled cheese dough, ashta cream, a kiss of rose syrup." },
  { name: "Ice Cream", tag: "Summer Counter", img: icecream, desc: "Mango, watermelon, lemon, ashta — fruit-bright, dairy-rich." },
  { name: "Maamoul", tag: "Tradition", img: maamoul, desc: "Date and pistachio shortbread, dusted with powdered sugar." },
  { name: "Chocolates", tag: "Maison Line", img: chocolates, desc: "A high-end chocolate line crafted for slow afternoons." },
  { name: "Gift Boxes", tag: "Travel-Ready", img: giftbox, desc: "Beautifully wrapped, airport-sealed — ready to cross any border." },
];

function Sweets() {
  return (
    <section id="sweets" className="relative py-24 sm:py-32 hex-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="gold-divider text-xs uppercase tracking-[0.35em]">La Carte</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-display">Our Sweets</h2>
          <p className="mt-5 text-cocoa/70 font-light">
            From the morning's first knefeh to the gift box that crosses an ocean — each piece
            is hand-made daily in our kitchens across Lebanon.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sweets.map((s, i) => (
            <article
              key={s.name}
              className={`reveal group relative overflow-hidden bg-card rounded-sm border border-border/70 shadow-soft hover:shadow-elegant transition-all duration-500 ${
                s.featured ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className={`relative overflow-hidden ${s.featured ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[600px]" : "aspect-[4/5]"}`}>
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/20 to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-bronze-light bg-cocoa/40 backdrop-blur px-2.5 py-1 rounded-full border border-bronze-light/30">
                  {s.tag}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-ivory">
                  <h3 className={`font-display ${s.featured ? "text-3xl sm:text-5xl" : "text-2xl"} leading-tight`}>
                    {s.name}
                  </h3>
                  <p className={`mt-2 text-ivory/85 font-light ${s.featured ? "text-base max-w-md" : "text-sm"}`}>
                    {s.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bronze-light">
                    Discover <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { q: "Some of the best knefeh in Lebanon — hot, fresh, perfect on a sesame bun.", a: "Karim H.", city: "Beirut" },
  { q: "Enormous portions of halawet el jebn — a true Lebanese classic done right.", a: "Lara M.", city: "Jbeil" },
  { q: "The knefeh croissant is an innovation I never knew I needed.", a: "Tony S.", city: "Achrafieh" },
  { q: "They wrap your sweets beautifully for travel — perfect for taking abroad as gifts.", a: "Nada K.", city: "Mansourieh" },
];

function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 px-6 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <span className="gold-divider text-xs uppercase tracking-[0.35em]">Why L'Abeille D'Or</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-display">A taste, beloved.</h2>
          <div className="mt-6 inline-flex items-center gap-3 text-bronze">
            <Stars />
            <span className="text-cocoa font-display text-2xl">4.4 / 5</span>
            <span className="text-cocoa/60 text-sm">average across branches</span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="reveal relative bg-card border border-border rounded-sm p-8 sm:p-10 shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute -top-6 left-8 text-bronze/30 font-display text-7xl leading-none select-none">"</span>
              <Stars className="mb-5" />
              <blockquote className="font-display text-xl sm:text-2xl leading-snug text-cocoa">
                {r.q}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <span className="h-px w-8 bg-bronze" />
                <span className="font-medium text-cocoa">{r.a}</span>
                <span className="text-cocoa/50">· {r.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 text-bronze ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77 4.8 17.5l.99-5.78L1.58 7.62l5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

const branches = [
  { name: "Jbeil — Byblos", phone: "+961 9 540 100" },
  { name: "Achrafieh, Beirut", phone: "+961 1 200 191" },
  { name: "Baabda", phone: "+961 5 922 379" },
  { name: "Mansourieh", phone: "+961 4 400 865" },
  { name: "Sad El Baushrieh", phone: "+961 1 898 200" },
  { name: "Zouk Mosbeh", phone: "+961 9 211 991" },
  { name: "Kesrouane Highway", phone: "+961 9 850 991" },
  { name: "Verdun, Beirut", phone: "+961 1 800 991" },
  { name: "Dora", phone: "Coming Soon" },
  { name: "Hazmieh", phone: "Coming Soon" },
  { name: "Tripoli", phone: "Coming Soon" },
  { name: "Saida", phone: "Coming Soon" },
  { name: "Bickfaya", phone: "Coming Soon" },
  { name: "Hamra, Beirut", phone: "Coming Soon" },
];

function Locations() {
  return (
    <section id="locations" className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="gold-divider text-xs uppercase tracking-[0.35em]">Our Locations</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-display">14 doors. One welcome.</h2>
          <p className="mt-5 text-cocoa/70 font-light">
            From Byblos to Beirut, find the closest L'Abeille D'Or and step into a kitchen
            that still smells of orange blossom and warm sugar.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {branches.map((b, i) => {
            const soon = b.phone === "Coming Soon";
            return (
              <div
                key={b.name}
                className={`reveal group relative p-6 rounded-sm border transition-all ${
                  soon
                    ? "border-dashed border-bronze/30 bg-cream/50 text-cocoa/55"
                    : "border-border bg-card hover:border-bronze hover:-translate-y-1 shadow-soft"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-bronze">
                      {soon ? "Opening soon" : "Branch"}
                    </div>
                    <h3 className="mt-2 font-display text-xl truncate">{b.name}</h3>
                  </div>
                  <Hex className="h-8 w-8 text-bronze/40 shrink-0" />
                </div>
                <div className="mt-6 pt-4 border-t border-border/70 text-sm font-light">
                  {soon ? <span className="italic">Stay tuned</span> : (
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="hover:text-bronze transition-colors">
                      {b.phone}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const tiles = [heroKnefeh, baklava, knefehCroissant, halawet, icecream, giftbox, chocolates, maamoul, heroKnefeh];
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-cocoa text-ivory overflow-hidden">
      <Hex className="absolute -left-20 -top-20 h-96 w-96 text-bronze-light/10" />
      <Hex className="absolute -right-32 -bottom-32 h-[28rem] w-[28rem] text-bronze-light/10" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center reveal">
          <span className="gold-divider text-xs uppercase tracking-[0.35em] text-bronze-light">@labeilledor</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-display">Follow Our Sweetness</h2>
          <p className="mt-5 text-ivory/65 font-light max-w-xl mx-auto">
            Daily snapshots from our kitchens, counters, and the hands behind every tray.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto">
          {tiles.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/labeilledor"
              target="_blank"
              rel="noreferrer"
              className="reveal group relative aspect-square overflow-hidden"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/50 transition-colors grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://instagram.com/labeilledor" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-bronze-light text-sm uppercase tracking-[0.3em] border-b border-bronze-light/40 pb-1 hover:border-bronze-light">
            Visit our Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

function Gifting() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
          <img src={giftbox} alt="Gift box" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cocoa/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-ivory">
            <div className="text-[10px] uppercase tracking-[0.3em] text-bronze-light">Airport-Ready</div>
            <div className="font-display text-2xl mt-1">Sealed for the journey.</div>
          </div>
        </div>

        <div className="reveal">
          <span className="gold-divider text-xs uppercase tracking-[0.35em]">Gifts & Catering</span>
          <h2 className="mt-6 text-4xl sm:text-6xl font-display leading-tight">
            Perfect for events, gifts, and the long flight home.
          </h2>
          <p className="mt-6 text-cocoa/75 font-light text-lg leading-relaxed">
            Every box is hand-wrapped in our cream-and-bronze packaging, sealed
            for travel, and ready to carry the taste of Lebanon to anyone, anywhere.
            For weddings, holidays, corporate gifts, or simply a Tuesday made sweeter.
          </p>

          <ul className="mt-8 space-y-3 text-cocoa/80">
            {["Hand-wrapped luxury packaging", "Airport-sealed for international travel", "Custom corporate & event catering", "Personal gifting from a single box to hundreds"].map(t => (
              <li key={t} className="flex items-center gap-3">
                <Hex className="h-4 w-4 text-bronze" />
                <span className="font-light">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#locations" className="rounded-full bg-bronze text-ivory px-7 py-3.5 text-sm font-medium tracking-wide shadow-soft hover:bg-cocoa transition-colors">
              Inquire About Catering
            </a>
            <a href="mailto:info@labeilledor.com" className="rounded-full border border-bronze text-bronze px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-bronze hover:text-ivory transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-cocoa text-ivory pt-20 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 honeycomb-bg opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-12 w-12 rounded-full bg-bronze text-ivory">
              <Bee className="h-7 w-7" />
            </span>
            <div>
              <div className="font-display text-2xl">L'Abeille D'Or</div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-bronze-light">Since 1991</div>
            </div>
          </div>
          <p className="mt-6 text-ivory/65 font-light max-w-sm leading-relaxed">
            The taste of happiness, hand-made in Lebanon since 1991. Fourteen branches,
            one promise — freshness, every single day.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-bronze-light mb-5">Quick Links</div>
          <ul className="space-y-3 text-ivory/80 font-light">
            {[["About", "#about"], ["Our Sweets", "#sweets"], ["Reviews", "#reviews"], ["Locations", "#locations"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-bronze-light transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-bronze-light mb-5">Follow</div>
          <ul className="space-y-3 text-ivory/80 font-light">
            <li><a href="https://instagram.com/labeilledor" target="_blank" rel="noreferrer" className="hover:text-bronze-light">Instagram · @labeilledor</a></li>
            <li><a href="https://facebook.com/labeilledorlebanon" target="_blank" rel="noreferrer" className="hover:text-bronze-light">Facebook · @labeilledorlebanon</a></li>
            <li><a href="mailto:info@labeilledor.com" className="hover:text-bronze-light">info@labeilledor.com</a></li>
          </ul>
        </div>
      </div>

      <div className="relative mt-16 pt-8 border-t border-ivory/10 text-center text-xs tracking-wider text-ivory/50">
        © {new Date().getFullYear()} L'Abeille D'Or. Since 1991. Lebanon.
      </div>
    </footer>
  );
}
