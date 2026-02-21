import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://good-and-pure.vercel.app"),
  title: "Good & Pure | Golden Drops of Tradition",
  description: "Ultra-premium cold pressed mustard oil, extracted using traditional wooden ghani. Pure, nutrient-rich, and chemical-free.",
  keywords: ["cold pressed mustard oil", "wooden ghani oil", "pure oil", "mustard oil india", "traditional extraction"],
  authors: [{ name: "Anubhav" }],
  openGraph: {
    title: "Good & Pure | Golden Drops of Tradition",
    description: "Ultra-premium cold pressed mustard oil, extracted using traditional wooden ghani. Pure and nutrient-rich.",
    url: "https://good-and-pure.vercel.app",
    siteName: "Good & Pure",
    images: [
      {
        url: "/icons/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Good & Pure Premium Mustard Oil",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good & Pure | Golden Drops of Tradition",
    description: "Ultra-premium cold pressed mustard oil, extracted using traditional wooden ghani.",
    images: ["/icons/twitter-card.jpg"],
    creator: "@anubhav",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icons/apple-touch-icon.png",
      },
    ],
  },
  other: {
    "whatsapp-image": "https://good-and-pure.vercel.app/icons/whatsapp-thumb.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
