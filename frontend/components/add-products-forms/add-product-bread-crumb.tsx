import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import Blob from "@/assets/blob.svg";
import Shape from "@/assets/shape.svg";

const AddProductBreadCrumb = () => {
  return (
    <div className="bg-[#25A5B433] m-4 md:m-8 lg:m-10 rounded-lg md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-14 h-auto md:h-[150px] lg:h-[200px] relative overflow-hidden">
      <div className="font-poppins z-10">
        <button className="flex items-center gap-2 text-[#0C0D34] text-[16px] md:text-[20px] lg:text-[24px] font-medium mb-4 md:mb-6 lg:mb-8 hover:underline cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-6 md:h-6"
          >
            <path
              d="M15.5 19L8.5 12L15.5 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <Breadcrumb>
          <BreadcrumbList className="text-[#1A1A1ACC] text-[18px] md:text-[24px] lg:text-[32px] leading-none">
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="hover:underline">
                My Store
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="hover:underline">
                Add Product
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Blob className="absolute top-0 left-0 w-[250px] h-[250px] " />
      <Shape className="text-[#E9F6F7] absolute bottom-0 -z-10 right-10 w-[250px] h-[200px]" />
    </div>
  );
};

export default AddProductBreadCrumb;
