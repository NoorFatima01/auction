import UserSearchBar from "@/components/user-profile/user-search-bar";
import UsersTable from "@/components/users-table";
import React from "react";
import {users} from "@/lib/constant"

const UsersPage = () => {
  return (
    <div className="bg-gray-50 p-4 h-screen ">
      <UserSearchBar />

      <h1 className="text-[#3F175F] text-[24px] leading-[125%] font-poppins font-semibold">
        Users
      </h1>

      <UsersTable userProps={users} />
    </div>
  );
};

export default UsersPage;
