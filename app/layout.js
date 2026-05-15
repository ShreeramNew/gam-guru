import { Geist, Geist_Mono, Yatra_One, Nunito, Cinzel } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
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

// Added Cinzel for the sophisticated "Sanatan" look
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shlokabhyasa | Gam Guru",
  description:
    "Learn Sanatan Shlokas online. Traditional learning powered by Gam Guru - Sanatan After School",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
