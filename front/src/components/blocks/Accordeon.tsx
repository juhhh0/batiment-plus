"use client";

import React, { useState } from "react";

export default function Accordeon({data} : {data: any}) {
  return (
    <article className="mx-auto max-w-5xl px-5">
      <div>
        <div className="flex justify-between border-bottom border-b px-2 py-4">
          <p>Question</p>
          <span>+</span>
        </div>
        <div className="px-2 py-4">
          <p>Réponse</p>
        </div>
      </div>
      <Item />
    </article>
  );
}

const Item = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between border-bottom border-b px-2 py-4"
        onClick={() => {
          setActive(!active);
        }}
      >
        <p>Question</p>
        <span>{active ? "-" : "+"}</span>
      </div>
      <div className={`px-2 py-4 ${active ? "block" : "hidden"}`}>
        <p>Réponse</p>
      </div>
    </div>
  );
};
