import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";

function Login() {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  const navigation = useNavigation();
  const status = navigation.state;

  const error = useActionData();

  return (
    <AnimationWrapper>
      {message && (
        <section>
          <h2 className=" bg-red-100 rounded-md text-red-600 font-bold w-fit py-1 px-4  mx-auto">
            {message}
          </h2>
        </section>
      )}
      <section
        className={`text-center py-8 flex-1 px-[5vw] flex items-center flex-col justify-center gap-10`}>
        <h2 className="text-[#161616] text-3xl font-bold">
          Sign in to your account
        </h2>
        <Form
          replace
          method="post"
          className="flex w-full  max-w-sm flex-col items-center">
          <input
            type="email"
            name="email"
            required
            placeholder="e-mail (b@b.com)"
            autoComplete="off"
            className="px-2 border w-full py-2 rounded-b-none rounded-md"
          />
          <input
            type="password"
            required
            name="password"
            placeholder="password (p123)"
            className="px-2 w-full rounded-t-none border py-2 rounded-md"
          />
          {error && (
            <p className="text-red-600 font-bold mt-2">{error.message}</p>
          )}
          <button
            disabled={status == "submitting"}
            className={`bg-[#FF8C38] w-full py-2 rounded-md text-white mt-5 font-bold shadow-sm ${
              status == "submitting" ? `cursor-wait bg-gray-600` : null
            }`}>
            {status == "submitting" ? `signing in ` : `log in`}
          </button>
        </Form>
        <p className="font-medium">
          Don&apos;t have an account?{" "}
          <span className="text-[#FF8C38]">Create one now</span>
        </p>
      </section>
    </AnimationWrapper>
  );
}

export default Login;
