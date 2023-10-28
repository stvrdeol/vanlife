import { Suspense } from "react";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import FilterButtons from "../../components/FilterButtons";
import Loader from "../../components/Loader";

function Vans() {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  function setTypeClass(type) {
    if (type == "simple") {
      return "bg-[#E17654]";
    } else if (type == "luxury") {
      return "bg-[#161616]";
    } else {
      return "bg-[#115E59]";
    }
  }

  return (
    <section className="mx-auto py-8 px-[5vw] max-w-md sm:max-w-3xl">
      <h1 className="text-[32px] font-bold">Explore our van options</h1>
      <Suspense fallback={<Loader />}>
        <Await resolve={vans.vans}>
          {(loadedVans) => {
            const filteredVans = typeFilter
              ? loadedVans.filter((van) => van.type === typeFilter)
              : loadedVans;
            const vansElement = filteredVans.map((van) => {
              return (
                <article key={van.id}>
                  <Link
                    to={`${van.id}`}
                    state={{ search: searchParams.toString(), typeFilter }}>
                    <img
                      src={van.imageUrl}
                      alt="van"
                      className="rounded-[5px]"
                    />
                    <section className="sm:text-xl font-semibold gap-3 flex justify-between mt-2">
                      <h2>{van.name}</h2>
                      <section>
                        <p>${van.price}</p>
                        <p className="text-right text-sm font-medium">/day</p>
                      </section>
                    </section>
                    <p
                      className={`${setTypeClass(
                        van.type
                      )} text-[#FFEAD0] py-1 px-3 w-max mt-3 font-semibold rounded-[5px]`}>
                      {van.type}
                    </p>
                  </Link>
                </article>
              );
            });
            return (
              <>
                <section className="flex gap-2 mt-2">
                  <FilterButtons
                    typeFilter={"simple"}
                    setSearchParams={setSearchParams}
                    currentFilter={typeFilter}
                  />
                  <FilterButtons
                    typeFilter={"luxury"}
                    setSearchParams={setSearchParams}
                    currentFilter={typeFilter}
                  />
                  <FilterButtons
                    typeFilter={"rugged"}
                    setSearchParams={setSearchParams}
                    currentFilter={typeFilter}
                  />
                  {typeFilter && (
                    <FilterButtons setSearchParams={setSearchParams} />
                  )}
                </section>
                <section className="grid grid-cols-2 mt-10 gap-2 sm:gap-8 sm:grid-cols-3 gap-y-5">
                  {vansElement}
                </section>
              </>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export default Vans;
