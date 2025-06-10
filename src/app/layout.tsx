import type { Metadata } from "next";
import { VT323, Kiwi_Maru } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

const kiwiMaru = Kiwi_Maru({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-kiwi-maru",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hirodesu.com"),
  title: "hirodesu.com",
  description: "hirodesuの個人サイト",
  authors: [{ name: "Hiromu Ogata" }],
  creator: "Hiromu Ogata",
  publisher: "Hiromu Ogata",

  // Open Graph (SNSシェア用)
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hirodesu.com",
    siteName: "hirodesu.com",
    title: "hirodesu.com",
    description: "hirodesuの個人サイト",
    images: [
      {
        url: "/icon.webp",
        width: 350,
        height: 350,
        alt: "Hiromu Ogata Profile",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "hirodesu.com",
    description: "hirodesuの個人サイト",
    images: ["/icon.webp"],
  },

  // ファビコン設定
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${vt323.variable} ${kiwiMaru.variable}`}>
        {children}
      </body>
    </html>
  );
}
