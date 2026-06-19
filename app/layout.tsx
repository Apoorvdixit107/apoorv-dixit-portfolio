import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { ThemeScript } from "@/components/ThemeScript";
import { ToastProvider } from "@/components/toast";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://apoorvdixit107.github.io/apoorv-dixit-portfolio/";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#061114" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Apoorv Dixit | Backend Software Engineer",
  description:
    "Apoorv Dixit is a Backend Software Engineer specializing in Java 17, Spring Boot, AWS, Redis, secure APIs, microservices, and scalable cloud-native backend systems.",
  authors: [{ name: "Apoorv Dixit" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Apoorv Dixit"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Apoorv Dixit | Backend Software Engineer",
    description:
      "Backend Software Engineer building secure, scalable Java/Spring Boot microservices, REST APIs, Redis caching, AWS deployments, and high-throughput distributed systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apoorv Dixit backend software engineer portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorv Dixit | Backend Software Engineer",
    description: "Java 17, Spring Boot, AWS, Redis, secure APIs, microservices, and scalable backend systems.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    apple: `${basePath}/icons/icon-192.png`
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ToastProvider>
          {children}
          <ServiceWorkerRegister />
        </ToastProvider>
      </body>
    </html>
  );
}
