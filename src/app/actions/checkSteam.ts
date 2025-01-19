"use server";
export default async function checkSteam(steamUserId:string) {
  interface gameType{
    appid: number;
    playtime_forever: number;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
    playtime_deck_forever: number;
    rtime_last_played: number;
    playtime_disconnected: number;
  }

  const apiKey = process.env.API_PRIVATE_STEAM;

  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamUserId}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
 
 
    const json = await response.json();
    console.log(json);
    const hasCSS = json.response.games.some((game:gameType) => game.appid === 240);

    if (hasCSS) {
      console.log("true");
    } else {
      console.log("False");
    }
  } catch (error:any) {
    console.error("Error:", error.message);
  }
}
