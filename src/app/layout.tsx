import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXE Dispatch | Professional Truck Dispatching Services",
  description: "Expert truck dispatch services for owner-operators and small fleets. We handle the paperwork while you drive. Best loads, higher rates, and 24/7 support.",
  keywords: "truck dispatch, dispatching services, freight dispatch, driver support, owner operator dispatch",
  openGraph: {
    title: "AXE Dispatch | Professional Truck Dispatching Services",
    description: "Expert truck dispatch services for owner-operators and small fleets.",
    url: "https://axedispatch.com",
    siteName: "AXE Dispatch",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-inter`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
