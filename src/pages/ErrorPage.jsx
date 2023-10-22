import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex-1 px-4 grid place-items-center">
      <div className="text-center">
        <h1 className="font-black text-[#ff8b38b6]  text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          to={"/"}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#FF8C38] hover:bg-[#ff8b38b6] rounded  focus:outline-none focus:ring">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
