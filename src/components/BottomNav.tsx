import { useEffect, useMemo, useState } from "react";
import {
  Home,
  Info,
  Cog,
  ShoppingBag,
  Images,
  Newspaper,
} from "lucide-react";

const sections = ["home", "about", "services", "shop", "portfolio", "blog"] as const;

type SectionId = (typeof sections)[number];

const NAV_ITEMS: { id: SectionId; label: string; icon: React.ComponentType<any> }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Services", icon: Cog },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "portfolio", label: "Portfolio", icon: Images },
  { id: "blog", label: "Blog", icon: Newspaper },
];

export default function BottomNav() {
  const [active, setActive] = useState<SectionId>("home");

  const observer = useMemo(() =>
    typeof window !== "undefined"
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id") as SectionId | null;
                if (id && sections.includes(id)) setActive(id);
              }
            });
          },
          { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.6, 1] }
        )
      : null,
    []
  );

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    els.forEach((el) => observer?.observe(el));
    return () => {
      els.forEach((el) => observer?.unobserve(el));
      observer?.disconnect();
    };
  }, [observer]);

  const onNavigate = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav className="nav-glass w-full max-w-3xl rounded-2xl px-3 py-2 shadow-2xl animate-fade-in">
        <ul className="grid grid-cols-6 gap-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id} className="relative">
                <button
                  aria-label={label}
                  onClick={() => onNavigate(id)}
                  className={`group flex w-full flex-col items-center justify-center rounded-xl px-2 py-2 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  } ${isActive ? "scale-105" : "hover:scale-105"}`}
                >
                  <Icon className="mb-0.5 h-5 w-5" />
                  <span className="text-[0.7rem] font-medium">{label}</span>
                </button>
                {isActive && (
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-accent/70 blur-[2px]" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
