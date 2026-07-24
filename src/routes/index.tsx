import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  Check,
  Sparkles,
  Rocket,
  Crown,
  ShieldCheck,
  Clock,
  RefreshCw,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import logoAsset from "@/assets/designgeniuslogo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
});

const portfolio = [
  { title: "Aurora Salon", tag: "Beauty & Wellness", gradient: "linear-gradient(135deg,#a855f7,#ec4899)" },
  { title: "Northwind Autos", tag: "Automotive", gradient: "linear-gradient(135deg,#0ea5e9,#a855f7)" },
  { title: "Bella Bistro", tag: "Restaurant", gradient: "linear-gradient(135deg,#f97316,#ec4899)" },
  { title: "Summit Realty", tag: "Real Estate", gradient: "linear-gradient(135deg,#10b981,#0ea5e9)" },
  { title: "Pulse Fitness", tag: "Health & Fitness", gradient: "linear-gradient(135deg,#ec4899,#f97316)" },
  { title: "Loom Boutique", tag: "E-Commerce", gradient: "linear-gradient(135deg,#8b5cf6,#22d3ee)" },
];

const testimonials = [
  {
    quote:
      "Best social media services by my buddies, they are the best. Excellent customer support — they noted each of my requirements and suggested accordingly. I highly appreciate their hard work!",
    name: "Sean Dawson",
    role: "Music Producer",
  },
  {
    quote:
      "The Design Genius created a great website for my small business. Ever since I started my business I wanted a beautiful website — you guys did an amazing job!",
    name: "Eric Cooper",
    role: "Owner, Brand Store",
  },
  {
    quote:
      "My website was completed so quickly — beyond my imagination. Delivered in two to three days and they made sure I was completely satisfied at every step.",
    name: "Bill Richards",
    role: "Construction Consultant",
  },
  {
    quote:
      "A perfect logo! The team was patient and gave the best design advice I could ever ask for. Thanks for creating such a great logo.",
    name: "John Felex",
    role: "CEO, Marketing Agency",
  },
  {
    quote:
      "They created a brilliant animation for my social media page — I was amazed. With just a few ideas from me they built something extraordinary.",
    name: "Peter Marshall",
    role: "Garage Owner",
  },
  {
    quote:
      "I'm glad I chose The Design Genius for my logo. They not only delivered on time but created the best logo for my salon. So thankful!",
    name: "Bella Whiterose",
    role: "Beauty Salon Owner",
  },
];

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 149,
    tagline: "Perfect for individuals & small businesses",
    icon: Sparkles,
    delivery: "5–7 business days",
    features: [
      "Up to 4 custom designed pages",
      "Professional & modern design",
      "Mobile responsive layout",
      "Contact form",
      "Photo gallery",
      "Social media integration",
      "Google Maps integration",
      "Basic content upload",
      "Cross-browser compatibility",
      "Unlimited design revisions",
      "100% custom design",
      "100% satisfaction guarantee",
    ],
  },
  {
    id: "startup",
    name: "Startup",
    price: 349,
    tagline: "For growing businesses that need more",
    icon: Rocket,
    delivery: "7–10 business days",
    highlighted: true,
    features: [
      "Up to 8 custom designed pages",
      "Premium custom website design",
      "Fully mobile responsive",
      "Contact & inquiry forms",
      "Image gallery",
      "Blog setup",
      "Social media integration",
      "Google Maps integration",
      "Testimonials section",
      "Content upload (client provided)",
      "Cross-browser compatibility",
      "Unlimited design revisions",
      "100% custom design",
      "100% satisfaction guarantee",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 550,
    tagline: "For established businesses that want it all",
    icon: Crown,
    delivery: "10–14 business days",
    features: [
      "Unlimited custom designed pages",
      "Premium design",
      "Fully mobile responsive",
      "Contact & quote request forms",
      "Blog setup",
      "Portfolio / gallery section",
      "Testimonials section",
      "FAQ section",
      "Social media integration",
      "Google Maps integration",
      "Content upload (client provided)",
      "Cross-browser compatibility",
      "Unlimited design revisions",
      "100% custom design",
      "100% satisfaction guarantee",
    ],
  },
];

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  package: z.string().min(1),
  business_name: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Landing() {
  const [selectedPackage, setSelectedPackage] = useState("startup");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      package: selectedPackage,
      business_name: String(fd.get("business_name") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      ...parsed.data,
      business_name: parsed.data.business_name || null,
      message: parsed.data.message || null,
      source: "meta_ads",
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    toast.success("Thanks! We'll reach out within a few hours.");
    form.reset();
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Toaster theme="dark" position="top-center" richColors />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-brand-violet/30 blur-3xl" />
        <div className="animate-blob absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-brand-magenta/25 blur-3xl [animation-delay:-4s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-brand-orange/20 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="relative">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Design Genius" className="h-10 w-auto" />
            <span className="hidden text-lg font-semibold sm:inline">
              The Design <span className="text-gradient-brand">Genius</span>
            </span>
          </a>
          <button
            onClick={scrollToForm}
            className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
          >
            Get a Quote
          </button>
        </header>

        <section className="mx-auto max-w-6xl px-6 pt-10 pb-20 sm:pt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Now booking — limited weekly slots
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              A custom website that <span className="text-gradient-brand">wins customers</span> —
              starting at $149.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Beautiful, mobile-responsive websites hand-designed by our team. Unlimited revisions,
              delivered in days, backed by a 100% satisfaction guarantee.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.03]"
              >
                Claim Your Free Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-base font-semibold backdrop-blur transition hover:bg-white/10"
              >
                See Packages
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {[
                { icon: RefreshCw, label: "Unlimited revisions" },
                { icon: Clock, label: "Delivered in days" },
                { icon: ShieldCheck, label: "100% guarantee" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <div className="rounded-lg bg-gradient-brand p-2 shadow-glow">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "linear-gradient(135deg,#a855f7,#ec4899)",
                  "linear-gradient(135deg,#ec4899,#f97316)",
                  "linear-gradient(135deg,#f97316,#a855f7)",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background"
                    style={{ background: bg }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  Loved by 500+ small business owners
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:col-span-5 lg:mt-0" id="lead-form">
            <div className="ring-gradient rounded-2xl bg-card/80 p-6 shadow-card backdrop-blur-xl sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
                    <Check className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">You're on the list 🎉</h3>
                  <p className="mt-3 text-muted-foreground">
                    We received your request. A Design Genius specialist will reach out within a
                    few hours with your custom quote.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-gradient-brand"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">Get your free quote</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your business — we'll respond within a few hours.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Field label="Full name" name="name" placeholder="Jane Doe" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                    <Field
                      label="Phone / WhatsApp"
                      name="phone"
                      type="tel"
                      placeholder="+1 555 000 0000"
                      required
                    />
                    <Field label="Business name" name="business_name" placeholder="Optional" />

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Choose a package
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {packages.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPackage(p.id)}
                            className={`rounded-lg border p-2 text-center text-xs font-semibold transition ${
                              selectedPackage === p.id
                                ? "border-transparent bg-gradient-brand text-white shadow-glow"
                                : "border-border bg-white/5 text-foreground hover:bg-white/10"
                            }`}
                          >
                            {p.name}
                            <div
                              className={`text-[10px] font-normal ${
                                selectedPackage === p.id ? "text-white/80" : "text-muted-foreground"
                              }`}
                            >
                              ${p.price}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Tell us about your project (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        maxLength={2000}
                        placeholder="What kind of website are you looking for?"
                        className="w-full rounded-lg border border-border bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? "Sending…" : "Submit & Get Free Quote"}
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      No spam. Your details are only used to contact you about your project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Pick the <span className="text-gradient-brand">perfect package</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Transparent pricing. No hidden fees. Every package is 100% custom-designed to match
              your brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((p) => {
              const Icon = p.icon;
              const highlighted = p.highlighted;
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-2xl p-6 shadow-card backdrop-blur-xl sm:p-8 ${
                    highlighted ? "ring-gradient bg-card/90" : "border border-border bg-card/60"
                  }`}
                >
                  {highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-glow">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-brand p-2.5 shadow-glow">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.tagline}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gradient-brand">${p.price}</span>
                    <span className="text-sm text-muted-foreground">one-time</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Delivery in {p.delivery}
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedPackage(p.id);
                      scrollToForm();
                    }}
                    className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      highlighted
                        ? "bg-gradient-brand text-white shadow-glow hover:scale-[1.02]"
                        : "border border-border bg-white/5 text-foreground hover:bg-white/10"
                    }`}
                  >
                    Choose {p.name}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="ring-gradient rounded-2xl bg-card/60 p-8 backdrop-blur-xl sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "500+", l: "Websites launched" },
                { n: "4.9/5", l: "Average client rating" },
                { n: "48h", l: "Average first response" },
                { n: "100%", l: "Satisfaction guaranteed" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-gradient-brand sm:text-4xl">{s.n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* Portfolio */}
        <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" />
              Selected work
            </div>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Websites we've <span className="text-gradient-brand">launched</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A glimpse of the brands we've helped build online — across 40+ industries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 shadow-card backdrop-blur-xl"
              >
                <div
                  className="aspect-[4/3] w-full transition duration-500 group-hover:scale-[1.03]"
                  style={{ background: p.gradient }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="rounded-full bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                      {p.tag}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="text-base font-semibold">{p.title}</div>
                    <div className="text-xs text-muted-foreground">{p.tag}</div>
                  </div>
                  <div className="rounded-full bg-gradient-brand p-2 shadow-glow">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Star className="h-3 w-3 fill-brand-orange text-brand-orange" />
              4.9 / 5 average client rating
            </div>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Our clients simply <span className="text-gradient-brand">love our work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real feedback from small businesses, startups, and creators we've built for.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 shadow-card backdrop-blur-xl"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#a855f7,#ec4899,#f97316)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to build a website that <span className="text-gradient-brand">converts</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let's talk about your project. No commitment, no obligation — just a free consultation
            and a custom quote.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition hover:scale-[1.03]"
          >
            Get My Free Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-black/30 backdrop-blur-xl">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <img src={logoAsset.url} alt="Design Genius" className="h-9 w-auto" />
                <span className="text-lg font-semibold">
                  The Design <span className="text-gradient-brand">Genius</span>
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Custom-designed websites, logos, and branding for startups, SMBs, and enterprises
                across 40+ industries. Unlimited revisions. 100% satisfaction guaranteed.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href="tel:+12109208669"
                  className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                >
                  <Phone className="h-4 w-4" /> (210) 920-8669
                </a>
                <a
                  href="mailto:info@thedesignsgenius.com"
                  className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> info@thedesignsgenius.com
                </a>
                <button
                  onClick={scrollToForm}
                  className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Chat about your project
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Explore</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#packages" className="transition hover:text-foreground">Packages</a></li>
                <li><a href="#portfolio" className="transition hover:text-foreground">Portfolio</a></li>
                <li><a href="#testimonials" className="transition hover:text-foreground">Testimonials</a></li>
                <li><a href="#lead-form" className="transition hover:text-foreground">Get a quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="transition hover:text-foreground">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="transition hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/refund" className="transition hover:text-foreground">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Design Genius · thedesignsgenius.com · All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
