import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnaltyics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foggy Hill Farm",
  description: "Foggy Hill Farm Bloomington, In",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="fantsay">
      <body className="flex justify-center max-w-screen-xl flex-col mx-auto" >

        <GoogleAnaltyics />
        <Header />

        <div className="divider"></div>
        <div className="grid md:mx-8">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}
