import React from "react";
import data from "@/data/navbar.json";
import Link from "next/link";
import { BiBell, BiSearch } from "react-icons/bi";
import UserNav from "../userNav";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="mx-auto max-w-screen-2xl px-7 py-10 sm:px-20 2xl:px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10  ">
          <div>
            <img src={"/images/logo.png"} alt="logo" className="h-12" />
          </div>
          <div>
            <ul className="flex gap-5">
              {data.map((item, index) => (
                <li key={index} className="font-bold text-white ">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <BiSearch className="h-5 w-5 cursor-pointer text-gray-300" />
          <BiBell className="h-5 w-5 cursor-pointer text-gray-300" />
          <UserNav
            userEmail={session?.user?.email}
            userImage={session?.user?.image}
          />
        </div>
      </div>
    </div>
  );
}
