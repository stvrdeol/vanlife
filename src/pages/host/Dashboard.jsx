import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import star from "../../assets/star.png";
import Loader from "../../components/Loader";
function Dashboard() {
  const hostVans = useLoaderData();
  return (
    <section className="text-[#161616]">
      <article className="bg-[#FFEAD0] px-[3vw] md:px-[5vw] py-5">
        <h2 className="font-bold text-4xl py-4">Welcome!</h2>
        <section className="flex justify-between ">
          <p className="font-medium text-[#4D4D4D]">
            Income last
            <span className="font-bold underline-offset-4 underline">
              30 days
            </span>
          </p>
          <Link
            to={"income"}
            className="font-medium hover:underline hover:font-bold underline-offset-4">
            Details
          </Link>
        </section>
        <p className="font-extrabold text-5xl py-5">$2,260</p>
      </article>
      <article className="bg-[#FFDDB2] px-[3vw] md:px-[5vw] flex justify-between items-center">
        <section className="flex items-center gap-8">
          <p className="font-bold text-2xl ">Review Score</p>
          <p className="text-xl font-medium flex items-center gap-2 py-10">
            <img className="w-6" src={star} alt="star" />
            <span className="font-bold ">5.0</span>
            /5
          </p>
        </section>
        <Link
          to={"reviews"}
          className="font-medium hover:underline hover:font-bold underline-offset-4">
          Details
        </Link>
      </article>
      <article className="px-[3vw] md:px-[5vw] pt-5">
        <section className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Your Listed Vans</h2>
          <Link
            to={"vans"}
            className="font-medium hover:underline hover:font-bold underline-offset-4">
            View All
          </Link>
        </section>
        <section className=" p-4 text-[#161616]">
          <Suspense
            fallback={
              <section className="flex-1 grid place-items-center">
                <Loader />
              </section>
            }>
            <Await resolve={hostVans.vans}>
              {(loadedVans) => {
                return loadedVans.map((van) => {
                  return (
                    <Link key={van.id} to={`vans/${van.id}`}>
                      <article className="bg-white mb-4 rounded-md flex items-center gap-6 py-4 px-[3vw] justify-between">
                        <section className="flex gap-6 items-center">
                          <img
                            src={van.imageUrl}
                            alt="van"
                            className="h-16 rounded-md"
                          />
                          <section>
                            <h3 className="font-semibold text-xl">
                              {van.name}
                            </h3>
                            <p className="font-medium text-[#4D4D4D]">
                              ${van.price}/day
                            </p>
                          </section>
                        </section>
                        <p className="font-medium">Edit</p>
                      </article>
                    </Link>
                  );
                });
              }}
            </Await>
          </Suspense>
        </section>
      </article>
    </section>
  );
}

export default Dashboard;
