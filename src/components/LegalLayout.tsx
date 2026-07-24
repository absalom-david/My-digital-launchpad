import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "@/assets/designgeniuslogo.png.asset.json";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand-violet/20 blur-3xl" />
        <div className="animate-blob absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-brand-magenta/15 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="relative">
        <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Design Genius" className="h-9 w-auto" />
            <span className="hidden text-lg font-semibold sm:inline">
              The Design <span className="text-gradient-brand">Genius</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </header>

        <main className="mx-auto max-w-3xl px-6 pb-24 pt-6">
          <div className="ring-gradient rounded-2xl bg-card/70 p-8 shadow-card backdrop-blur-xl sm:p-12">
            <h1 className="text-4xl font-bold sm:text-5xl">
              <span className="text-gradient-brand">{title}</span>
            </h1>
            {updated && (
              <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
            )}
            <div className="prose prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-h2:text-xl prose-p:text-foreground/85 prose-li:text-foreground/85 prose-a:text-brand-magenta max-w-none mt-8 space-y-4 text-sm leading-relaxed text-foreground/85 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
              {children}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/terms" className="transition hover:text-foreground">Terms</Link>
            <span>·</span>
            <Link to="/privacy" className="transition hover:text-foreground">Privacy</Link>
            <span>·</span>
            <Link to="/refund" className="transition hover:text-foreground">Refund</Link>
          </div>
        </main>
      </div>
    </div>
  );
}
