import Content from "@/components/Content";
import Hero from "@/components/blocks/Hero";
import { getHomeData } from "@/data/data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  const data = await getHomeData();
  const metaData = data.seo

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
