"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { href: string; label: string };

export function SiteNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute left-4 right-4 top-5 z-30 flex items-center justify-between gap-3 sm:left-6 sm:right-6 sm:top-7 md:left-[6vw] md:right-[6vw]">
        <a href="#home" className="relative z-30 shrink-0 text-sm font-extrabold sm:text-base">
          Apoorv Dixit
        </a>

        <div className="relative z-30 hidden items-center gap-5 text-sm font-semibold text-white/80 md:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-teal-200">
              {item.label}
            </a>
          ))}
        </div>

        <div className="relative z-30 flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-lg text-white transition hover:bg-teal-300/20 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-20 bg-black/60 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-4 right-4 top-[4.75rem] z-30 max-h-[70vh] overflow-y-auto rounded-xl border border-white/20 bg-[#0a161b]/95 p-3 shadow-xl backdrop-blur md:hidden">
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
