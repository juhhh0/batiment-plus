import Content from "@/components/Content";
import Hero from "@/components/Hero";
import { getHomeData } from "@/data/data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  const data = await fetch(`http://localhost:1337/api/home-page?populate=*`);
  const res = await data.json();
  const metaData = res.data.attributes.seo

  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
  };
}


export default async function Home() {
  const data = await getHomeData();
  
  return (
    <main>
      <Hero data={data.hero} />
      <Content data={data.content} />
    </main>
  );
}
