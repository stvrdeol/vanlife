import { useOutletContext } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
function Pricing() {
  const van = useOutletContext();

  return (
    <AnimationWrapper>
      <section>
        <p className="font-medium text-xl text-gray-600">
          <span className="font-bold text-2xl text-[#161616]">
            ${van.price}
          </span>
          /day
        </p>
      </section>
    </AnimationWrapper>
  );
}

export default Pricing;
