import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";
import BackToParent from "../../components/BackToParent";
function Van() {
  const van = useLoaderData();
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
      <section className="px-[3vw]  md:px-[5vw]">
        <section className="mt-4">
          <span>&#8678; </span>
          <BackToParent text="Back to vans" to="/host/vans" />
        </section>
        <section className="bg-white w-full mt-6 py-6 px-[3vw] md:px-8 rounded-lg  mx-auto mb-6">
          <section className="flex gap-2 md:gap-6 items-center ">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="h-36 rounded-md"
            />
            <article>
              <p
                className={`${setTypeClass(
                  van.type
                )} text-[#FFEAD0] py-1 px-3 w-max  font-semibold rounded-[5px] mb-1 `}>
                {van.type}
              </p>
              <h2 className="md:text-[32px] text-2xl font-bold ">{van.name}</h2>
              <p className="font-medium text-xl text-gray-600">
                <span className="font-bold text-lg md:text-2xl text-[#161616]">
                  ${van.price}
                </span>
                /day
              </p>
            </article>
          </section>
          <nav className="my-6">
            <ul className="flex gap-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8C38] font-bold underline underline-offset-4"
                      : null
                  }
                  end
                  to={`.`}>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8C38] font-bold underline underline-offset-4"
                      : null
                  }
                  to={`pricing`}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8C38] font-bold underline underline-offset-4"
                      : null
                  }
                  to={`photos`}>
                  Photos
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet context={van} />
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default Van;
