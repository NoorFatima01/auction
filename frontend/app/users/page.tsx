import AddUsersButton from "@/components/add-users-button";
import UsersTable from "@/components/users-table";
import React from "react";

const UsersPage = () => {
  return (
    <div className="bg-gray-500 h-screen p-12">
        <h1>Users</h1>
        <div className="flex justify-between">
            <p>All Users</p>
              <AddUsersButton />
        </div>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
