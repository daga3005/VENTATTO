// app/layout.tsx
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ventatto | Tattoo Art Studio",
  description: "Arte sobre piel - Estudio profesional de tatuajes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
     <body > 
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}