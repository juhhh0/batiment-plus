import Content from '@/components/Content';
import Hero from '@/components/blocks/Hero';
import { getPageData } from '@/data/data'
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {

  const data = await getPageData(params.slug)
  const metaData = data.seo

  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
  };
}

export default async function page({params}: PageProps) {
    const data = await getPageData(params.slug)

  if(!data) notFound()

  return (
    <main> 
        {data.hero && <Hero data={data.hero} />}
        <Content data={data.content} />
    </main>
  )
}
