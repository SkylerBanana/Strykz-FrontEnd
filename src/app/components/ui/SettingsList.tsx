export default function SettingsList() {
  const List = ["Account", "Game Settings", "Subscriptions"];

  return (
    <ul>
      {List.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
