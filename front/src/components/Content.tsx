import React from "react";
import TextAndImage from "./blocks/TextAndImage";
import TextAndText from "./blocks/TextAndText";

export default function Content({ data }: { data: any }) {
  return (
    <section>
      {data.map((item: any, index: number) => {
        if (item.__component == "blocks.texte-and-image") return <TextAndImage key={index} data={item}/>
        if (item.__component == "blocks.texte-and-texte") return <TextAndText key={index} data={item}/>    
      })}
    </section>
  );
}
