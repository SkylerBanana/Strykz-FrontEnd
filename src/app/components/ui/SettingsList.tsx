import { useState } from "react";
export default function SettingsList() {
  const List = ["Account", "Game Settings", "Subscriptions"];
  const [current, setCurrent] = useState("Account");

  return (
    <ul>
      {List.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
