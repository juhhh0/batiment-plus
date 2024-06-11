import { GlobalsType, NavbarType } from "@/types/types";
import Link from "next/link";
import React from "react";

export default function Footer({
  data,
}: {
  data: { navbar: NavbarType; globals: GlobalsType };
}) {
  return (
    <footer className="bg-black text-white flex items-center py-10">
      <div className="flex-1 flex justify-center">
        <img
          className="w-20"
          src={"http://localhost:1337" + data.globals.logo.data.attributes.url}
          alt=""
        />
      </div>
      <div className="flex-1">
        <ul>
          <li>
            <span className="font-semibold">Adresse : </span>{data.globals.adress}
          </li>
          <li>
            <span className="font-semibold">Email : </span>{data.globals.email}
          </li>
          <li>
            <span className="font-semibold">Téléphone : </span>{data.globals.phone}
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <ul>
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          {data.navbar.links.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
