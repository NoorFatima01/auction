import search from "../assets/search.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center bg-[#F8F7FB] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] p-2 md:p-3 lg:p-4 w-[140px] sm:w-[160px] md:w-[380px] lg:w-[502px] h-[50px] md:h-[60px] lg:h-[75px]">
        <span>
          <Image
            src={search}
            alt="Search Icon"
            className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 mr-2 md:mr-3"
          />
        </span>
        <input
          type="text"
          placeholder="Search for anything you need..."
          className="w-full font-poppins text-[12px] md:text-[16px] lg:text-[21px] leading-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
