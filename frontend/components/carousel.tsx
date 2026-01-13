"use client";
import React from "react";
import { useState } from "react";
import carouselImage from "../assets/carousel.png";
import Image from "next/image";

const Carousel = () => {
  const [currentImage, setCurrentImaege] = useState(0);

  const arrayOfImages = [
    carouselImage,
    carouselImage,
    carouselImage,
    carouselImage,
    carouselImage,
  ];

  const handleDotClick = (index: number) => {
    setCurrentImaege(index);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex flex-col">
          <Image src={arrayOfImages[currentImage]} alt="Carousel Image" />
          <div className="flex justify-center mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`inline-block h-3 w-3 rounded-full mx-1 cursor-pointer ${
                  currentImage === index ? "bg-moonstone" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-6">
          {arrayOfImages
            .filter((image, index) => index !== currentImage)
            .map((image, index) => (
              <div key={index} className="">
                <Image
                  src={image}
                  alt={`Image index is ${index}`}
                  height={85}
                  width={80}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
