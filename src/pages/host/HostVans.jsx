import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
import Loader from "../../components/Loader";

function Vans() {
  const hostVans = useLoaderData();
  return (
    <AnimationWrapper>
      <section className="mt-4 px-[3vw] md:px-[5vw] text-[#161616]">
        <h2 className="font-bold text-3xl mb-8">Your Listed Vans</h2>
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
                  <Link key={van.id} to={`${van.id}`}>
                    <article className="bg-white mb-4 rounded-md flex items-center gap-6 py-4 px-[3vw]">
                      <img
                        src={van.imageUrl}
                        alt="van"
                        className="h-20 rounded-md"
                      />
                      <section>
                        <h3 className="font-semibold text-xl">{van.name}</h3>
                        <p className="font-medium text-[#4D4D4D]">
                          ${van.price}/day
                        </p>
                      </section>
                    </article>
                  </Link>
                );
              });
            }}
          </Await>
        </Suspense>
      </section>
    </AnimationWrapper>
  );
}

export default Vans;
