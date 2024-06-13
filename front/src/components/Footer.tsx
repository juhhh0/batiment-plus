import { GlobalsType, NavbarType } from "@/types/types";
import Link from "next/link";
import React from "react";
import Informations from "./ui/Informations";

export default function Footer({
  data,
}: {
  data: { navbar: NavbarType; globals: GlobalsType };
}) {
  return (
    <footer className="bg-black text-white  py-10 px-5">
      <div className="flex flex-col-reverse md:flex-row gap-6 text-center">
        <div className="flex justify-center items-center flex-1">
          <img
            className="w-20 white-img"
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              data.globals.logo.data.attributes.url
            }
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Informations data={data.globals} />
        </div>
        <div className="flex flex-1 justify-center">
          <ul>
            <li>
              <Link href={"/"}>Accueil</Link>
            </li>
            {data.navbar.links.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="flex gap-4 justify-center mt-6">
        <li>© 2024 - Bâtiment Plus</li>
      </ul>
    </footer>
  );
}
