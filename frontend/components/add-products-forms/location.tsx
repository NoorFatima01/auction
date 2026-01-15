"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";

const LocationColumn = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      domesticReturns: false,
      internationalReturns: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md p-6">
      <div className="mb-6">
        <h2 className="text-[14px] text-[#0C0D34] font-medium mb-2">
          Location
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#FCFCFC] p-4 rounded-xl mb-6">
          <div className="mb-6">
            <label className="block text-[12px] font-medium text-[#0C0D34] leading-none mb-3">
              Country
            </label>
            <div className="relative bg-[#F8F7FB]">
              <select
                {...register("country", { required: "Country is required" })}
                className="w-full px-4 py-4 text-12px rounded-lg appearance-none  outline-none text-[#858699]"
              >
                <option value="">Select country</option>
                <option value="pk">Pakistan</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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
            {errors.country && (
              <p className="text-xs text-red-500 mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <label className="block text-[12px] font-medium text-[#0C0D34] leading-none mb-3">
              City
            </label>
            <div className="relative bg-[#F8F7FB]">
              <select
                {...register("city", { required: "City is required" })}
                className="w-full px-4 py-4 text-12px] rounded-lg appearance-none  outline-none text-[#858699]"
              >
                <option value="">Select city</option>
                <option value="isb">Islamabad</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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
            {errors.city && (
              <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[14px] font-medium text-[#0C0D34] mb-3">
            Domestic Returns
          </h3>
          <div className="flex flex-col md:flex-row items-start justify-between bg-[#FCFCFC] p-4 rounded-xl">
            <div>
              <p className="text-sm font-medium text-[#0C0D34] mb-1">
                Accept returns
              </p>
              <p className="text-xs text-[#858699]">
                Allow returns for items purchased domestically
              </p>
            </div>
            <Controller
              name="domesticReturns"
              control={control}
              render={({ field: { value, onChange } }) => (
                <button
                  type="button"
                  onClick={() => onChange(!value)}
                  className={`flex h-6 w-11 items-center rounded-full   ${
                    value ? "bg-cyan-400" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              )}
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[14px] font-medium text-[#0C0D34] mb-3">
            International Returns
          </h3>
          <div className="flex flex-col md:flex-row items-start justify-between bg-[#FCFCFC] p-4 rounded-xl">
            <div>
              <p className="text-sm font-medium text-[#0C0D34] mb-1 ">
                Accept returns
              </p>
              <p className="text-xs text-[#858699]">
                Allow returns for items purchased internationally
              </p>
            </div>
            <Controller
              name="internationalReturns"
              control={control}
              render={({ field: { value, onChange } }) => (
                <button
                  type="button"
                  onClick={() => onChange(!value)}
                  className={`flex h-6 w-11 items-center rounded-full  ${
                    value ? "bg-cyan-400" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationColumn;
