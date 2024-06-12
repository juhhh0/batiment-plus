import { TextAndImageType } from "@/types/types";
import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import BlockTitle from "../ui/BlockTitle";

export default function TextAndImage({ data }: { data: TextAndImageType }) {
  return (
    <article>
      <BlockTitle title={data.titleBlock} />
      <div
        className={`mx-auto max-w-5xl flex flex-col gap-10 md:gap-20 md:flex-row px-5 ${
          data.imagePosition == "gauche" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            className="aspect-video md:aspect-auto object-cover w-full"
            src={process.env.NEXT_PUBLIC_STRAPI_URL + data.image.data.attributes.url}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center text-block">
          <BlocksRenderer content={data.text} />
        </div>
      </div>
    </article>
  );
}
