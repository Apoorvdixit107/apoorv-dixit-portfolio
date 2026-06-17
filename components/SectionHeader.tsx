import type { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
};

export function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className="mb-7 grid gap-8 md:grid-cols-[minmax(180px,0.7fr)_minmax(0,1.5fr)]">
      <p className="section-kicker inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-teal-700 dark:text-teal-200">
        {kicker}
      </p>
      <h2 className="text-3xl font-black leading-tight tracking-normal text-slate-900 dark:text-cyan-50 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
