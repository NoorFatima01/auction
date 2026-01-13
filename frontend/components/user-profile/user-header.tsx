/* eslint-disable @next/next/no-img-element */
import React from "react";
import Badge from "./badge";
import watson from "@/assets/watson.png";
import Image from "next/image";
import LocationPin from "@/assets/location-pin.svg";

const UserHeader = () => {
  return (
    <div className="bg-white font-poppins rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <Image
          src={watson}
          alt="User"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
            <h1 className="sm:text-xl md:text-[22px] leading-[175%] font-medium text-[#1A1A1A]">
              Kristin Watson
            </h1>
            <Badge text="Active" />
          </div>
          <p className="text-[#1A1A1A] sm:text-[1rem] md:text-[20px] leading-[175%] mb-2">
            Buyer
          </p>
          <div className="flex items-center gap-1">
            <LocationPin className="w-4 h-4 text-moonstone" />
            <span className="text-sm md:text-[1rem] font-medium leading-none text-[#3D3D5D]">
              Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>
      <button className="w-full sm:w-auto px-6 py-2 border-2 cursor-pointer border-[#882A2A] text-[#882A2A] rounded-[10px] hover:bg-red-50 transition-colors font-medium text-[1rem] leading-[175%]">
        Disable/Delete
      </button>
    </div>
  );
};

export default UserHeader;
