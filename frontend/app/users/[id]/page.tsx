import React from "react";

import PersonalInfo from "@/components/user-profile/personal-info";
import RecentBids from "@/components/user-profile/recent-bids";
import RecentPurchases from "@/components/user-profile/recent-purchases";
import StatsCards from "@/components/user-profile/stats-cards";
import UserHeader from "@/components/user-profile/user-header";
import UserSearchBar from "@/components/user-profile/user-search-bar";

const IndividualUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <UserSearchBar />
      <div className="max-w-7xl mx-auto">
        <UserHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <StatsCards />
            <RecentBids />
            <RecentPurchases />
          </div>
          <div>
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualUserPage;
