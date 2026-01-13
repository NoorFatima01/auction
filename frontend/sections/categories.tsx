import React from "react";
import { categories } from "../lib/constant";
import Image from "next/image";
import LeftArrow from "@/assets/left-arrow.svg";
import RightArrow from "@/assets/right-arrow.svg";

const Categories = () => {
  return (
    <div className="mb-6 p-24 font-poppins">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 ">
        <h2 className="text-[32px] text-[#3D3D5D] font-medium leading-none">
          Categories
        </h2>
        <div className="">
          <p className="cursor-pointer mt-3 md:mt-0 hover:underline font-inter leading-none text-moonstone text-[21px] font-medium">
            See All
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:flex md:absolute left-0 top-1/2 -translate-y-1/2">
          <LeftArrow className="cursor-pointer" />
        </div>
        <div className="hidden md:flex md:absolute right-0 top-1/2 -translate-y-1/2">
          <RightArrow className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6  px-16">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`rounded-full p-6 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mb-4`}
                style={{ backgroundColor: category.color }}
              >
                <category.img
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  style={{ color: category.textColor }}
                />
              </div>
              <span className="text-sm md:text-[21px] leading-none font-normal text-[#3D3D5D] text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
