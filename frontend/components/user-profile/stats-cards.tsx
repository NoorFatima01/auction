import React from "react";

const StatsCards = () => {
  const stats = [
    { label: "Bids Placed", value: "42" },
    { label: "Purchases", value: "15" },
    { label: "Spent", value: "$100" },
    { label: "Last Active", value: "Today", subValue: "9:45 am" },
  ];

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 font-inter sm:gap-4 mb-4 sm:mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-3 sm:p-4 h-[100px] xl:h-[90px]">
          <p className="text-xs text-[#585B5E] text-[14px] mb-2">
            {stat.label}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <p className="text-xl md:text-[25px] text-[#585B5E] font-semibold leading-none">
              {stat.value}
            </p>
            {stat.subValue && (
              <span className="sm:text-sm md:text-[16px] text-gray-500">
                {stat.subValue}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
