import React from "react";
import heroImg from "../assets/hero-img.png";
import SearchBar from "../components/search-bar";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-auto md:h-[60vh] lg:h-[75vh] px-4 md:px-12 lg:px-24 py-6 md:py-12 lg:py-18 mx-2 md:mx-4 lg:mx-8 my-2 md:my-4 lg:my-6 rounded-2xl md:rounded-3xl lg:rounded-4xl font-poppins"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-[#1A1A1ACC] text-[32px] md:text-[50px] lg:text-[70px] font-medium leading-none mb-4">
          Find It. Bid It. Win It.
        </h1>
        <p className="text-[#1A1A1AB2] text-[14px] md:text-[18px] lg:text-[26px] leading-tight md:leading-none font-normal w-full md:w-full">
          Promote sustainable buying, connect directly with trusted sellers, and
          find unique items that tell a story.
        </p>
      </div>

      <div className="mt-6 mb-10 lg:mb-0 lg:mt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
