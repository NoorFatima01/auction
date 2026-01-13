"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Bell from "@/assets/bell.svg";
import Cart from "@/assets/cart.svg";
import Menu from "@/assets/menu.svg";
import profile from "@/assets/user-profile.png";
import Image from "next/image";
import MenuBurger from "./menu-burger";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-12 lg:px-24 py-4 font-poppins">
        <div>
          <Image src={logo} alt="Logo" width={120} height={40} />
        </div>

        <nav className="hidden md:block">
          <ul className="text-[#5C5F6A] text-[14px] leading-[1.75] font-medium flex gap-8">
            <li className="cursor-pointer hover:underline">Homes</li>
            <li className="cursor-pointer hover:underline">Chats</li>
            <li className="cursor-pointer hover:underline">Auctions</li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-4">
          <div className="border rounded-full border-[#3F175F1A] p-2 flex items-center justify-center cursor-pointer hover:bg-gray-50">
            <Bell className="w-[30px] h-[20px]" />
          </div>
          <div className="border rounded-full border-[#3F175F1A] flex items-center p-3 justify-center cursor-pointer hover:bg-gray-50">
            <Cart className="w-[25px] h-[25px]" />
          </div>
          <div className="cursor-pointer">
            <Image
              src={profile}
              alt="User Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <Menu className="w-[35px] h-[35px]" />
          </div>
        </div>

        {/* clickable menu burger in small screens, this will open the menu */}
        <div
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-[35px] h-[35px]" />
        </div>
      </div>

      <MenuBurger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavBar;
