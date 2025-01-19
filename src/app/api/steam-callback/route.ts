import checkSteam from "../../actions/checkSteam";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const params = url.searchParams;

  if (params.get("openid.mode") !== "id_res") {
    return new Response("Error: Invalid Steam OpenID response", {
      status: 400,
    });
  }

  const steamId =
    params.get("openid.claimed_id")?.match(/\/id\/(\d+)$/)?.[1] || null;

  if (!steamId) {
    return new Response("Error: Unable to extract Steam ID", { status: 400 });
  }
  await checkSteam(steamId);

  return new Response(JSON.stringify({ steamId }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
