import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinosaurs Chat",
  description: "Ask a dino! Unlock the past!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <ThemeModeScript/>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/favicon-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="theme-color" content="#ffffff"/>
    </head>
    <body className={inter.className} suppressHydrationWarning={process.env.NODE_ENV === 'development'}>{children}</body>
    </html>
  );
}
