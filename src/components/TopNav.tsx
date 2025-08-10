import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#shop" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <nav className="container flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide hover-scale">FRIMAT TECHNOLOGIES</a>

        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover-scale story-link">
              {l.label}
            </a>
          ))}
          <Button asChild variant="cta" size="sm">
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-4">
                {LINKS.map((l) => (
                  <a key={l.label} href={l.href} className="text-base story-link" aria-label={l.label}>
                    {l.label}
                  </a>
                ))}
                <Button asChild variant="cta" className="mt-2">
                  <a href="#contact">Request a Quote</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
