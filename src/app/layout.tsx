import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEWMARK - Class A Industrial Warehouses for Lease in Mexico | Tlalnepantla & Jilotepec",
  description: "Brand-new Class A industrial facilities for lease in Tlalnepantla and Jilotepec, Mexico. Prime locations for logistics, e-commerce, and last-mile operations. Immediate availability. Contact for pricing.",
  keywords: [
    "industrial warehouse for lease",
    "warehouse for rent mexico",
    "warehouse for rent cdmx",
    "industrial property for sale",
    "logistics warehouse for rent",
    "class A warehouse mexico",
    "industrial real estate mexico",
    "last mile warehouse",
    "distribution center for rent",
    "fulfillment warehouse mexico",
    "warehouse Tlalnepantla",
    "warehouse Jilotepec",
    "industrial warehouse Cuautitlán",
    "warehouse near AIFA",
    "warehouse near Arco Norte",
    "immediate availability warehouse",
    "nearshoring mexico industrial",
    "mexico logistics hub",
    "mexico distribution center",
  ].join(", "),
  openGraph: {
    title: "NEWMARK - Class A Industrial Warehouses for Lease in Mexico",
    description: "Brand-new Class A industrial facilities for lease in prime locations. Immediate availability for logistics, e-commerce, and distribution operations.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
