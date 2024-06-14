import React from "react";

export default function Informations({ data }: { data: any }) {
  return (
    <ul className="informations flex flex-col items-center">
      <Item icon="location.svg" label="Adresse">
        {data.adress}
      </Item>
      <Item icon="mail.svg" label="Email">
        <a href={"mailto:" + data.email}>{data.email}</a>
      </Item>
      <Item icon="phone.svg" label="Téléphone">
        <a href={"tel:" + data.phone}>{data.phone}</a>
      </Item>
    </ul>
  );
}

const Item = ({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: any;
}) => (
  <li className="flex gap-1">
    <img className="w-6" src={"/icons/" + icon} alt="" />
    <span className="font-semibold">{label} : </span>
    {children}
  </li>
);
