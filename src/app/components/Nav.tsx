"use client";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="p-2 flex h-fit w-dvw ">
      <div className=" flex gap-4">
        <div className="hover:bg-gray-500 py-1 px-2 rounded">
          <i className="bi bi-house-door-fill"></i>
        </div>

        <Link href="../matches">
          <div className="hover:bg-gray-500 py-1 px-2 rounded">
            <i className="bi bi-tv-fill"></i>
          </div>
        </Link>

        <Link href="/settings">
          <div className="hover:bg-gray-500 py-1 px-2 rounded">
            <i className="bi bi-gear-fill"></i>
          </div>
        </Link>
      </div>

      <div className="ml-auto mr-auto flex justify-center items-center">
        <div>
          <Link href="../play">
            <p>PLAY</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
