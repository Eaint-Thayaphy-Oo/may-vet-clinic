import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "May Vet Clinic",
  description: "May Vet Clinic",
};

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-poppins">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
