import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      {message && (
        <section>
          <h2 className=" bg-red-100 rounded-md text-red-600 w-fit py-1 px-4  mx-auto">
            {message}
          </h2>
        </section>
      )}
      <section
        className={`text-center py-8 flex-1 px-[5vw] flex items-center flex-col justify-center gap-10`}>
        <h2 className="text-[#161616] text-3xl font-bold">
          Sign in to your account
        </h2>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex w-full  max-w-sm flex-col items-center">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            placeholder="e-mail"
            autoComplete="off"
            className="px-2 border w-full py-2 rounded-b-none rounded-md"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
            required
            value={formData.password}
            name="password"
            placeholder="password"
            className="px-2 w-full rounded-t-none border py-2 rounded-md"
          />
          <button className="bg-[#FF8C38] w-full py-2 rounded-md text-white mt-5 font-bold shadow-sm">
            Sign In
          </button>
        </form>
        <p className="font-medium">
          Don&apos;t have an account?{" "}
          <span className="text-[#FF8C38]">Create one now</span>
        </p>
      </section>
    </>
  );
}

export default Login;
