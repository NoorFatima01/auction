"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import PriceTag from "@/assets/price-tag.svg";
import GreyAuctions from "@/assets/grey-auction.svg";

export default function PricingColumn() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pricingFormat: "fixed",
      price: "0.00",
      quantity: "1",
      shippingMethod: "",
    },
  });


  const pricingFormat = watch("pricingFormat");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md p-6">
      <div className="mb-6">
        <h2 className="text-[19px] font-medium text-[#3D3D5D] mb-2">Pricing</h2>
        <p className="text-sm text-[#797979] font-light">
          Select buy it now or Auction
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">
            Pricing Format
          </label>
          <div className="flex flex-col md:flex-row gap-3">
            <label
              className={`flex-1 flex items-center justify-center gap-2 px-1 py-3 font-medium rounded-lg border-2 cursor-pointer ${
                pricingFormat === "fixed"
                  ? "border-cyan-400 bg-cyan-50 text-cyan-600"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                value="fixed"
                {...register("pricingFormat")}
                className="sr-only"
              />
              <PriceTag className="w-[30px] h-[30px]" />
              Fixed Price
            </label>
            <label
              className={`flex-1 flex items-center justify-center gap-2 px-1 py-3 rounded-lg border-2 cursor-pointer ${
                pricingFormat === "auction"
                  ? "border-cyan-400 bg-cyan-50 text-cyan-600"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                value="auction"
                {...register("pricingFormat")}
                className="sr-only"
              />
              <GreyAuctions className="w-[30px] h-[30px]" />
              Auctions
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div>
            <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#858699]">
                $
              </span>
              <input
                type="text"
                {...register("price", { required: "Price is required" })}
                className="w-full pl-7 pr-3 py-4 rounded-lg bg-[#F8F7FB] text-[#858699] outline-none"
                placeholder="0.00"
              />
            </div>
            {errors.price && (
              <p className="text-xs text-red-500 mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">
              Quantity
            </label>
            <input
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                min: 1,
              })}
              className="w-full px-3 py-4 rounded-lg bg-[#F8F7FB] text-[#858699] outline-none"
              min="1"
            />
            {errors.quantity && (
              <p className="text-xs text-red-500 mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">
            Shipping
          </label>
          <div className="relative">
            <select
              {...register("shippingMethod", {
                required: "Shipping method is required",
              })}
              className="w-full px-3 py-4 bg-[#F8F7FB] rounded-lg appearance-none  text-[#858699] outline-none"
            >
              <option value="">Select shipping method</option>
              <option value="standard">Standard Shipping</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#858699] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {errors.shippingMethod && (
            <p className="text-xs text-red-500 mt-1">
              {errors.shippingMethod.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
