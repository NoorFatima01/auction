import React from "react";
import SearchBar from "../search-bar";
import Bell from "@/assets/bell.svg";
import Image from "next/image";
import watson from "@/assets/watson.png";

const UserSearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 bg-white rounded-l-sm rounded-r-3xl p-3 md:p-4 mt-3 my-6 ">
      <SearchBar placeholder={"Search"} isSmall={true} />

      <div className="flex  flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="cursor-pointer hover:opacity-80 transition-opacity">
          <Bell className="w-10 h-10 md:w-10 md:h-10 text-[#8A92A6]" />
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={watson}
            alt="User Profile"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm text-black font-poppins font-medium md:text-[16px]">
              Mr Alex Jhons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearchBar;
