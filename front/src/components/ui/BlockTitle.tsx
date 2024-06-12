import React from "react";

export default function BlockTitle({ title }: { title?: string }) {
  if (title)
    return (
      <h2 className="text-center mb-10 md:mb-16 font-secondary font-semibold">
        {title}
      </h2>
    );
}
