import React from "react";
import Auction from "@/assets/auction.svg";
import Carousel from "../components/main-page/carousel";

const PlaceBid = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between xl:justify-center xl:gap-32 py-4 md:py-8 px-4 md:px-12 lg:px-44 gap-6 lg:gap-0 font-poppins">
      <div className="w-full lg:max-w-md">
        <h2 className="text-[#484848] mb-2 text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-none">
          Iphone 6s, 10/10 condition..
        </h2>
        <p className="text-[13px] md:text-[14px] lg:text-[11px] text-[#8A8A8A] font-normal mb-4 leading-[17px] w-full lg:w-[315px]">
          Lorem ipsum dolor sit amThis device is pre-owned and fully functional,
          with minor signs of use (if any). Available in multiple storage
          options and colors ...
        </p>
        <button className="w-full md:w-[170px] lg:w-[168px] bg-[#3F175F] text-[12px] md:text-[13px] leading-none cursor-pointer hover:opacity-80 text-white font-medium py-3 px-4 rounded-[7px] mb-6 flex items-center justify-center gap-2 transition-colors">
          <span>
            <Auction className="w-[22px] h-[22px]" />
          </span>
          Place your bid {">"}
        </button>
        <div className="space-y-3">
          <h3 className="text-[#484848] font-medium leading-none text-[16px] md:text-[18px] lg:text-[19px]">
            Auction Ending in
          </h3>
          <div className="flex gap-4 md:gap-3">
            <div className="text-center flex-1 md:flex-none">
              <div className="bg-[#25A5B433] rounded-[6px] p-2 md:p-4">
                <p className="text-[18px] md:text-[21px] leading-none font-bold text-[#25A5B4]">
                  04
                </p>
              </div>
              <div className="text-[12px] md:text-[1rem] text-[#3D3D5D] mt-1">
                Hr
              </div>
            </div>
            <div className="text-center flex-1 md:flex-none">
              <div className="bg-[#25A5B433] rounded-[6px] p-2 md:p-4">
                <p className="text-[18px] md:text-[21px] leading-none font-bold text-[#25A5B4]">
                  21
                </p>
              </div>
              <div className="text-[12px] md:text-[1rem] text-[#3D3D5D] mt-1">
                Mins
              </div>
            </div>
            <div className="text-center flex-1 md:flex-none">
              <div className="bg-[#25A5B433] rounded-[6px] p-2 md:p-4">
                <p className="text-[18px] md:text-[21px] leading-none font-bold text-[#25A5B4]">
                  04
                </p>
              </div>
              <div className="text-[12px] md:text-[1rem] text-[#3D3D5D] mt-1">
                Sec
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 w-full lg:w-auto">
        <Carousel />
      </div>
    </div>
  );
};

export default PlaceBid;
