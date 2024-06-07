import { HeroType } from '@/types/types'
import React from 'react'

export default function Hero({ data } : {data: HeroType}) {
  return (
    <section className='relative h-screen w-full overflow-hidden flex justify-center items-center'>
        <img className='absolute brightness-50 -z-10 h-full w-full object-cover' src={"http://localhost:1337" + data.image.data.attributes.url} alt="" />
        <div className='text-white flex flex-col gap-3 px-5'>
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <p className='text-xl xl:text-3xl'>{data.description}</p>
        </div>
    </section>
  )
}
