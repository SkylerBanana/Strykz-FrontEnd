import GameSettings from "@/app/settings/components/GameSettings";
import SettingsList from "@/app/settings/components/SettingsList";
import Nav from "@/app/components/Nav";

export default async function Game() {
  return (
    <div>
      <Nav />
      <SettingsList />
      <GameSettings />
    </div>
  );
}
