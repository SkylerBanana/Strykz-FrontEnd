import Link from "next/link";
export default async function Nav() {
  return (
    <nav className="p-2 flex h-fit w-dvw fixed">
      <div className=" flex gap-4">
        <i className="bi bi-house-door-fill"></i>
        <Link href="../matches">
          <i className="bi bi-tv-fill"></i>
        </Link>

        <Link href="/settings">
          <i className="bi bi-gear-fill"></i>
        </Link>
      </div>

      <div className="ml-auto mr-auto flex justify-center items-center">
        <div>
          <Link href="../play">
            <p>PLAY</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
