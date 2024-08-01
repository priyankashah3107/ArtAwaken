import type { Metadata } from "next";
import { Inter, Sansita_Swashed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sansita_swashed = Sansita_Swashed({subsets:["latin"], weight: "300",})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansita_swashed.className}>{children}</body>
    </html>
  );
}
