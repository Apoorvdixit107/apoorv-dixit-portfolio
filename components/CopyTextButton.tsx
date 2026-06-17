"use client";

import type { ButtonHTMLAttributes } from "react";
import { toast } from "@/components/toast";

type CopyTextButtonProps = {
  text: string;
  successMessage?: string;
  errorMessage?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function CopyTextButton({
  text,
  successMessage = "Copied to clipboard.",
  errorMessage = "Could not copy to clipboard.",
  className,
  children,
  onClick,
  ...props
}: CopyTextButtonProps) {
  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    try {
      await navigator.clipboard.writeText(text);
      toast.success(successMessage);
    } catch {
      toast.error(errorMessage);
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
