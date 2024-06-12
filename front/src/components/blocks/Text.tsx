import React from "react";
import BlockTitle from "../ui/BlockTitle";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { TextType } from "@/types/types";

export default function Text({ data }: { data: TextType }) {
  return (
    <article>
      <BlockTitle title={data.titleBlock} />
      <div className="mx-auto max-w-5xl px-5">
        <BlocksRenderer content={data.texte} />
      </div>
    </article>
  );
}
