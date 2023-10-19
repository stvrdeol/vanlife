import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
function Van() {
  const param = useParams();
  const [van, setVan] = useState(null);
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
      const response = await fetch(`/api/vans/${param.id}`);
      const data = await response.json();
      setVan(data.vans);
    }
    fetchData();
  }, [param]);
  return van ? (
    <section className="py-10 px-12 max-w-2xl mx-auto text-[#161616]">
      <img
        src={van.imageUrl}
        alt="van"
        className="max-w-sm rounded-[5px] mx-auto"
      />
      <p
        className={`${setTypeClass(
          van.type
        )} text-[#FFEAD0] py-1 px-3 w-max  font-semibold rounded-[5px] mt-10`}>
        {van.type}
      </p>
      <h2 className="text-[32px] font-bold mt-3">{van.name}</h2>

      <p className="font-medium text-xl mt-1">
        <span className="font-bold text-2xl">${van.price}</span>/day
      </p>
      <p className="font-medium mt-3">{van.description}</p>
      <button className="bg-[#FF8C38] font-bold text-lg text-white w-full mt-6 rounded-[5px] py-1.5">
        Rent this van
      </button>
    </section>
  ) : (
    <Loader />
  );
}

export default Van;
