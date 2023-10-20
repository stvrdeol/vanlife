import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
function Pricing() {
  const [pricing, setPricing] = useState(null);
  const { hostVanId } = useParams();
  useEffect(() => {
    async function fetchVan() {
      const response = await fetch(`/api/host/vans/${hostVanId}`);
      const data = await response.json();
      setPricing(data.vans.price);
    }
    fetchVan();
  });
  return pricing ? (
    <section>
      <p className="font-medium text-xl text-gray-600">
        <span className="font-bold text-2xl text-[#161616]">${pricing}</span>
        /day
      </p>
    </section>
  ) : (
    <section className="flex items-center h-full justify-center">
      <Loader />
    </section>
  );
}

export default Pricing;
