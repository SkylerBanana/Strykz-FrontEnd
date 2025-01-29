export default async function LinkSteamAccount(steamid) {
  if (!(await checkAccount(steamid))) {
    const { error } = await supabase
      .from("profiles")
      .insert({ steam_id: steamid, owns_css: true });

    if (error) {
      return error;
    }
  }

  return { success: true };
}

async function checkAccount(steamid) {
  const { data, error } = await supabase
    .from("profiles")
    .select("steam_id")
    .eq("steam_id", steamid)
    .maybeSingle();

  return data ? true : false;
}
