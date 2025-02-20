import GameSettings from "@/app/settings/components/GameSettings";
import SettingsList from "@/app/settings/components/SettingsList";
import Layout from "../../components/Layout";

export default async function Game() {
  return (
    <Layout>
      <div>
        <SettingsList />
        <GameSettings />
      </div>
    </Layout>
  );
}
