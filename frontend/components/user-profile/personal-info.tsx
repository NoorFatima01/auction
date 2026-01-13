import React from "react";
import { personalInfo } from "../../lib/constant";

const PersonalInfo = () => {
  return (
    <div className="bg-white font-poppins rounded-lg p-4 sm:p-6 ">
      <h2 className="text-lg font-semibold text-[#1A1A1A] mb-6">
        Personal Information
      </h2>
      <div className="space-y-4">
        {personalInfo.map((item, index) => (
          <div key={index}>
            <p className="text-xs text-[#999999] text-[14px] leading-[175%] mb-1">
              {item.label}
            </p>
            <p className="text-sm text-[#4D4D4D] font-medium text-[1rem] leading-[175%] wrap-break-word">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
