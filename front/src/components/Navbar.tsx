import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ data }: { data: any }) {
  console.log(data);
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
        <ul className="flex gap-3">
          {data.links.map((link: any) => (
            <li>
              <Link href={link.link} key={link.id}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
