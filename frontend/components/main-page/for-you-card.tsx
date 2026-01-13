import React from "react";
import Image, { StaticImageData } from "next/image";
import Heart from "@/assets/heart.svg";

type foryouProps = {
  img: StaticImageData;
  price: number;
  time: string;
  description: string;
  location: string;
  isHearted?: boolean;
};

const ForYouCard = ({
  img,
  price,
  time,
  description,
  location,
  isHearted = false,
}: foryouProps) => {
  return (
    <div className="shadow-lg w-[19rem] min-h-[295px] rounded-2xl">
      <div>
        <div className="relative">
          <div className="flex absolute top-3 right-3 bg-[#0000001A] p-3 rounded-[5px]">
            <Heart
              className={`w-[25px] h-[25px] cursor-pointer ${
                isHearted ? "text-[#F16D6F]" : "text-white"
              }`}
            />
          </div>

          <Image
            src={img || "/rectangle.png"}
            alt={description}
            height={188}
            width={304}
          />
        </div>

        <div className="p-3">
          <div className="flex justify-between mb-4">
            <p className="text-black font-medium text-[21px] leading-none">
              ${price}
            </p>
            <p className="text-[#0000004D] text-[15px] leading-none font-normal">
              {time} ago
            </p>
          </div>
          <p className="text-[#000000B2] text-[18px] leading-none font-normal mb-2">
            {description}
          </p>
          <p className="text-[#0000004D] text-[15px] leading-none font-normal">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForYouCard;
