import { NavLink, Outlet } from "react-router-dom";

function Host() {
  return (
    <section className="py-5 flex flex-col px-[3vw] md:px-[5vw] flex-1">
      <nav>
        <ul className="flex  gap-3">
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to={"."}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to={"income"}>
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to={"vans"}>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to={"reviews"}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

export default Host;
