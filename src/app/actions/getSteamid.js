"use server";
import { createClient } from "@/utils/supabase/server";

export default async function GetSteamid() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "User not authenticated" };
  }

  const userId = user.id;

  const { data, error } = await supabase
    .from("profiles")
    .select("steam_id")
    .eq("id", userId);

  return data ? data[0].steam_id : error;
}
