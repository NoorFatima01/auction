import React from "react";
import bell from "../assets/bell.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/user-profile.png";
import Image from "next/image";

interface MenuBurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuBurger = ({ isOpen, onClose }: MenuBurgerProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl z-50 p-8 w-[90%] max-w-[500px] font-poppins"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          <nav className="mb-8">
            <ul className="space-y-4">
              <li className="text-[#5C5F6A] text-[16px] font-medium cursor-pointer hover:underline">
                Homes
              </li>
              <li className="text-[#5C5F6A] text-[16px] font-medium cursor-pointer  hover:underline">
                Chats
              </li>
              <li className="text-[#5C5F6A] text-[16px] font-medium cursor-pointer hover:underline">
                Auctions
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 border rounded-lg border-[#3F175F1A] hover:bg-gray-50">
              <Image src={bell} alt="Notifications" width={24} height={24} />
              <span className="text-[#5C5F6A] text-[14px] font-medium">
                Notifications
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border rounded-lg border-[#3F175F1A] hover:bg-gray-50">
              <Image src={cart} alt="Cart" width={24} height={24} />
              <span className="text-[#5C5F6A] text-[14px] font-medium">
                Cart
              </span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 border rounded-lg border-[#3F175F1A] hover:bg-gray-50">
              <Image
                src={profile}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#5C5F6A] text-[14px] font-medium">
                Profile
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBurger;
