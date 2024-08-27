import type { Metadata } from "next";
import { Inter, Sansita_Swashed } from "next/font/google";
import "./globals.css";
import MainNav from "@/projectcomponet/MainNav";
import Navbar from "@/projectcomponet/Navbar";

const inter = Inter({ subsets: ["latin"] });
const sansita_swashed = Sansita_Swashed({subsets:["latin"], weight: "300",})

export const metadata: Metadata = {
  title: "Art Awaken",
  description: "A Platform where people can share the art work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={sansita_swashed.className}>
        {/* <MainNav />
        <Navbar /> */}
        {children}
        </body>
    </html>
  );
}
