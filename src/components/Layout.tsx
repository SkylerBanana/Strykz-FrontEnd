import FriendsList from "./FriendsList";
import Nav from "./Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-dvw flex">
      <Nav />

      <FriendsList />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
