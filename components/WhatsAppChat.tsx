export function WhatsAppChat() {
  return (
    <a
      className="fixed bottom-4 right-4 z-20 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white/70 bg-[#25d366] px-3 pr-4 font-black text-[#0b2f1a] shadow-[0_18px_45px_rgba(37,211,102,0.36)] transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(37,211,102,0.46)] sm:bottom-6 sm:right-6 sm:min-h-[54px]"
      href="https://wa.me/918130455129?text=Hi%20Apoorv%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20backend%20development%20services."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Apoorv on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16.03 3.2A12.7 12.7 0 0 0 5.25 22.62L3.6 28.8l6.33-1.61A12.7 12.7 0 1 0 16.03 3.2Zm0 2.36a10.34 10.34 0 0 1 8.79 15.82 10.35 10.35 0 0 1-13.86 3.46l-.43-.26-3.76.96.98-3.64-.28-.45A10.34 10.34 0 0 1 16.03 5.56Zm-5.2 5.6c-.25.56-.52 1.43-.52 2.24 0 .8.41 1.58.58 1.82.18.24 1.6 2.56 3.93 3.55 1.94.84 2.38.77 2.8.72.43-.04 1.39-.56 1.58-1.1.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.47-.28-.25-.13-1.45-.72-1.68-.8-.22-.08-.38-.13-.55.12-.16.24-.63.8-.77.96-.14.17-.28.19-.52.06-.25-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.17 0-.43.06-.65.3-.22.25-.85.84-1.04 1.4Z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
