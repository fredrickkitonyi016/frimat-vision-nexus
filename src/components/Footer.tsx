import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

type QuickLink = { label: string; href: string };
const DEFAULT_QUICK_LINKS: QuickLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#shop" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

export default function Footer({ quickLinks }: { quickLinks?: QuickLink[] }) {
  const links = quickLinks ?? DEFAULT_QUICK_LINKS;
  return (
    <footer className="mt-20 border-t border-border bg-card/60" role="contentinfo">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <section className="md:col-span-2">
            <h2 className="text-xl font-semibold">FRIMAT TECHNOLOGIES</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Connecting Innovation. Delivering Solutions.
            </p>

            <div id="contact" className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Machakos, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:frimattechnologies016@gmail.com" className="story-link">frimattechnologies016@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="https://wa.me/254112277289" target="_blank" rel="noopener noreferrer" className="story-link">
                  WhatsApp: 0112277289
                </a>
              </div>
            </div>
          </section>

          <nav aria-label="Quick Links">
            <h3 className="text-sm font-semibold tracking-wide">Quick Links</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover-scale">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <aside>
            <h3 className="text-sm font-semibold tracking-wide">Follow Us</h3>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter/X" href="#" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Twitter className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="#" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Instagram className="h-5 w-5" /></a>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 text-xs text-muted-foreground md:grid-cols-3">
          <p id="privacy">We respect your privacy. Read our policies and terms for details on data handling.</p>
          <p id="terms">Use of this site constitutes acceptance of our Terms of Service.</p>
          <p className="md:text-right">© {new Date().getFullYear()} FRIMAT TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
