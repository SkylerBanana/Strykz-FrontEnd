import FriendsList from "./components/FriendsList";
import Nav from "./components/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  console.log(data);
  return (
    <div className="h-dvh w-dvw flex">
      <Nav />

      <FriendsList />
      <main className="flex-grow"></main>
    </div>
  );
}
