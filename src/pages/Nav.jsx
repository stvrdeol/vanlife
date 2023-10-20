import { NavLink } from "react-router-dom";
import logo from "../assets/logog.png";
function Nav() {
  return (
    <header className="flex bg-[#FFF7ED] py-8 px-[5vw] items-center gap-3 justify-between  ">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-40" />
      </NavLink>
      <nav>
        <ul className="flex gap-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to="/host">
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold" : null
              }
              to="/vans">
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
