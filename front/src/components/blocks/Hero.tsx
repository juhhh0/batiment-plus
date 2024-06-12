import { ButtonType, HeroType } from "@/types/types";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero({ data }: { data: HeroType }) {
  return (
    <section className="relative h-screen-20 w-full overflow-hidden flex justify-center items-center mb-10 md:mb-20">
      <img
        className="absolute brightness-50 -z-10 h-full w-full object-cover"
        src={process.env.NEXT_PUBLIC_STRAPI_URL + data.image.data.attributes.url}
        alt=""
      />
      <div className="text-white flex flex-col gap-3 px-5">
        <h1 className="text-5xl xl:text-7xl font-bold">{data.title}</h1>
        <h2 className="text-3xl xl:text-5xl font-semibold">{data.subtitle}</h2>
        <p className="text-xl xl:text-3xl">{data.description}</p>
        {data.cta && (
          <Link className="pt-4 w-fit" href={data.cta.link}>
            <Button label={data.cta.label} />
          </Link>
        )}
      </div>
    </section>
  );
}
