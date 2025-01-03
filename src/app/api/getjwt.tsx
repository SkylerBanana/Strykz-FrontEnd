"use server";
import { createClient } from "../../../utils/supabase/server";
export default async function GetJwt() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  return data.session?.access_token;
}
