import Link from "next/link";
import React from "react";
import { ButtonType, NavbarType } from "@/types/types";

export default function Navbar({ data }: { data: NavbarType }) {
  return (
    <header className="">
      <nav className="h-24 fixed z-10 w-full bg-white flex justify-between items-center px-10">
        <Link href="/">
          <img
            src={"http://localhost:1337" + data.logo.data.attributes.url}
            alt="logo"
            className="w-14 h-14"
          />
        </Link>
        <ul className="flex items-center gap-3">
          {data.links.map((link: ButtonType, i: number) => (
            <li>
              <Link
                href={link.link}
                key={link.id}
                className={i == data.links.length - 1 ? "button" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
