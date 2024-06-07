import Content from "@/components/Content";
import Hero from "@/components/Hero";
import { getHomeData } from "@/data/data";

export default async function Home() {
  const data = await getHomeData();
  
  return (
    <main>
      <Hero data={data.hero} />
      <Content data={data.content} />
    </main>
  );
}
