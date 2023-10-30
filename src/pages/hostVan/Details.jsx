import { useOutletContext } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
function Details() {
  const van = useOutletContext();
  return (
    <AnimationWrapper>
      <section>
        <p className="text-sm text-gray-600 font-medium mb-4">
          <span className="text-[#161616] font-bold">Name: </span>
          {van.name}
        </p>
        <p className="text-sm text-gray-600 font-medium mb-4">
          <span className="text-[#161616] font-bold">Category: </span>
          {van.type}
        </p>
        <p className="text-sm text-gray-600 font-medium mb-4">
          <span className="text-[#161616] font-bold">Description: </span>
          {van.description}
        </p>
        <p className="text-sm text-gray-600 font-medium mb-4">
          <span className="text-[#161616] font-bold">Visibility: </span>
          Public
        </p>
      </section>
    </AnimationWrapper>
  );
}
export default Details;
