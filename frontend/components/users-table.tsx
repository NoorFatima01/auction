"use client";
import React, { useEffect } from "react";
import AddUsersButton from "./add-users-button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import useSWR from "swr";
import { ObjectId } from "mongodb";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UsersTable = () => {
  const [selectedUsers, setSelectedUsers] = useState<ObjectId[]>([]);
  const [anyUserSelected, setAnyUserSelected] = useState(false);

  const { data, isLoading } = useSWR(
    "http://localhost:5000/api/user/all",
    fetcher
  );

  const toggleUserSelection = (userId: ObjectId) => {
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

  useEffect(() => {
    setAnyUserSelected(selectedUsers.length > 0);
  }, [selectedUsers]);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  console.log("Fetched users data:", data);

  const users = data.users || [];

  return (
    <div className="m-14 bg-white">
      <Table>
        <TableCaption>Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              <span className="mr-2">
                <Checkbox
                  checked={anyUserSelected ? true : false}
                  onClick={unSelectAllUsers}
                />
              </span>
              Name
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map(
              (user: {
                _id: ObjectId;
                name: string;
                email: string;
                role: string;
              }) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">
                    <span className="mr-2">
                      <Checkbox
                        onClick={() => toggleUserSelection(user._id)}
                        checked={selectedUsers.includes(user._id)}
                      />
                    </span>
                    <Link href={`/users/${user._id}`}>{user.name}</Link>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
