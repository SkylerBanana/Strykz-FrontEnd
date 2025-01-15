import Layout from "../components/Layout";
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
        <p>Hi</p>
      </div>
    </Layout>
  );
}
