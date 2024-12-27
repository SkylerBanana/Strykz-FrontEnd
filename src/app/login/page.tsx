import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center  md:pt-20 md:px-4 md:pb-6 ">
      <div className="bg-[#151515] py-6 px-4 md:px-7  md:w-full md:max-w-[560px] rounded-xl Form_Parent">
        <h2>Log in</h2>

        <form className="flex flex-col w-full justify-center  items-center gap-6">
          <div className="Form_Item">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              required
            />
          </div>

          <div className="Form_Item">
            <label className="flex justify-between" htmlFor="password">
              Password
              <a>Forgot Password?</a>
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button
            className="bg-[#1640D6] w-full h-8 rounded font-bold"
            formAction={login}
          >
            Log in
          </button>
          <Link href="/signup">
            <button>Sign up</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
