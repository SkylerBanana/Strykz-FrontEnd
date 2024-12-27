import { signup } from "../login/actions";

export default function Signup() {
  return (
    <form className="flex flex-col max-w-32 justify-center ml-auto mr-auto">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />

      <label htmlFor="password">Confirm Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
