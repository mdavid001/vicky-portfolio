"use client";
import { useEffect, useState } from "react";

export default function CvViewer({ cv }: { cv: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-full border border-forest px-7 py-3 text-forest">View CV</button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Curriculum vitae" onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4">
          <div onClick={(e) => e.stopPropagation()} className="flex h-[90vh] w-full max-w-4xl flex-col bg-cream">
            <iframe src={`${cv}#view=FitH`} title="Adaeze Victoria Simon CV" className="w-full flex-1" />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gold/40 p-4">
              <a href={cv} target="_blank" rel="noopener noreferrer" className="text-sm text-forest underline">Not displaying? Open in a new tab</a>
              <div className="flex gap-3">
                <a href={cv} download className="rounded-full bg-forest px-6 py-2 text-cream">Download CV</a>
                <button onClick={() => setOpen(false)} className="rounded-full border border-forest px-6 py-2 text-forest">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
