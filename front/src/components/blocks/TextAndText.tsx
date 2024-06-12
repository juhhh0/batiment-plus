import { TextAndTextType } from "@/types/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import BlockTitle from "../ui/BlockTitle";

export default function TextAndText({ data }: { data: TextAndTextType }) {
  return (
    <article>
      <BlockTitle title={data.titleBlock} />
      <div className="mx-auto max-w-5xl flex flex-col gap-10 md:gap-20 sm:flex-row px-5 items-start text-block">
        <div className="flex-1 flex items-center">
          <div className="max-w-sm">
            <BlocksRenderer content={data.leftText} />
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="max-w-sm">
            <BlocksRenderer content={data.rightText} />
          </div>
        </div>
      </div>
    </article>
  );
}
