import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
function Details() {
  const [details, setDetails] = useState(null);
  const { hostVanId } = useParams();
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(`/api/host/vans/${hostVanId}`);
      const data = await response.json();
      setDetails(data.vans);
      console.log(data.vans);
    }
    fetchDetails();
  }, [hostVanId]);
  return details ? (
    <section>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Name: </span>
        {details.name}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Category: </span>
        {details.type}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Description: </span>
        {details.description}
      </p>
      <p className="text-sm text-gray-600 font-medium mb-4">
        <span className="text-[#161616] font-bold">Visibility: </span>
        Public
      </p>
    </section>
  ) : (
    <section className="flex items-center h-full justify-center">
      <Loader />
    </section>
  );
}

export default Details;
