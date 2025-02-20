import SubscriptionSettings from "@/app/settings/components/SubscriptionSettings";
import SettingsList from "@/app/settings/components/SettingsList";
import Layout from "../../components/Layout";

export default async function Subscription() {
  return (
    <Layout>
      <div>
        <SettingsList />
        <SubscriptionSettings />
      </div>
    </Layout>
  );
}
