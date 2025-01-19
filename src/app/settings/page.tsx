import Layout from "../components/Layout";
import SettingsList from "../components/ui/SettingsList";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function settings() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <Layout>
      <div>
        <SettingsList />
      </div>
    </Layout>
  );
}
