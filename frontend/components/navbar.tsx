"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/user-profile.png";
import menu from "../assets/menu.svg";
import Image from "next/image";
import MenuBurger from "./menu-burger";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-12 lg:px-24 py-4 font-poppins">
        <div>
          <Image src={logo} alt="Logo" width={121} height={57} />
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
            <Image src={bell} alt="Notifications" width={30} height={20} />
          </div>
          <div className="border rounded-full border-[#3F175F1A] flex items-center p-3 justify-center cursor-pointer hover:bg-gray-50">
            <Image src={cart} alt="Cart" width={25} height={25} />
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
          <div
            className="flex items-center justify-center cursor-pointer"
          >
            <Image src={menu} alt="Menu" width={35} height={35} />
          </div>
        </div>

        {/* clickable menu burger in small screens, this will open the menu */}
        <div
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={menu} alt="Menu" width={35} height={35} />
        </div>
      </div>

      <MenuBurger isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavBar;
