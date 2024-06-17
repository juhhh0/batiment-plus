import React from "react";
import BlockTitle from "../ui/BlockTitle";
import { IconesTypes } from "@/types/types";

export default function Icones({ data }: { data: IconesTypes }) {
  return (
    <article>
      <BlockTitle title={data.titleBlock} />
      <div className="mx-auto max-w-5xl px-5 gap-5 flex justify-between flex-wrap">
        {data.icones.map((icone: any) => (
          <div key={icone.id} className="flex flex-col items-center text-center gap-4 flex-1">
            <div className="rounded-full bg-primary w-24 md:w-32 h-24 md:h-32 p-6 md:p-10">
              <img
                className="w-full white-img"
                src={process.env.NEXT_PUBLIC_STRAPI_URL + icone.icon.data.attributes.url}
                alt=""
              />
            </div>
            <p className="font-semibold text-xl">{icone.title}</p>
            {icone.description && <p className="min-w-52">{icone.description}</p>}
          </div>
        ))}
      </div>
    </article>
  );
}
