import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { getGlobalsData } from "@/data/data";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await getGlobalsData();

  if (!data) {
    return null;
  }

  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Navbar data={data} />
        {children}
        <Footer data={data}/>
      </body>
    </html>
  );
}
