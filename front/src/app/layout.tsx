import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { getNavbarData } from "@/data/data";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarData = await getNavbarData();

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar data={navbarData} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
