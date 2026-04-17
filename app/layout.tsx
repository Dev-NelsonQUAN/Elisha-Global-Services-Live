import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SocketProvider } from "@/context/SocketContext";
import { AuthProvider } from "@/context/AuthContext"; // <-- NEW IMPORT

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Elisha Global Limited",
    default:
      "Elisha Global Limited - Logistics & Travel for Nigeria & Portugal",
  },
  description:
    "Your trusted partner for logistics, shipping, visa applications, airport transfers, and travel services connecting Nigeria and Portugal.",

  keywords: [
    "logistics Nigeria Portugal",
    "visa assistance",
    "airport transfer Lagos",
    "shipping to Lisbon",
    "Elisha Global Services",
    "document processing Nigeria",
  ],

  openGraph: {
    title: "Elisha Global Limited | Seamless Logistics & Travel",
    description:
      "Your trusted partner for shipping, visa applications, and travel services between Nigeria and Portugal.",
    url: "https://elisha-global-services.vercel.app",
    siteName: "Elisha Global Limkited",
    images: [
      {
        url: "https://elisha-global-services.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elisha Global Limited | Seamless Logistics & Travel",
    description:
      "Your trusted partner for shipping, visa applications, and travel services between Nigeria and Portugal.",
    images: ["https://elisha-global-services.vercel.app/og-image.png"],
  },

  verification: {
    google: "google-site-verification: google5102b8fe3b44f9b4.html",
  },
  alternates: {
    canonical: "https://elisha-global-services.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SocketProvider>
            <AuthProvider>{children}</AuthProvider>
          </SocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
