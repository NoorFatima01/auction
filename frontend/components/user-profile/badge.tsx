const Badge = ({ text }: { text: string }) => {
  const isSuccess = ["Active", "Winning", "Delivered"].includes(text);
  const colorClasses = isSuccess
    ? "bg-green-100 text-[#009448]"
    : "bg-gray-100 text-[#1A1A1A99]";

  return (
    <span
      className={`px-3 py-1 ${colorClasses} text-xs font-medium font-poppins rounded-sm`}
    >
      {text}
    </span>
  );
};

export default Badge;
