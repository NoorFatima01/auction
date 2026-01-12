import UsersSidebar from "@/components/users-sidebard";
import React from "react";

const UsersPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <UsersSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default UsersPageLayout;
