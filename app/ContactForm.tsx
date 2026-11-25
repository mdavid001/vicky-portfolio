"use client";
import { useState } from "react";

const EMAIL = "hello@victoriasimonmarketing.com";
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!KEY) { setStatus("error"); return; }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: KEY, subject: "New message from your portfolio" }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
      if (json.success) form.reset();
    } catch { setStatus("error"); }
  }
  const field = "w-full border border-gold/60 bg-cream px-4 py-3 text-charcoal";
  return (
    <form onSubmit={submit} className="mx-auto mt-8 grid max-w-xl gap-4 text-left">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label>Your name<input name="name" required className={field} /></label>
      <label>Your email<input name="email" type="email" required className={field} /></label>
      <label>Message
        <textarea name="message" required rows={5} className={field}
          placeholder="What do you sell, which email platform do you use, and what should your emails achieve?" />
      </label>
      <button disabled={status === "sending"} className="rounded-full bg-forest px-7 py-3 text-cream disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" className="text-sm">
        {status === "sent" && "Thank you. Your message was sent and Adaeze will reply by email."}
        {status === "error" && <>Your message was not sent. Please email me directly at <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.</>}
      </p>
    </form>
  );
}
