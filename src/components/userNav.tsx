"use client";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Logout from "@/components/logout";

import React from "react";

interface UserNavProps {
  userEmail?: any;
  // userName?: string;
  userImage?: any;
}

const UserNav: React.FC<UserNavProps> = ({
  userEmail,
  // userName,
  userImage,
}) => {
  return (
    <Menu>
      <MenuHandler>
        {/* <UserAvatar /> */}
        {/* <Button placeholder=""></Button> */}
        <Avatar
          variant="rounded"
          src={userImage}
          className="cursor-pointer rounded-lg bg-neutral-950"
          placeholder={""}
        />
      </MenuHandler>
      <MenuList placeholder={""} className="bg-neutral-900">
        <MenuItem placeholder={""} className="text-white hover:bg-slate-800">
          {userEmail}
        </MenuItem>
        <MenuItem placeholder={""} className="text-white hover:bg-slate-800">
          <Logout />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserNav;
