import React from "react";
import TextAndImage from "./blocks/TextAndImage";
import TextAndText from "./blocks/TextAndText";
import Text from "./blocks/Text";
import Icones from "./blocks/Icones";
import Accordeon from "./blocks/Accordeon";

export default function Content({ data }: { data: any }) {
  return (
    <section className="content-section">
      {data.map((item: any, index: number) => {
        if (item.__component == "blocks.texte-and-image") return <TextAndImage key={index} data={item}/>
        if (item.__component == "blocks.texte-and-texte") return <TextAndText key={index} data={item}/>    
        if (item.__component == "blocks.texte") return <Text key={index} data={item}/>    
        if (item.__component == "blocks.icones") return <Icones key={index} data={item}/>    
        if (item.__component == "blocks.accordeon") return <Accordeon key={index} data={item}/>    
      })}
    </section>
  );
}
