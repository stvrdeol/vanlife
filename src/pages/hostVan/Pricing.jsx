import { useOutletContext } from "react-router-dom";
function Pricing() {
  const van = useOutletContext();

  return (
    <section>
      <p className="font-medium text-xl text-gray-600">
        <span className="font-bold text-2xl text-[#161616]">${van.price}</span>
        /day
      </p>
    </section>
  );
}

export default Pricing;
