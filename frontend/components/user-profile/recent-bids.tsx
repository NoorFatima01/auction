import React from "react";
import Badge from "./badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import { bids } from "@/lib/constant";

const RecentBids = () => {
  return (
    <div className=" mb-4 sm:mb-6">
      <h2 className="text-lg text-[#1A1A1A] font-poppins font-medium mb-4">
        Recent Bids
      </h2>
      <div className="-mx-4 sm:mx-0 bg-white py-2 px-4 sm:p-6">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#F0F1F3] hover:bg-transparent">
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Product
              </TableHead>
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Current Bid
              </TableHead>
              <TableHead className="py-3 px-4 sm:px-0 text-sm font-medium text-[#1D1F2C] font-poppins">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bids.map((bid, index) => (
              <TableRow
                key={index}
                className="border-b border-[#F0F1F3] hover:bg-transparent"
              >
                <TableCell className="py-4 px-4 sm:px-0">
                  <div className="flex items-center gap-3">
                    <Image
                      src={bid.image}
                      alt={bid.product}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-sm text-[#1D1F2C] font-poppins font-medium">
                      {bid.product}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-4 sm:px-0 text-sm text-[#667085] font-poppins font-medium">
                  {bid.currentBid}
                </TableCell>
                <TableCell className="py-4 px-4 sm:px-0">
                  <Badge text={bid.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentBids;
