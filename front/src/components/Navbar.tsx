"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonType, NavbarType } from "@/types/types";
import Image from "next/image";

export default function Navbar({ data }: { data: NavbarType }) {
  const [isOpen, setIsOpen] = useState(false);

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
            src={"http://localhost:1337" + data.logo.data.attributes.url}
            alt="logo"
            className="w-14 h-14"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-3 font-semibold">
          {renderLinks({ data: data.links })}
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
          {renderLinks({ data: data.links })}
        </ul>
      </div>
    </header>
  );
}

const renderLinks = ({ data }: { data: ButtonType[] }) => {
  return (
    <>
      <li>
        <Link href="/">Accueil</Link>
      </li>
      {data.map((link: ButtonType, i: number) => (
        <li className={`${i == data.length - 1 ? "button" : ""}`}>
          <Link href={link.link} key={link.id}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};
