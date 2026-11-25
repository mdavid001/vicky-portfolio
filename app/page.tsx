import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import CvViewer from "./CvViewer";
import ImageGallery from "./ImageGallery";

const C = {
  name: "Adaeze Victoria Simon",
  email: "hello@victoriasimonmarketing.com",
  phone: "+2348062812029",
  linkedin: "https://www.linkedin.com/in/adaeze-victoria-3a9b67350", 
  cv: "/Adaeze-Victoria-Simon-CV.pdf",
};
const services = [
  { i: "mail", t: "Email campaigns & newsletters", d: ["Promotional emails, newsletters and seasonal campaigns", "Product launches, subject lines, preview text and calls to action", "Email copy that reflects your brand voice"] },
  { i: "flow", t: "Email automation & flows", d: ["Welcome email sequences", "Abandoned-checkout and browse-abandonment flows", "Post-purchase, replenishment and win-back emails", "Customer retention and repeat-purchase automation"] },
  { i: "users", t: "Segmentation & personalization", d: ["Organizing subscribers into relevant groups", "Using customer data and engagement to personalize messages", "Targeted emails for different customer journeys"] },
  { i: "pen", t: "Email copywriting", d: ["Subject lines and preview text", "Promotional and product-focused copy", "Welcome, follow-up and retention emails"] },
  { i: "shield", t: "Domain authentication & DNS setup", d: ["Email authentication and DNS record configuration", "SPF, DKIM and DMARC setup", "Reviewing domain settings and spotting configuration issues"] },
  { i: "chart", t: "Performance & optimization", d: ["Reviewing campaign performance data", "Finding ways to improve clicks and conversions", "A/B testing subject lines, messaging and calls to action"] },
];
const icons: Record<string, JSX.Element> = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  flow: <><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12A9 9 0 0 1 18.5 5.8" /><path d="M18 2v4h-4M6 22v-4h4" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17.5" cy="9" r="2.5" /><path d="M17.5 14c2.6 0 4 1.8 4 4.5" /></>,
  pen: <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />,
  shield: <><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="m8 15 4-4 3 3 5-6" /></>,
};
const steps = [
  ["Understand", "Learn about your business, audience, products and goals."],
  ["Plan", "Identify the campaigns, segments and workflows you need."],
  ["Create & set up", "Develop email copy, campaign structures and automation logic."],
  ["Test & review", "Check links, content, triggers, timing and workflow conditions."],
  ["Improve", "Use available performance data to find opportunities for improvement."],
];
const tools = [["Klaviyo", "e-commerce campaigns, flows, segmentation"], ["HubSpot", "email marketing, workflows, branch logic"], ["MailerLite", "newsletters, automation, domain authentication"], ["Canva", "email graphics and visual assets"]];
// Images go in /public/certificates/. Edit the caption text under each one.
const certs = [
  { src: "/certificates/hubspot.jpg", caption: "HubSpot Academy: Email Marketing" },
  { src: "/certificates/klaviyo.jpg", caption: "Klaviyo Practitioner" },
  { src: "/certificates/copywriting.jpg", caption: "Copywriting (Udemy)" },
  { src: "/certificates/vsavvy.jpg", caption: "Virtual Assistant (VSavvy Academy)" },
];
// Testimonial images go in /public/testimonials/. Add or remove entries as needed.
const testimonials = [
  { src: "/testimonials/1.jpg", alt: "'Simon has contributed to data mining and B2B lead generation, including identifying potential business prospects and researching relevant company and contact information'" },
];
const nav = [["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["FAQ", "#faq"], ["Contact", "#contact"]];
// TODO: replace these placeholders with the real questions and answers
const faqs = [
  { q: "What email marketing services do you offer?", a: "I help e-commerce brands create and manage effective email marketing strategies through email campaigns, automated flows, audience segmentation, email copywriting, and email design." },
  { q: "Do you specialize in beauty and e-commerce brands?", a: "Yes. My primary focus is beauty and e-commerce brands, particularly skincare, cosmetics, and haircare businesses. I also welcome projects from other e-commerce industries." },
  { q: "Which email marketing platforms do you work with?", a: "I work with Klaviyo, HubSpot, and MailerLite, depending on the client's business needs and existing email marketing setup." },
  { q: "Can you create and set up automated email flows?", a: "Yes. I can help create and set up automated email flows such as welcome series, abandoned cart, browse abandonment, post-purchase, replenishment, and win-back flows." },
  { q: "Do you design emails as well as write the content?", a: "Yes. I work on email copywriting and visual email design to create campaigns that communicate your brand message clearly and encourage subscribers to take action." },
  { q: "Can you work with my existing email marketing account?", a: "Yes. I can work with your existing email marketing platform, review your current setup, and help improve your campaigns, automations, and audience segmentation.." },
  { q: "Do you offer one-time projects or ongoing support?", a: "I can work on individual projects, such as email campaign creation and automation setup, as well as ongoing email marketing support, depending on your business needs." },
  { q: "How do we get started?", a: "Simply get in touch through the contact form and tell me a little about your brand and email marketing needs. I'll review your enquiry and respond with the next steps." },
  { q: "How much do your services cost?", a: "Pricing depends on the type of service, project requirements, and scope of work. Get in touch with details about what you need, and I'll provide a suitable quote." },
];
const pill = "rounded-full border border-gold bg-blush px-5 py-2 text-sm text-forest";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-10 border-b border-gold/30 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                    <a href="#"><img src="/logo-horizontal.png" alt={C.name} className="h-12 w-auto md:h-16" /></a>
          <nav className="hidden gap-8 text-sm md:flex">{nav.map(([l, h]) => <a key={h} href={h} className="hover:text-gold">{l}</a>)}</nav>
          <a href="#contact" className="rounded-full bg-forest px-5 py-2 text-sm text-cream">Get in touch</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div>
          <h1 className="font-serif text-5xl leading-[1.05] text-forest md:text-7xl">Emails that turn customers into repeat buyers.</h1>
          <p className="mt-6 max-w-lg text-lg">Strategic email campaigns, automation and segmentation for beauty, skincare, cosmetics, haircare and fashion brands.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="rounded-full bg-forest px-7 py-3 text-cream">Explore my services</a>
            <CvViewer cv={C.cv} />
          </div>
          <p className="mt-10 font-script text-3xl text-gold">Strategic emails. Real business growth.</p>
        </div>
        {/* her photo: save as /public/adaeze.jpg */}
        <img src="/adaeze.jpg" alt="Adaeze Victoria Simon" className="aspect-[3/4] w-full rounded-t-full bg-blush object-cover" />
      </section>

      <section id="about" className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="font-serif text-4xl text-forest">Hi, I’m Adaeze.</h2>
        <p className="mt-5 text-lg">Your email list should do more than collect subscribers. It should help you welcome new subscribers, recover abandoned purchases, introduce products, and encourage customers to buy again.</p>
        <p className="mt-4">I help e-commerce brands, especially beauty, skincare, cosmetics, haircare and fashion businesses, create email campaigns and automated customer journeys using Klaviyo, HubSpot and MailerLite. Whether you need a campaign, welcome sequence, abandoned-cart flow or customer retention emails, I focus on purposeful messages that connect with customers at the right stage of their journey.</p>
      </section>

      <section id="services" className="bg-blush py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-4xl text-forest">What I can help with</h2>
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="border-t border-gold pt-5">
                <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-forest" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{icons[s.i]}</svg>
                <h3 className="mt-4 font-serif text-xl text-forest">{s.t}</h3>
                <ul className="mt-3 space-y-1.5 text-sm">{s.d.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-4xl">Practical experience</h2>
          <p className="mt-2 max-w-2xl text-cream/75">My portfolio projects are demonstrations of my skills, not paid client campaigns. Select a project to see more.</p>
          <Portfolio />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-4xl text-forest">Tools</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {tools.map(([n, d]) => <li key={n} className={pill}><b className="font-medium">{n}</b> <span className="text-charcoal/60">{d}</span></li>)}
        </ul>
        <h3 className="mt-12 font-serif text-2xl text-forest">Certifications</h3>
        <div className="mt-6"><ImageGallery items={certs} /></div>
      </section>

      

      <section className="bg-blush py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-4xl text-forest">How I work</h2>
          <ol className="mt-10 grid gap-0 md:grid-cols-5 md:gap-8">
            {steps.map(([t, d], i) => (
              <li key={t} className="relative flex gap-4 md:block md:gap-0">
                <div className="flex flex-col items-center md:items-start">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-forest font-serif text-2xl text-gold">
                    {"ABCDE"[i]}
                  </span>

                  {i < steps.length - 1 && (
                    <span className="my-2 h-8 w-px bg-gold md:hidden" />
                  )}
                </div>

                <div className="pb-8 md:pb-0">
                  <h3 className="font-serif text-xl text-forest">{t}</h3>
                  <p className="mt-2 text-sm">{d}</p>
                </div>

                {i < steps.length - 1 && (
                  <span className="absolute left-12 top-6 hidden h-px w-[calc(100%-1rem)] bg-gold md:block" />
                )}
              </li>
            ))}
          </ol>

        </div>
      </section>



      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center font-serif text-4xl text-forest">Kind words</h2>
        <div className="mt-10">
          <ImageGallery
            items={testimonials.map((t) => ({ src: t.src, caption: t.alt }))}
            showCaptions={false}
            className="grid gap-8 md:grid-cols-2"
          />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-serif text-4xl text-forest">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gold/40 border-y border-gold/40">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl text-forest [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="ml-4 text-2xl text-gold transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-blush py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl text-forest">Let’s improve your email marketing</h2>
          <p className="mt-3">Need help with Klaviyo flows, HubSpot workflows, campaigns, segmentation, copywriting, retention or domain authentication? Tell me what you sell, which email platform you use and what you want your emails to achieve.</p>
          <ContactForm />
        </div>
      </section>
      <footer className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <img src="/logo-horizontal-light.png" alt={C.name} className="h-16 w-auto" />
            <p className="mt-2 text-sm text-cream/70">Email marketing for e-commerce brands.</p>
            <p className="mt-4 font-script text-2xl text-gold">Strategic emails. Real business growth.</p>
          </div>
          <div>
            <p className="font-serif text-lg text-gold">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-serif text-lg text-gold">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={`mailto:${C.email}`} className="hover:text-gold">{C.email}</a></li>
              <li><a href={`tel:${C.phone}`} className="hover:text-gold">📞:{C.phone}</a></li>
              <li><a href={`https://wa.me/${C.phone.replace("+", "")}`} className="hover:text-gold">WhatsApp</a></li>
              {C.linkedin && <li><a href={C.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a></li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/15 py-4 text-center text-xs text-cream/60">© {new Date().getFullYear()} {C.name}</div>
      </footer>
    </main>
  );
}
