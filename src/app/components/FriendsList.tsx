"use client";
import { useState } from "react";
import Friend from "./ui/Friend";
import Link from "next/link";

export default function FriendsList() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav
      className="float-right border-white border-2 h-full w-16 p-2  right-0 bg-[#0a0a0a] transition-all duration-300 hover:w-48 fixed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="../profile">
        <div
          id="Friend_Icon_Div"
          className="flex items-center justify-center flex-col hover:opacity-50"
        >
          <i className="bi bi-person-fill"></i>
          <p className="text-sm">51</p>
        </div>
      </Link>
      <Friend isHovered={isHovered} />
    </nav>
  );
}
