"use client";
import React, { useState } from "react";
import { Logo } from "./Components/Logo";
import { Nav } from "./Components/Nav";
import { OccationBtn } from "./Components/OccationBtn";

export const HeaderContainer = () => {
  return (
    <div className="MainHeaderContainer  flex items-center justify-between gap-5 px-[177px] py-2 ">
      <div className="flex items-center gap-[30px]  w-full h-full">
        <Logo />
        <Nav />
      </div>
      <div className="flex items-center gap-[11px]">
        <OccationBtn />
      </div>
    </div>
  );
};
