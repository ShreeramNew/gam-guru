import { Geist, Geist_Mono, Yatra_One, Nunito, Cinzel } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yatra = Yatra_One({
  variable: "--font-yatra",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shlokabhyasa | Gam Guru",
  description:
    "Learn Sanatan Shlokas online. Traditional learning powered by Gam Guru - Sanatan After School",
  // FAVICON SETTINGS
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#D4A017",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0909",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yatra.variable} ${nunito.variable} ${cinzel.variable} antialiased bg-[#0a0909] text-[#e5e7eb]`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}