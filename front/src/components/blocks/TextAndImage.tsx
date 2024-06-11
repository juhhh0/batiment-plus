import { TextAndImageType } from "@/types/types";
import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function TextAndImage({ data }: { data: TextAndImageType }) {
  return (
    <article className="py-10 md:py-20">
      {data.titleBlock && (
        <h2 className="text-center mb-10 md:mb-16 font-secondary font-semibold">
          {data.titleBlock}
        </h2>
      )}

      <div
        className={`mx-auto max-w-5xl flex flex-col gap-10 md:gap-20 md:flex-row px-5 ${
          data.imagePosition == "gauche" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            className="aspect-video md:aspect-[9/12] object-cover"
            src={"http://localhost:1337" + data.image.data.attributes.url}
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
