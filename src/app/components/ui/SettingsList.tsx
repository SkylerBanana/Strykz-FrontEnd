import Link from "next/link";

export default function SettingsList() {
  const List = ["account", "game", "subscriptions"];

  return (
    <ul>
      {List.map((item, index) => (
        <Link href={`settings/${item}`}>
          <li key={index} id={item}>
            {item}
          </li>
        </Link>
      ))}
    </ul>
  );
}
