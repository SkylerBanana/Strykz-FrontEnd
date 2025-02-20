"use client";
import { useState, useEffect, useRef } from "react";

import { createClient } from "@/utils/supabase/client";

import GetSteamid from "../actions/getSteamid";

export default function PlayButton() {
  const [isqueing, setIsQueing] = useState(false);

  const [token, setToken] = useState<string | null>(null);

  const [steamID, setSteamID] = useState<string | null>(null);

  const webSocketRef = useRef<WebSocket | null>(null);

  const supabase = createClient();

  async function GetToken() {
    if (!token) {
      const { data: session } = await supabase.auth.getSession();
      if (session.session && session.session.access_token) {
        console.log(session);
        setToken(session.session.access_token);
      } else {
        console.log("No session or access token found.");
      }
    }
  }

  async function GetSteam() {
    const steamid = await GetSteamid();
    setSteamID(steamid);
  }

  useEffect(() => {
    GetToken();
    GetSteam();
  }, []);

  useEffect(() => {
    if (isqueing) {
      const socket = new WebSocket(
        `wss://lf2oy24n7g.execute-api.us-east-1.amazonaws.com/production/?token=${token}`
      );
      webSocketRef.current = socket;

      socket.onopen = function (event) {
        console.log(event);
      };

      socket.onclose = function (event) {
        console.log(event);
        setToken("");
      };
      //cleanup
      return () => {
        socket.close();
        webSocketRef.current = null;
      };
    }

    //cleanup function
    return () => {
      if (webSocketRef.current) {
        console.log("Closing WebSocket");
        webSocketRef.current.close();
        webSocketRef.current = null;
      }
    };
  }, [isqueing]);

  function Que() {
    setIsQueing(!isqueing);
  }

  return (
    <div>
      <button onClick={Que} className="h-12 bg-orange-500">
        PLAY
      </button>
    </div>
  );
}
