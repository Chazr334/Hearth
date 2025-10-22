"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-amber/20 bg-obsidian/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-amber transition hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber/40 bg-iron/40 font-display text-lg">
            HF
          </span>
          <span className="font-display text-2xl uppercase tracking-widest">
            Hearthfire
          </span>
        </Link>

        <nav className="site-nav hidden md:ml-10 md:flex md:flex-nowrap">
          {navigationLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "site-nav-link text-xs md:text-sm uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber",
                  active ? "text-amber" : "text-bone/80"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className="h-7 w-7 text-amber" />
          ) : (
            <Menu className="h-7 w-7 text-amber" />
          )}
        </button>
      </div>
      <MobileNav open={open} pathname={pathname} />
    </header>
  );
}

interface MobileNavProps {
  open: boolean;
  pathname: string;
}

function MobileNav({ open, pathname }: MobileNavProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="border-t border-amber/20 bg-obsidian/95 md:hidden">
      <nav
        id="mobile-navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6"
      >
        {navigationLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="site-nav-link w-full justify-start text-base uppercase tracking-[0.2em] text-bone/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
