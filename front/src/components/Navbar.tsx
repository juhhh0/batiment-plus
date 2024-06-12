"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonType, GlobalsType, NavbarType } from "@/types/types";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar({
  data,
}: {
  data: { navbar: NavbarType; globals: GlobalsType };
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if (width > 768) {
        setIsOpen(false);
      }
    };

    scroll();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <header className={isOpen ? "menu-open" : ""}>
      <nav className="h-20 fixed z-10 w-full bg-white flex justify-between items-center px-10">
        <Link href="/">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL + data.globals.logo.data.attributes.url
            }
            alt="logo"
            className="w-14 h-14"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-3 font-semibold">
          {renderLinks({ data: data.navbar.links, closeMenu })}
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            alt=""
            width={40}
            height={40}
          />
        </button>
      </nav>
      <div
        className={`fixed z-20 left-0 top-20 w-full h-screen bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="h-full flex flex-col gap-4 justify-center px-10 font-semibold text-xl">
          {renderLinks({ data: data.navbar.links, closeMenu })}
        </ul>
      </div>
    </header>
  );
}

const renderLinks = ({ data, closeMenu }: { data: ButtonType[], closeMenu: () => void }) => {
  return (
    <>
      {data.map((link: ButtonType, i: number) => (
        <li key={i} onClick={closeMenu}>
          <Link href={link.link} className="text-black">
            {i != data.length - 1 ? link.label : <Button label={link.label} />}
          </Link>
        </li>
      ))}
    </>
  );
};
