import React from "react";
import ForYouCard from "../components/for-you-card";
import { recommendedImages } from "@/lib/constant";

const Recommended = () => {
  return (
    <div className="px-24 py-20 font-poppins">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h3 className="text-[#3D3D5D] text-[2rem] leading-none font-medium">
            Recommended For You
          </h3>
          <div className="">
            <p className="cursor-pointer mt-3 md:mt-0 hover:underline font-inter leading-none text-[#25A5B4] text-[21px] font-medium">
              See All
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-14">
          {[1, 2, 3, 4].map((item) => (
            <ForYouCard
              key={item}
              img={recommendedImages[item - 1]}
              price={120}
              time={"2 hr"}
              description={"Antique Vase"}
              location={"Islamabad"}
              isHearted={item === 1}
            />
          ))}
        </div>
      </div>

      <div className="mt-18">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h3 className="text-[#3D3D5D] text-[2rem] leading-none font-medium">
            Furniture
          </h3>
          <div className="">
            <p className="cursor-pointer mt-3 md:mt-0 hover:underline font-inter leading-none text-[#25A5B4] text-[21px] font-medium">
              See All
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-14">
          {[1, 2, 3, 4].map((item) => (
            <ForYouCard
              key={item}
              img={recommendedImages[item - 1]}
              price={800}
              time={"4 hr"}
              description={"Iphone 6s, 10/10 condition"}
              location={"College Road, Islamabad"}
              isHearted={item === 1}
            />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Recommended;
