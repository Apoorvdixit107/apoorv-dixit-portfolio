import { ToastProvider } from "@/components/toast";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://apoorvdixit107.github.io/apoorv-dixit-portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Apoorv Dixit | Backend Software Engineer",
  description:
    "Apoorv Dixit is a Backend Software Engineer specializing in Java 17, Spring Boot, AWS, Redis, secure APIs, microservices, and scalable cloud-native backend systems.",
  authors: [{ name: "Apoorv Dixit" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
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
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
