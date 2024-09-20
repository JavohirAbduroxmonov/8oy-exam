import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import HeaderBtn from "./HeaderBtn";

export default function Header() {
  return (
    <header className="header__shadow fixed w-full bg-primary z-20">
      <div className="max-w-[1280px] mx-auto pl-12 pr-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-block text-secondary font-Montserrat text-xl font-bold uppercase leading-8"
        >
          cryptofolio
        </Link>
        <div className="flex items-center gap-8">
          <DropDown />
          <HeaderBtn />
        </div>
      </div>
    </header>
  );
}
