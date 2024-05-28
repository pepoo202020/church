import React from "react";
import { Logo } from "./Components/Logo";
import { Nav } from "./Components/Nav";
import { Search } from "./Components/Search";
import { OccationBtn } from "./Components/OccationBtn";

export const HeaderContainer = () => {
  return (
    <div className="MainHeaderContainer flex items-center justify-between px-[177px] py-2">
      <div className="flex items-center gap-[30px]">
        <Logo />
        <Nav />
      </div>
      <div className="flex items-center gap-[11px]">
        <Search />
        <OccationBtn />
      </div>
    </div>
  );
};
