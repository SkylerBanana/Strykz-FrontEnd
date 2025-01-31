"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsList() {
  const pathname = usePathname();
  let removed = pathname.replace("/settings/", "");
  const List = ["account", "game", "subscriptions"];
  console.log(removed);

  return (
    <ul className="flex p-3 gap-4 items-center justify-center bg-[#20262b]">
      {List.map((item, index) => (
        <Link href={`${item}`}>
          <li
            className={
              "p-1 rounded-md hover:bg-sky-700 " +
              (removed === item ? "text-yellow-500" : "")
            }
            key={index}
            id={item}
          >
            {item}
          </li>
        </Link>
      ))}
    </ul>
  );
}
