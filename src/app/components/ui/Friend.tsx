import Image from "next/image";

interface FriendProps {
  isHovered: boolean;
}

export default function Friend({ isHovered }: FriendProps): JSX.Element {
  return (
    <div className="flex">
      <Image width="50" height="50" alt="Picture" src="/Bongos.webp"></Image>
      {isHovered && (
        <div className="flex flex-col" id="Friend_Info">
          <h3 id="Name">Bingus</h3>
          <p id="Friend_Game_Info">Dust2: 10-11</p>
        </div>
      )}
    </div>
  );
}
