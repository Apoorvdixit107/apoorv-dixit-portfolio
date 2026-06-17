"use client";

import { CopyTextButton } from "@/components/CopyTextButton";

const EMAIL = "apoorv.dixit.developer@gmail.com";
const PHONE = "+91 8130455129";

type ContactActionsProps = {
  resumeHref: string;
};

export function ContactActions({ resumeHref }: ContactActionsProps) {
  return (
    <div className="flex flex-wrap content-start gap-2 md:justify-end">
      <a
        className="rounded-lg border border-teal-300 bg-teal-300 px-4 py-3 font-black text-teal-950"
        href="https://wa.me/918130455129?text=Hi%20Apoorv%2C%20I%20want%20to%20discuss%20backend%20development%20services."
        target="_blank"
        rel="noreferrer"
      >
        Discuss Project
      </a>
      <a className="rounded-lg border border-white/20 px-4 py-3 font-black" href="tel:+918130455129">
        {PHONE}
      </a>
      <CopyTextButton
        text={PHONE}
        successMessage="Phone number copied."
        className="rounded-lg border border-white/20 px-4 py-3 font-black transition hover:bg-white/10"
      >
        Copy Phone
      </CopyTextButton>
      <a className="rounded-lg border border-white/20 px-4 py-3 font-black" href={`mailto:${EMAIL}`}>
        Email
      </a>
      <CopyTextButton
        text={EMAIL}
        successMessage="Email address copied."
        className="rounded-lg border border-white/20 px-4 py-3 font-black transition hover:bg-white/10"
      >
        Copy Email
      </CopyTextButton>
      <a className="rounded-lg border border-white/20 px-4 py-3 font-black" href={resumeHref} target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  );
}
