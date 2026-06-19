"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "portfolio-pwa-dismissed";

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;

    const isIos =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as Window & { MSStream?: unknown }).MSStream;

    if (isIos) {
      setShowIosHint(true);
      setVisible(true);
    }

    function handleBeforeInstall(event: Event) {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setVisible(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }

  async function install() {
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-[5.5rem] left-4 right-4 z-30 sm:bottom-[6.25rem] sm:left-auto sm:right-6 sm:max-w-sm">
      <div className="rounded-xl border border-teal-700/30 bg-white p-4 shadow-soft dark:border-teal-300/30 dark:bg-[#0d1f24]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-black text-slate-900 dark:text-cyan-50">Install portfolio app</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {showIosHint
                ? "On iPhone: tap Share, then Add to Home Screen for quick access."
                : "Add this portfolio to your home screen for one-tap access."}
            </p>
          </div>
          <button
            type="button"
            aria-label="Dismiss install prompt"
            className="shrink-0 text-lg leading-none text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
            onClick={dismiss}
          >
            ✕
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {installEvent ? (
            <button
              type="button"
              onClick={install}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-teal-700 bg-teal-700 px-4 text-sm font-black text-white transition hover:bg-teal-600 dark:border-teal-300 dark:bg-teal-300 dark:text-teal-950"
            >
              Install App
            </button>
          ) : null}
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-black text-slate-700 transition hover:border-teal-700 dark:border-slate-700 dark:text-slate-200"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
