import { NavLink } from "react-router-dom";
import Icon from "../assets/Icon.jpg";
import logo from "../assets/logog.png";
function Nav() {
  return (
    <header className="flex bg-[#FFF7ED] py-8 px-[3vw] md:px-[5vw] items-center gap-3  justify-between  ">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-40" />
      </NavLink>
      <nav>
        <ul className="flex gap-3 items-center md:gap-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                  : null
              }
              to="/host">
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF8C38] font-bold underline underline-offset-4 "
                  : null
              }
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF8C38] font-bold underline underline-offset-4 "
                  : null
              }
              to="/vans">
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#FF8C38] font-bold " : null
              }
              to="/login">
              <img src={Icon} alt="Login" className="min-w-fit" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
