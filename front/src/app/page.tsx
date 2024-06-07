import Hero from "@/components/Hero";
import { getHomeData } from "@/data/data";

export default async function Home() {
  const data = await getHomeData();
  
  return (
    <main>
      <Hero data={data.hero} />
    </main>
  );
}
