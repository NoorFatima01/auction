import PricingColumn from "./pricing";
import ShippingColumn from "./shipping";
import LocationColumn from "./location";

const AddProduct = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-28 font-poppins">
        <PricingColumn />
        <ShippingColumn />
        <LocationColumn />
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-[#25A5B4] flex items-center gap-2 px-10 md:px-24 py-5 rounded-[110px] hover:opacity-80 cursor-pointer">
          <p className="text-white text-[12px] md:text-[16.5px] font-medium leading-none">
            Next
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M8.5 5L15.5 12L8.5 19"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
