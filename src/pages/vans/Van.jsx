import { Link, useLoaderData, useLocation } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
import BackToParent from "../../components/BackToParent";
function Van() {
  const van = useLoaderData();
  const location = useLocation();
  const typeFilter = location?.state?.typeFilter || "all";
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
    <AnimationWrapper>
      <section className="px-[5vw]">
        <span>&#8678; </span>
        <BackToParent
          text={`Back to ${typeFilter} vans`}
          to={location?.state?.search ? `..?${location.state.search}` : `..`}
        />
      </section>
      <section className=" md:flex flex-1 px-[5vw] py-8 items-center gap-6 max-w-4xl mx-auto text-[#161616]">
        <img
          src={van.imageUrl}
          alt="van"
          className="max-w-sm w-[80vw] rounded-[5px] mx-auto"
        />
        <section>
          <p
            className={`${setTypeClass(
              van.type
            )} text-[#FFEAD0] py-1 px-3 w-max  font-semibold rounded-[5px] mt-10 md:mt-0`}>
            {van.type}
          </p>
          <h2 className="text-[32px] font-bold mt-3">{van.name}</h2>

          <p className="font-medium text-xl mt-1">
            <span className="font-bold text-2xl">${van.price}</span>/day
          </p>
          <p className="font-medium mt-3">{van.description}</p>
          <Link
            to={`/vans/${van.id}/rent`}
            className="bg-[#FF8C38] block text-center font-bold text-lg text-white w-full mt-6 rounded-[5px] py-1.5">
            Rent this van
          </Link>
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default Van;
