import { NavLink, Outlet } from "react-router-dom";
import AnimationWrapper from "../../AnimationWrapper";

function Host() {
  return (
    <AnimationWrapper>
      <section className="py-5 flex flex-col   flex-1">
        <nav>
          <ul className="flex px-[3vw] md:px-[5vw] pb-8 gap-3">
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                    : null
                }
                to={"."}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                    : null
                }
                to={"income"}>
                Income
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                    : null
                }
                to={"vans"}>
                Vans
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                    : null
                }
                to={"reviews"}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </section>
    </AnimationWrapper>
  );
}

export default Host;
