import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mananjay Daimary | BPF Leader & Political Candidate - Chirang, Assam",
  description:
    "Mananjay Daimary - Political leader representing Chirang district. Dedicated to community development, youth employment, and cultural preservation in Assam.",
  keywords: [
    "Mananjay Daimary",
    "BPF",
    "Bodoland People's Front",
    "Chirang",
    "Assam politics",
    "community development",
    "political leader",
    "Assam leader",
  ],
  authors: [{ name: "Mananjay Daimary" }],
  openGraph: {
    title: "Mananjay Daimary | BPF Leader & Political Candidate",
    description:
      "Political leader representing Chirang constituency. Dedicated to community development and cultural preservation in Assam.",
    type: "website",
    locale: "en_IN",
    siteName: "Mananjay Daimary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mananjay Daimary | BPF Leader - Chirang, Assam",
    description:
      "Political leader dedicated to community development, youth employment, and cultural preservation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
