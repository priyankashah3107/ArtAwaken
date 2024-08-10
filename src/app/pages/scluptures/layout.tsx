import type { Metadata } from "next";
import { Inter, Sansita_Swashed } from "next/font/google";
import "../../globals.css";
import MainNav from "@/projectcomponet/MainNav";
import Navbar from "@/projectcomponet/Navbar";
import Footer from "@/projectcomponet/Footer";

const inter = Inter({ subsets: ["latin"] });
const sansita_swashed = Sansita_Swashed({subsets:["latin"], weight: "300",})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansita_swashed.className}>
      {/* <MainNav/> */}
      <Navbar />
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
