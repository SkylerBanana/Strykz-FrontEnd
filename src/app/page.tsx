import Layout from "./components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div className="h-dvh w-dvw flex">
      <Layout>
        <main className="flex-grow"></main>
      </Layout>
    </div>
  );
}
