"use client";
import { useState, useEffect, useRef } from "react";
import GetJwt from "../api/getjwt";
export default function PlayButton() {
  const [isqueing, setIsQueing] = useState(false);
  const webSocketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (isqueing) {
      const socket = new WebSocket(
        "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
      );
      webSocketRef.current = socket;

      socket.onopen = function (event) {
        console.log("Bingus");
        console.log(event);
      };

      socket.onclose = function (event) {
        console.log("Bongus");
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
    return GetJwt();
  }

  return (
    <button onClick={Que} className="h-12 bg-orange-500">
      PLAY
    </button>
  );
}
