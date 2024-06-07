import { getHomeData } from "@/data/data";

export default async function Home() {
  const data = await getHomeData();
  return (
    <main>
      <h1>Main</h1>
    </main>
  );
}
