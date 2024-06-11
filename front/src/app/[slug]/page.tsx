import Content from '@/components/Content';
import Hero from '@/components/Hero';
import { getPageData } from '@/data/data'
import { notFound } from 'next/navigation';
import React from 'react'

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function page({params}: PageProps) {
    console.log(params.slug)
    const data = await getPageData(params.slug)

  if(!data) notFound()

  return (
    <main> 
        {data.hero && <Hero data={data.hero} />}
        <Content data={data.content} />
    </main>
  )
}
