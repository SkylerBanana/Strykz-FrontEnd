const STEAM_OPENID_URL = "https://steamcommunity.com/openid/login";
const REALM = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const RETURN_TO = `${REALM}/api/steam-callback`;

export async function GET(req:Request) {
  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": RETURN_TO,
    "openid.realm": REALM,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });

  const redirectUrl = `${STEAM_OPENID_URL}?${params.toString()}`;
  return Response.redirect(redirectUrl, 302);
}
