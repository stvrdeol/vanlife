import { Link } from "react-router-dom";
import AnimationWrapper from "../AnimationWrapper";

function Home() {
  return (
    <section className="bg-home grid place-items-center text-white py-14 px-8 flex-1">
      <AnimationWrapper>
        <section className="max-w-screen-sm mx-auto">
          <h1 className="text-5xl font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="my-10">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>

          <Link
            className="bg-[#FF8C38] min-w-full block text-center py-3"
            to={"vans"}>
            Find Your Van
          </Link>
        </section>
      </AnimationWrapper>
    </section>
  );
}

export default Home;
