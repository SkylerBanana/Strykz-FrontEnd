"use server";
import { createClient } from "@/utils/supabase/server";

export default async function LinkSteamAccount(steamUserId) {
  const supabase = await createClient();

  if (!(await checkAccount(supabase, steamUserId))) {
    const { error } = await supabase
      .from("profiles")
      .insert({ steam_id: steamUserId, owns_css: true });

    if (error) {
      return error;
    }
  }

  return { success: true };
}

async function checkAccount(supabase, steamUserId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("steam_id")
    .eq("steam_id", steamUserId)
    .maybeSingle();

  return data ? true : false;
}
