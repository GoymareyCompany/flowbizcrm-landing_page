import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayoutWithDrawer } from "@/components/layout/SiteLayoutWithDrawer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowBizCRM - Your Ultimate CRM Solution",
  keywords: ["CRM", "FlowBiz", "Customer Relationship Management", "Sales", "Leads", "Deals"],
  authors: [{ name: "FlowBiz Team", url: "https://flowbiz.com" }],
  description:
    "FlowBizCRM - The CRM that connects leads, deals, and conversions for growing businesses.",
  icons: {
    icon: "/site.svg",
    shortcut: "/site.svg",
    apple: "/site.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteLayoutWithDrawer>{children}</SiteLayoutWithDrawer>
      </body>
    </html>
  );
}
