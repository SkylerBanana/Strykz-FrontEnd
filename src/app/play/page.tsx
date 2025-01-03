import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";
import PlayButton from "../components/PlayButton";

export default async function Play() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <PlayButton />
    </div>
  );
}
