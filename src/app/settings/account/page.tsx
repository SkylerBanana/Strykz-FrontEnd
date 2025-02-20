import AccountSettings from "@/app/settings/components/AccountSettings";
import SettingsList from "@/app/settings/components/SettingsList";
import Layout from "../../components/Layout";
export default async function Account() {
  return (
    <Layout>
      <div>
        <SettingsList />
        <AccountSettings />
      </div>
    </Layout>
  );
}
