import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Cpu, Rocket, Shield, ShoppingCart, Cloud, Wrench } from "lucide-react";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="section container animate-fade-in">
    <h2 className="section-title text-center font-display">{title}</h2>
    {subtitle && (
      <p className="section-subtitle text-center">{subtitle}</p>
    )}
    {children}
  </section>
);

export default function Index() {
  return (
    <div>
      <header id="home" className="relative isolate">
        <img
          src={heroImage}
          alt="Abstract technology background for FRIMAT TECHNOLOGIES"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        <div className="relative container min-h-[70vh] md:min-h-[78vh] flex flex-col items-center justify-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md">
            <Shield className="h-3.5 w-3.5" /> Secure. Scalable. Smart.
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold leading-tight font-display">
            FRIMAT TECHNOLOGIES
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
            Connecting Innovation. Delivering Solutions.
          </p>
          <p className="mx-auto max-w-3xl text-sm md:text-base text-muted-foreground">
            We build modern, secure and reliable digital solutions that help businesses grow and communities thrive.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="cta" size="xl" asChild>
              <a href="#services">Get Started</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
          <ul className="mt-8 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> AI & Cloud</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Product Engineering</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Enterprise Security</li>
          </ul>
        </div>
      </header>

      <main>
        <Section id="about" title="About" subtitle="We are a modern tech company building secure, scalable, and delightful digital products.">
          <div className="mx-auto max-w-5xl space-y-8">
            <p className="text-sm md:text-base text-muted-foreground text-center">
              FRIMAT TECHNOLOGIES is a product and engineering partner focused on turning ideas into secure, scalable, and user‑friendly software.
            </p>
            <p className="text-sm md:text-base text-muted-foreground text-center">
              Our team covers product strategy, UX, cloud architecture, cybersecurity, data/AI, and DevOps—delivering end‑to‑end from discovery to long‑term support.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
                <Rocket className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-medium">Our Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">Deliver secure, modern solutions that connect people, processes, and opportunity.</p>
              </article>
              <article className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-medium">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">Be a trusted technology partner known for excellence and meaningful impact.</p>
              </article>
              <article className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
                <Cpu className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-medium">Core Values</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Innovation</li>
                  <li>• Reliability</li>
                  <li>• Customer‑Centric Approach</li>
                  <li>• Excellence</li>
                </ul>
              </article>
            </div>
          </div>
        </Section>

        <Section id="services" title="Services" subtitle="What we do best — modern, secure, and scalable solutions.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Web Development", icon: Code2, desc: "High‑performance websites, portals, and e‑commerce with accessibility, SEO, and CMS integration." },
              { title: "Software Development", icon: Cpu, desc: "API‑first systems, integrations, and modern architectures with CI/CD and strong observability." },
              { title: "IT Support & Maintenance", icon: Wrench, desc: "Managed updates, monitoring, backups, and SLAs to keep your systems healthy and secure." },
              { title: "Cybersecurity Solutions", icon: Shield, desc: "Security assessments, hardening, MFA/SSO, incident readiness, and compliance guidance." },
              { title: "Digital Marketing", icon: Rocket, desc: "SEO audits, content strategy, analytics, and campaigns focused on measurable growth." },
              { title: "Cloud Services", icon: Cloud, desc: "Cloud setup, migrations, containerization, cost optimization, and SRE best practices." },
            ].map((s) => (
              <article key={s.title} className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md transition-transform hover:scale-[1.02] hover:shadow-xl">
                <s.icon className="h-6 w-6 text-accent" />
                <h4 className="mt-3 text-lg font-medium">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="shop" title="Shop" subtitle="Tools, templates, and components to accelerate your delivery.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group rounded-xl border border-border bg-card/60 p-5 backdrop-blur-md transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">Tech Pack #{i}</h5>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Premium UI kits and dev templates.</p>
                <Button variant="glass" size="sm" className="mt-4">Add to cart</Button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="portfolio" title="Portfolio" subtitle="A snapshot of recent projects and experiments.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Smart Retail Platform", desc: "POS + inventory with barcode support and real‑time revenue dashboards.", alt: "Smart Retail Platform thumbnail" },
              { name: "E‑Gov Services Portal", desc: "Secure citizen onboarding, payments, and accessible self‑service flows.", alt: "E‑Gov Services Portal thumbnail" },
              { name: "Cloud Migration Suite", desc: "Automated assessments, phased migration, and cost/health monitoring.", alt: "Cloud Migration Suite thumbnail" },
              { name: "AI Support Assistant", desc: "Multilingual chatbot with human handoff and actionable analytics.", alt: "AI Support Assistant thumbnail" },
            ].map((p) => (
              <figure key={p.name} className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-md">
                <img src="/placeholder.svg" alt={p.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover bg-secondary/50" />
                <figcaption className="mt-3">
                  <div className="text-sm font-medium">{p.name}</div>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="glass" size="lg" asChild>
              <a href="#portfolio">View More</a>
            </Button>
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials" subtitle="What our clients say">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { quote: "They delivered exactly what we needed—secure, reliable, and on time. Communication was world‑class.", name: "Amina K." },
              { quote: "Migration to the cloud cut our hosting bill and improved performance without downtime.", name: "John M." },
              { quote: "Their proactive support and security hardening gave us real peace of mind.", name: "Grace W." },
            ].map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md">
                <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                <footer className="mt-3 text-sm font-medium">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <Section id="newsletter" title="Newsletter" subtitle="Join for updates, insights, and offers.">
          <form
            className="mx-auto flex max-w-md items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              // @ts-ignore
              const email = e.currentTarget.email?.value as string;
              if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // Lazy import to avoid hard dependency here; use toast if available
                import("@/components/ui/use-toast").then(({ toast }) => toast({ description: "Please enter a valid email." }));
                return;
              }
              import("@/components/ui/use-toast").then(({ toast }) => toast({ description: "Subscribed! Thank you." }));
              // @ts-ignore
              e.currentTarget.reset();
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex h-12 w-full rounded-md border border-input bg-background px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Email address"
            />
            <Button type="submit" variant="cta" size="lg">Subscribe</Button>
          </form>
        </Section>

        <Section id="blog" title="Blog" subtitle="Insights on engineering, AI, and product.">
          <div className="mx-auto max-w-3xl space-y-4">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
                <h5 className="text-lg font-medium">Designing resilient systems — Part {i}</h5>
                <p className="mt-2 text-sm text-muted-foreground">Thoughts on reliability, performance budgets, and incident response.</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <Code2 className="h-4 w-4" /> 6 min read
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s talk about your project.">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md">
              <h5 className="text-lg font-medium">How we can help</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Discovery workshops and technical audits</li>
                <li>• Prototypes, MVPs, and full product delivery</li>
                <li>• Cloud, security, and performance improvements</li>
                <li>• Ongoing maintenance and on‑call support</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">We typically respond within one business day.</p>
            </article>

            <form
              className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                // @ts-ignore
                const name = e.currentTarget.name?.value as string;
                // @ts-ignore
                const email = e.currentTarget.email?.value as string;
                // @ts-ignore
                const message = e.currentTarget.message?.value as string;
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !name || !message) {
                  import("@/components/ui/use-toast").then(({ toast }) =>
                    toast({ description: "Please complete all fields with a valid email." })
                  );
                  return;
                }
                import("@/components/ui/use-toast").then(({ toast }) =>
                  toast({ description: "Message sent! We’ll get back to you shortly." })
                );
                // @ts-ignore
                e.currentTarget.reset();
              }}
              aria-label="Contact form"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <input id="name" name="name" required className="flex h-12 w-full rounded-md border border-input bg-background px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" name="email" type="email" required className="flex h-12 w-full rounded-md border border-input bg-background px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" name="message" required rows={4} className="flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <Button type="submit" variant="cta" size="lg">Send message</Button>
            </form>
          </div>
        </Section>
      </main>
      <Footer quickLinks={[
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Shop", href: "#shop" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Newsletter", href: "#newsletter" },
        { label: "Blog", href: "#blog" },
        { label: "Contact Us", href: "#contact" },
      ]} />
    </div>
  );
}
