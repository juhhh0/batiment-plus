"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React, { useState } from "react";
import BlockTitle from "../ui/BlockTitle";

export default function Accordeon({data} : {data: any}) {
  return (
    <article className="mx-auto max-w-5xl px-5">
      <BlockTitle title={data.titleBlock} />
      {data?.items.map((item: any) => (
        <Item key={item.id} data={item} />
      ))}
    </article>
  );
}

const Item = ({data} : {data: any}) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between border-bottom border-b px-2 py-4"
        onClick={() => {
          setActive(!active);
        }}
      >
        <p>{data.title}</p>
        <span className="text-primary">{active ? "-" : "+"}</span>
      </div>
      <div className={`px-2 py-4 ${active ? "block" : "hidden"}`}>
        <BlocksRenderer content={data.content}/>
      </div>
    </div>
  );
};
