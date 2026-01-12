import React from "react";
import slack from "../assets/slack.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#3F175F] text-[#F9FAFB] p-6 md:p-12 lg:p-20 flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-20 m-4 md:m-6 lg:m-10 rounded-[32px] font-inter">
      <div className="flex flex-col justify-between">
        <p className="font-normal text-[22px]  leading-[36px]">mumktly.com</p>

        <div className="flex gap-4 md:mb-[-4] mt-3 md:mt-0">
          <Image src={slack} alt="Slack Icon" className="cursor-pointer" />
          <Image src={twitter} alt="Twitter Icon" className="cursor-pointer" />
          <Image src={github} alt="GitHub Icon" className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <h4 className=" font-semibold text-[17px] leading-[28px] uppercase mb-6">
          User Features
        </h4>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:underline">Explore Auctions</li>
          <li className="cursor-pointer hover:underline">Start Selling</li>{" "}
          <li className="cursor-pointer hover:underline">Saved Items</li>{" "}
          <li className="cursor-pointer hover:underline">Purchase History</li>
        </ul>
      </div>

      <div className="mt-6 md:mt-0">
        <h4 className=" font-semibold text-[17px] leading-[28px] uppercase mb-6">
          Leagal And Polciies
        </h4>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:underline">Terms & Conditions</li>
          <li className="cursor-pointer hover:underline">
            Privacy Policy
          </li>{" "}
          <li className="cursor-pointer hover:underline">Cookie Policy</li>{" "}
        </ul>
      </div>

      <div className="mt-6 md:mt-0">
        <h4 className="font-semibold text-[17px] leading-[28px] uppercase mb-6">
          Platform Information
        </h4>
        <ul className="space-y-4 font-normal">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">How It Works</li>{" "}
          <li className="cursor-pointer hover:underline">FAQs</li>{" "}
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
