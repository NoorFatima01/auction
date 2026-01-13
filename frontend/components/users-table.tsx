"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import useSWR from "swr";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Image from "next/image";
import watson from "@/assets/watson.png";
import Eye from "@/assets/eye.svg";
import Pencil from "@/assets/pencil.svg";
import Trash from "@/assets/trash.svg";
import SearchBar from "./search-bar";
import AddUsersButton from "./add-users-button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type UsersTableProps = {
  _id: ObjectId | string;
  name: string;
  email: string;
  role: string;
};

const UsersTable = ({ userProps }: { userProps: UsersTableProps[] }) => {
  const [selectedUsers, setSelectedUsers] = useState<(ObjectId | string)[]>([]);
  const [anyUserSelected, setAnyUserSelected] = useState(false);

  const { data, isLoading } = useSWR(
    "http://localhost:5000/api/user/all",
    fetcher
  );

  const toggleUserSelection = (userId: ObjectId | string) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const unSelectAllUsers = () => {
    setSelectedUsers([]);
    setAnyUserSelected(false);
  };

  const handleView = (userId: ObjectId | string) => {
    window.location.href = `/users/${userId}`;
    console.log("View user:", userId);
  };

  const handleEdit = (userId: ObjectId | string) => {
    console.log("Edit user:", userId);
  };

  const handleDelete = (userId: ObjectId | string) => {
    console.log("Delete user:", userId);
  };

  useEffect(() => {
    setAnyUserSelected(selectedUsers.length > 0);
  }, [selectedUsers]);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  const users = data?.users || userProps;

  return (
    <div>
      <div className="flex justify-between mt-3 mr-4">
        <p className="text-[#4D4D4D] text-[20px] leading-[125%] font-poppins font-semibold">
          All Users
        </p>
        <div className="flex gap-4">
          <SearchBar placeholder="Search users" isSmall={true} bg={"white"} />
          <AddUsersButton />
        </div>
      </div>
      <div className="m-8 bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={anyUserSelected}
                  onClick={unSelectAllUsers}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users.map(
                (user: {
                  _id: ObjectId | string;
                  name: string;
                  email: string;
                  role: string;
                }) => (
                  <TableRow
                    key={user._id.toString()}
                    className={`p-3 ${
                      selectedUsers.includes(user._id) ? "bg-gray-50" : ""
                    }`}
                  >
                    <TableCell>
                      <Checkbox
                        onClick={() => toggleUserSelection(user._id)}
                        checked={selectedUsers.includes(user._id)}
                      />
                    </TableCell>
                    <TableCell className="font-poppins">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full">
                          <Image
                            src={watson}
                            alt={user.name}
                            className="w-full h-full object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <Link
                            href={`/users/${user._id}`}
                            className="hover:underline text-[#1D1F2C] font-medium text-[14px] leading-[20px] tracking-[0.5%]"
                          >
                            {user.name}
                          </Link>
                          <div className="text-sm text-[#999999]">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-[#667085] font-medium text-[14px] leading-[20px] tracking-[0.5%]">
                      {user.role}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(user._id)}
                          className="p-2 hover:bg-gray-100 transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4 text-[#999999]" />
                        </button>
                        <button
                          onClick={() => handleView(user._id)}
                          className="p-2 hover:bg-gray-100  transition-colors cursor-pointer"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-[#999999]" />
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="p-2 hover:bg-gray-100 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash className="w-4 h-4 text-[#999999]" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersTable;
