import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
import Profile from "../../assets/profile.png";

function Login() {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigation = useNavigation();
  const status = navigation.state;

  const error = useActionData();

  return (
    <AnimationWrapper>
      {!currentUser && (
        <section
          className={`text-center py-8 flex-1 px-[3vw] md:px-[5vw] flex items-center flex-col justify-center gap-10`}>
          {message && (
            <h2 className=" bg-red-100 rounded-md text-red-600 font-bold w-fit py-1 px-4  mx-auto">
              {message}
            </h2>
          )}
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
      )}

      {currentUser && (
        <section className="font-medium px-[3vw] md:px-[5vw] text-center">
          <h2 className="text-[#161616] text-3xl font-bold">
            Welcome {currentUser.name}!
          </h2>
          <img src={Profile} alt="profile-pic" className="w-20 py-5 mx-auto" />
          <p className="my-5">Email : {currentUser.email}</p>
          <p className="my-5">Password : {currentUser.password}</p>
          <p>
            You can view more information related to your account in the{" "}
            <Link
              to="/host"
              className="text-[#FF8C38] hover:underline underline-offset-4">
              host page
            </Link>
          </p>
          <button
            className="bg-[#FF8C38]  w-48 py-2 rounded-md text-white mt-5 font-bold shadow-sm"
            onClick={() => {
              localStorage.removeItem("currentUser");
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/login";
            }}>
            Sign out
          </button>
        </section>
      )}
    </AnimationWrapper>
  );
}

export default Login;
