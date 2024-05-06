import type {Metadata} from "next";
import {Ubuntu} from "next/font/google";
import "./globals.scss";
import {FooterSection} from "@/static-components/FooterSection";

const ubuntu = Ubuntu({style: "normal", weight: "500", subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Code0 - Revolutionize the backend development",
    description: "Revolutionize the backend development",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={ubuntu.className}>
        {children}
        <FooterSection/>
        </body>
        </html>
    );
}
