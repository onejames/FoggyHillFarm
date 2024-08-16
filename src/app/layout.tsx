import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Alert from '@/components/Alert'
import GoogleAnaltyics from '@/components/GoogleAnalytics'

import { GoogleTagManager } from '@next/third-parties/google'

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
        <html lang="en" data-theme="fantsay" suppressHydrationWarning={true}>
            <body className="flex justify-center max-w-screen-xl flex-col mx-auto" >
                <CartProvider>

                    <Alert /><br />

                    {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!} /> */}
                    {/* <GoogleAnaltyics /> */}
                    <Header />

                    <div className="divider"></div>
                    <div className="grid md:mx-8">
                        {children}
                    </div>

                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
