import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

function Vans() {
  const [vans, setVans] = useState([]);
  function setTypeClass(type) {
    if (type == "simple") {
      return "bg-[#E17654]";
    } else if (type == "luxury") {
      return "bg-[#161616]";
    } else {
      return "bg-[#115E59]";
    }
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    }
    fetchData();
  }, []);
  const vansElement = vans.map((van) => {
    return (
      <article key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt="van" className="rounded-[5px]" />
          <section className="text-xl font-semibold flex justify-between mt-2">
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
  return vans.length ? (
    <section className="mx-auto py-8 px-10 max-w-3xl">
      <h1 className="text-[32px] font-bold">Explore our van options</h1>
      <section className="grid grid-cols-2 mt-10 gap-8 sm:grid-cols-3">
        {vansElement}
      </section>
    </section>
  ) : (
    <Loader />
  );
}

export default Vans;
