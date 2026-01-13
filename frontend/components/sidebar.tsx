"use client";
import React, { useState } from "react";
import { sidebarMenuItems } from "@/lib/constant";
import Logout from "@/assets/logout.svg";
import Image from "next/image";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("users");

  return (
    <div className="hidden md:flex w-64 font-poppins bg-[#1C1C1C] flex-col m-4 rounded-3xl">
      <div className="p-6 flex justify-center">
        <div className="">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {sidebarMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeItem === item.id
                  ? "bg-neutral-800 text-white"
                  : " text-[#878C90] hover:bg-neutral-800/50 hover:text-gray-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[20px]  font-medium leading-[140%]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-neutral-800/50 transition-all">
          <Logout className="w-5 h-5" />
          <span className="text-[20px] leading-[140%] font-medium text-[#DA6D75CC]">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
