import { TextAndImageType } from "@/types/types";
import React from "react";
import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";

export default function TextAndImage({ data }: { data: TextAndImageType }) {
  return (
    <article className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 md:flex-row px-5">
        <div className="flex-1 flex items-center justify-center">
          <img
            className="aspect-video md:aspect-[9/12] object-cover max-w-sm"
            src={"http://localhost:1337" + data.image.data.attributes.url}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center text-and-media">
            <div className="max-w-sm mx-auto md:mx-0">
          <BlocksRenderer content={data.text} />
            </div>
        </div>
      </div>
    </article>
  );
}
