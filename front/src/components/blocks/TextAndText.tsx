import { TextAndTextType } from "@/types/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";

export default function TextAndText({ data }: { data: TextAndTextType }) {
  return (
    <article className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 sm:flex-row px-5 text-block">
        <div className="flex-1">
          <div className="max-w-sm mx-auto">
            <BlocksRenderer content={data.leftText} />
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-sm mx-auto md:mx-0">
            <BlocksRenderer content={data.rightText} />
          </div>
        </div>
      </div>
    </article>
  );
}

