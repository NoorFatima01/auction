"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

export default function ShippingColumn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shippingMethod: "freight",
      weight: "0.00",
      length: "0.00",
      width: "0.00",
      height: "0.00",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-[19px] font-medium text-[#3D3D5D] mb-2">
          Shipping
        </h2>
        <p className="text-sm text-[#797979] font-light">
          Add the shipping details
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-[17px] font-medium text-[#0C0D34] mb-3">
            Shipping Method
          </label>
          <div className="relative">
            <select
              {...register("shippingMethod", {
                required: "Shipping method is required",
              })}
              className="w-full px-4 py-4 border-2 border-cyan-400 bg-[#F8F7FB] rounded-lg appearance-none focus:ring-2 focus:ring-cyan-500 outline-none text-[#858699]"
            >
              <option value="freight">Freight: Oversized Items</option>
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

        <div className="mb-6">
          <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">Weight(kg)</label>
          <div className="relative">
            <input
              type="text"
              {...register("weight", {
                required: "Weight is required",
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Please enter a valid weight",
                },
              })}
              className="w-full px-4 py-4 bg-[#F8F7FB] rounded-lg outline-none"
              placeholder="0.00 kg"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858699] text-sm">
              kg
            </span>
          </div>
          {errors.weight && (
            <p className="text-xs text-red-500 mt-1">{errors.weight.message}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div>
            <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">Length(in)</label>
            <div className="relative">
              <input
                type="text"
                {...register("length", {
                  required: "Length is required",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Please enter a valid length",
                  },
                })}
                className="w-full px-4 py-4 bg-[#F8F7FB] rounded-lg outline-none"
                placeholder="0.00 in"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858699] text-sm">
                in
              </span>
            </div>
            {errors.length && (
              <p className="text-xs text-red-500 mt-1">
                {errors.length.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">Width(in)</label>
            <div className="relative">
              <input
                type="text"
                {...register("width", {
                  required: "Width is required",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Please enter a valid width",
                  },
                })}
                className="w-full px-4 py-4 bg-[#F8F7FB] rounded-lg outline-none"
                placeholder="0.00 in"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858699] text-sm">
                in
              </span>
            </div>
            {errors.width && (
              <p className="text-xs text-red-500 mt-1">
                {errors.width.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#0C0D34] text-[17px] font-medium mb-3">Height(in)</label>
          <div className="relative">
            <input
              type="text"
              {...register("height", {
                required: "Height is required",
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Please enter a valid height",
                },
              })}
              className="w-full px-4 py-4 bg-[#F8F7FB] rounded-lg outline-none"
              placeholder="0.00 in"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858699] text-sm">
              in
            </span>
          </div>
          {errors.height && (
            <p className="text-xs text-red-500 mt-1">{errors.height.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}
