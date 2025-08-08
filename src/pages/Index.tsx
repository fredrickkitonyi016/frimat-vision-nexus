import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Cpu, Rocket, Shield, ShoppingCart, Activity, Bug, ShieldAlert, Eye, Lock, KeyRound, Cloud, Network, AlertTriangle } from "lucide-react";

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
      <header id="home" className="bg-tech-hero">
        <div className="container min-h-[70vh] md:min-h-[78vh] flex flex-col items-center justify-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md">
            <Shield className="h-3.5 w-3.5" /> Secure. Scalable. Smart.
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold leading-tight font-display">
            FRIMAT TECHNOLOGIES
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
            Connecting Innovation. Delivering Solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button variant="cta" size="xl">
              Get Started
            </Button>
            <Button variant="glass" size="xl">
              Sign Up
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
              <Rocket className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-medium">Innovation First</h3>
              <p className="mt-2 text-sm text-muted-foreground">We combine cutting-edge research with practical engineering to accelerate growth.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
              <Shield className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-medium">Enterprise-Grade</h3>
              <p className="mt-2 text-sm text-muted-foreground">Security and reliability are built-in, not bolted on.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
              <Cpu className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-lg font-medium">AI-Native</h3>
              <p className="mt-2 text-sm text-muted-foreground">We leverage AI to deliver smarter workflows and better user experiences.</p>
            </div>
          </div>
        </Section>

        <Section id="services" title="Cybersecurity Services" subtitle="Protect, detect, and respond — comprehensive security for modern organizations.">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Threat Intelligence", icon: Activity, desc: "Proactive intel on emerging threats and IOCs." },
              { title: "Penetration Testing", icon: Bug, desc: "Red-team style testing for web, API, mobile, and network." },
              { title: "Vulnerability Management", icon: ShieldAlert, desc: "Continuous scanning, prioritization, and remediation." },
              { title: "SOC Monitoring (SIEM/XDR)", icon: Eye, desc: "24/7 detection, alert triage, and response playbooks." },
              { title: "Incident Response (DFIR)", icon: AlertTriangle, desc: "Containment, forensics, and rapid recovery." },
              { title: "Cloud Security", icon: Cloud, desc: "Hardening for AWS/Azure/GCP with guardrails and policy-as-code." },
              { title: "Identity & Access (IAM)", icon: KeyRound, desc: "SSO/MFA, least-privilege, and privileged access workflows." },
              { title: "Zero Trust Architecture", icon: Lock, desc: "Segment, verify, and enforce continuous trust evaluation." },
              { title: "Network Security", icon: Network, desc: "Firewalling, microsegmentation, and secure connectivity." },
            ].map((s) => (
              <article key={s.title} className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-md hover:shadow-xl transition-shadow">
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {["Fintech Dashboard","IoT Platform","AI Copilot","E‑Commerce Infra","Analytics Hub","Data Mesh"]
              .map((name) => (
              <figure key={name} className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur-md">
                <div className="aspect-[4/3] w-full rounded-lg bg-secondary/50" />
                <figcaption className="mt-3 text-sm text-muted-foreground">{name}</figcaption>
              </figure>
            ))}
          </div>
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
      </main>
    </div>
  );
}
