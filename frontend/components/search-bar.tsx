import { bg } from "zod/v4/locales";
import Search from "../assets/search.svg";

const SearchBar = ({
  placeholder,
  isSmall,
  bg,
}: {
  placeholder?: string;
  isSmall?: boolean;
  bg?: string;
}) => {
  return (
    <div>
      <div
        className={`flex items-center  rounded-[8px] md:rounded-[10px] lg:rounded-[12px] p-2 md:p-3 lg:p-4 ${
          isSmall
            ? "w-[90px] sm:w-[110px] md:w-[250px] lg:w-[340px] h-[35px] md:h-[42px]"
            : "w-[140px] sm:w-[160px] md:w-[380px] lg:w-[502px] h-[50px] md:h-[60px] lg:h-[75px]"
        } ${bg ? "bg-white" : "bg-[#F8F7FB]"}`}
      >
        <span>
          <Search
            className={`mr-2 md:mr-3 text-[#3F175FB2] ${
              isSmall
                ? "w-3 h-3 md:w-3.5 md:h-3.5"
                : "w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6"
            }`}
          />
        </span>
        <input
          type="text"
          placeholder={placeholder || "Search anything you need..."}
          className={`w-full font-poppins leading-none ${
            isSmall
              ? "text-[10px] md:text-[12px] lg:text-[14px]"
              : "text-[12px] md:text-[16px] lg:text-[21px]"
          }`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
