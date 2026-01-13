import React from "react";
import Badge from "./badge";
import { purchases } from "@/lib/constant";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const RecentPurchases = () => {
  return (
    <div className="mb-4">
      <h2 className="text-lg text-[#1A1A1A] font-poppins font-medium mb-4">
        Recent Purchases
      </h2>
      <div className=" bg-white py-2 px-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#F0F1F3] hover:bg-transparent">
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Product
              </TableHead>
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Price
              </TableHead>
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Status
              </TableHead>
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchases.map((purchase, index) => (
              <TableRow
                key={index}
                className="border-b border-[#F0F1F3] hover:bg-transparent"
              >
                <TableCell className="py-4 px-4 sm:px-0">
                  <div className="flex items-center gap-3">
                    <Image
                      src={purchase.image}
                      alt={purchase.product}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-sm text-[#1D1F2C] font-poppins font-medium">
                      {purchase.product}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-4 sm:px-0 text-sm text-[#667085] font-poppins font-medium whitespace-nowrap">
                  {purchase.price}
                </TableCell>
                <TableCell className="py-4 px-4 sm:px-0">
                  <Badge text={purchase.status} />
                </TableCell>
                <TableCell className="py-4 px-4 sm:px-0 text-sm text-[#667085] font-poppins font-medium whitespace-nowrap">
                  {purchase.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentPurchases;
