"use client";
import { redirect } from "next/navigation";

export default function GameSettings() {
  const handleLogin = () => {
    redirect("/api/steam-login");
  };
  return (
    <div className=" max-w-[560px] items-center justify-center ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Game Settings</h1>

        <div className="">
          <button
            onClick={handleLogin}
            className="bg-[#1640D6] w-full   rounded font-bold  px-2 py-2"
          >
            ADD GAME
          </button>
        </div>
      </div>
    </div>
  );
}
