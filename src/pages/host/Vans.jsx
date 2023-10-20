import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

function Vans() {
  const [hostVans, setHostVans] = useState(null);

  useEffect(() => {
    async function fetchHostVans() {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setHostVans(data.vans);
    }
    fetchHostVans();
  }, []);
  return hostVans ? (
    <section className="mt-10 text-[#161616]">
      <h2 className="font-bold text-3xl mb-8">Your Listed Vans</h2>
      {hostVans.map((van) => {
        return (
          <Link key={van.id} to={`/host/vans/${van.id}`}>
            <article className="bg-white mb-4 rounded-md flex items-center gap-6 py-4 px-[3vw]">
              <img src={van.imageUrl} alt="van" className="h-20 rounded-md" />
              <section>
                <h3 className="font-semibold text-xl">{van.name}</h3>
                <p className="font-medium text-[#4D4D4D]">${van.price}/day</p>
              </section>
            </article>
          </Link>
        );
      })}
    </section>
  ) : (
    <section className="flex items-center h-full justify-center ">
      <Loader />
    </section>
  );
}

export default Vans;
