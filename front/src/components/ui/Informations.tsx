import React from "react";

export default function Informations({ data }: { data: any }) {
  return (
    <ul className="informations flex flex-col gap-1">
      <Item icon="location.svg">{data.adress}</Item>
      <Item icon="mail.svg">
        <a href={"mailto:" + data.email}>{data.email}</a>
      </Item>
      <Item icon="phone.svg">
        <a href={"tel:" + data.phone}>{data.phone}</a>
      </Item>
    </ul>
  );
}

const Item = ({ icon, children }: { icon: string; children: any }) => (
  <li className="flex gap-1 items-center">
    <img className="w-6" src={"/icons/" + icon} alt="" />
    <span className="font-semibold"></span>
    {children}
  </li>
);
