import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { HeaderAuth } from "@/components/header-auth";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkShortner | Shorten URLs, Amplify Impact",
  description:
    "Turn long URLs into short, shareable links. Track analytics, customize domains, and optimize your links with LinkShortner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <header className="flex items-center justify-end gap-3 border-b border-zinc-200 px-6 py-4 text-sm dark:border-zinc-800">
            <HeaderAuth />
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
