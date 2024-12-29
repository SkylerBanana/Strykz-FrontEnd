import SignupForm from "../components/SignupForm";
export default async function SignUp() {
  return (
    <div className="flex justify-center pt-10 px-4 pb-3  md:pt-20 md:px-4 md:pb-6 ">
      <div className="bg-[#151515] py-6 px-4 md:px-7  w-full max-w-[560px] rounded-xl Form_Parent">
        <h2>Sign Up</h2>
        <SignupForm />
      </div>
    </div>
  );
}
