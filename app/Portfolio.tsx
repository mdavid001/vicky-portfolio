"use client";
import { useEffect, useState } from "react";

// A Google Drive folder with more of her work. Shown under the grid. Set to "" to hide it.
const MORE_WORK_URL = "https://drive.google.com/drive/folders/1-9-xRJgjYO9ToSi96IXYludl0qxPTSl7?usp=sharing"; // TODO: her real folder link

// image: "/samples/name.png" (file in /public/samples). Tall screenshots are fine, see notes below.
// drive: optional Google Drive link for more of THIS project. Falls back to MORE_WORK_URL.
type Work = { title: string; tool: string; summary: string; image?: string; drive?: string };
const works: Work[] = [
  { title: "GlowMuse Skincare flows", tool: "Klaviyo", summary: "Draft welcome, post-purchase and replenishment flows, with triggers, time delays, conditional splits, customer journey planning and email copy.", image: "/samples/klaviyo.png", drive: "https://drive.google.com/drive/folders/1iFYibOoxlQYe0umaSEJLRtJABRkWWNIj?usp=sharing" },
  { title: "HubSpot workflow automation", tool: "HubSpot", summary: "Workflows built with triggers, conditions and branch logic that send contacts down different paths based on set criteria.", image: "/samples/hubspot.jpg ", drive: "https://drive.google.com/drive/folders/1g2xyjo4wC4n3lOGbHE5nsZfIbqfwYalu?usp=sharing"},
  { title: "Campaign samples", tool: "Copywriting", summary: "Promotional email samples with copy, subject lines, preview text and calls to action.", image:"/samples/copywright.png", drive:"https://drive.google.com/file/d/1nh3zseq23USRIW_Fp0043eJH-2BHTLgd/view?usp=sharing" },
  { title: "Domain authentication", tool: "MailerLite", summary: "Completed email domain authentication, working with domain settings and DNS records.", image: "/samples/mailerlite.png", drive: "https://drive.google.com/drive/folders/1I2Ls8-q4Acu15_HQFjBy27bAq38QmQhC?usp=sharing" },
];

export default function Portfolio() {
  const [open, setOpen] = useState<Work | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const link = open ? open.drive || MORE_WORK_URL : "";
  const btn = "inline-block rounded-full px-6 py-2";
  return (
    <>
      {/* Cards crop tall screenshots to the top; the pop-up shows the whole image */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {works.map((w) => (
          <button key={w.title} onClick={() => setOpen(w)} className="text-left">
            <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-cream">
              {w.image
                ? <img src={w.image} alt={w.title} className="h-full w-full object-cover object-top" />
                : <span className="text-sm text-forest/50">Sample image</span>}
            </div>
            <p className="mt-3 font-serif text-lg">{w.title}</p>
            <p className="text-sm text-gold">{w.tool} · view details</p>
          </button>
        ))}
      </div>
      {MORE_WORK_URL && (
        <a href={MORE_WORK_URL} target="_blank" rel="noopener noreferrer" className={`${btn} mt-10 border border-gold text-cream hover:bg-cream/10`}>
          See more of my work on Google Drive
        </a>
      )}
      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4">
          <div onClick={(e) => e.stopPropagation()} className="grid max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-cream text-charcoal md:grid-cols-2 md:overflow-hidden">
            {/* full-length image, scrolls inside this box */}
            <div className="max-h-[45vh] overflow-y-auto bg-blush md:max-h-[90vh]">
              {open.image
                ? <img src={open.image} alt={open.title} className="w-full" />
                : <div className="flex min-h-64 items-center justify-center text-sm text-forest/50">Sample image</div>}
            </div>
            <div className="p-8 md:max-h-[90vh] md:overflow-y-auto">
              <h3 className="font-serif text-3xl text-forest">{open.title}</h3>
              <p className="mt-1 text-gold">{open.tool}</p>
              <p className="mt-5">{open.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {link && <a href={link} target="_blank" rel="noopener noreferrer" className={`${btn} bg-forest text-cream`}>
                  {open.drive ? "See more of this project" : "See more on Google Drive"}
                </a>}
                <button onClick={() => setOpen(null)} className={`${btn} border border-forest text-forest`}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
