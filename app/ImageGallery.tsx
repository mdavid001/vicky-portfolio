"use client";
import { useEffect, useState } from "react";

type Item = { src: string; caption: string };

export default function ImageGallery({ items, showCaptions = true, className = "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }:
  { items: Item[]; showCaptions?: boolean; className?: string }) {
  const [open, setOpen] = useState<Item | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <ul className={className}>
        {items.map((it) => (
          <li key={it.src}>
            <button onClick={() => setOpen(it)} className="block w-full cursor-zoom-in" aria-label={`View ${it.caption} full size`}>
              <img src={it.src} alt={it.caption} className="w-full border border-gold/40 bg-blush object-contain" />
            </button>
            {showCaptions && <p className="mt-3 text-center text-sm text-forest">{it.caption}</p>}
          </li>
        ))}
      </ul>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.caption} onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-charcoal/90 p-4">
          <img src={open.src} alt={open.caption} onClick={(e) => e.stopPropagation()} className="max-h-[80vh] max-w-full object-contain" />
          <p className="text-center text-cream">{open.caption}</p>
          <button onClick={() => setOpen(null)} className="rounded-full bg-cream px-6 py-2 text-forest">Close</button>
        </div>
      )}
    </>
  );
}
