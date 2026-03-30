import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alex | Infrastructure Engineer & Systems Architect",
  description:
    "I design, deploy, and maintain the server infrastructure and networks that businesses depend on. Server provisioning, network engineering, and virtualization.",
  keywords: [
    "infrastructure engineer",
    "server provisioning",
    "network engineering",
    "Windows Server",
    "Linux administration",
    "Proxmox",
    "VMware",
    "systems architect",
  ],
  openGraph: {
    title: "Alex | Infrastructure Engineer",
    description:
      "Server infrastructure and network engineering — built from scratch, not from templates.",
    type: "website",
    url: "https://abufete.systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LightboxProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  );
}
