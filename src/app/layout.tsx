import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./Nav/NavBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hi, stranger.",
    description:
        "My corner of the internet. Projects, thoughts, and contact info.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <div className="flex flex-col items-center min-h-screen text-center 2xl:items-start md:justify-center md:text-left md:pt-30 xs:px-60 2xl:flex-row bg-gradient-to-b from-gray-950 to-gray-900">
                        <aside className="order-1 w-full xl:w-1/4 md:order-none">
                            <NavBar />
                        </aside>
                        <main className="order-2 md:w-2/4 md:order-none">
                            <div>{children}</div>
                        </main>
                        <aside className="order-3 w-full md:w-1/4 md:order-none">
                            <RightSideBar />
                        </aside>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
