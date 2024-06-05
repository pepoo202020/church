"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface MenuItemsDataIF {
  title: string;
  url: string;
  children?: MenuItemsDataIF[];
}

const menuItemsData: MenuItemsDataIF[] = [
  {
    title: "الكنيسة",
    url: "/church",
    children: [
      {
        title: "المناسبات الكنسية",
        url: "/church/events",
      },
      {
        title: "الشهيد ابادير واخته الشهيدة ايريني",
        url: "/church/st_abader",
      },
      {
        title: "تاريخ الكنيسة",
        url: "/church/history",
      },
      {
        title: "اباء الكنيسة",
        url: "/church/fathers",
      },
      {
        title: "مواعيد الصلوات",
        url: "/church/times",
      },
    ],
  },
  {
    title: "الخدمة",
    url: "/service",
  },
  {
    title: "الاخبار",
    url: "/news",
  },
  {
    title: "المكتبات",
    url: "/libraries",
  },
  {
    title: "التواصل معنا",
    url: "/contact_us",
  },
];

export const Nav = () => {
  return (
    <nav className="relative">
      <ul className="flex items-center gap-10 ">
        {menuItemsData.map((menu, index) => {
          return (
            <li
              key={index}
              className="text-[25px] hover:text-yellow-500 transition-all duration-500"
            >
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
