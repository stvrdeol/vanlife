import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../assets/Icon.jpg";
import logo from "../assets/logog.png";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex bg-[#FFF7ED] py-8 px-[3vw] md:px-[5vw] items-center gap-3  justify-between overflow-hidden ">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-40"
          onClick={() => setShowMenu(false)}
        />
      </NavLink>
      <nav className="hidden sm:flex">
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
      <button className="sm:hidden" onClick={() => setShowMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {showMenu && (
        <nav className="sm:hidden slide-left fixed  right-0 top-0 h-full w-1/2  bg-white ">
          <button
            className="absolute right-4 top-7"
            onClick={() => setShowMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col  py-10  gap-5 items-center md:gap-6">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF8C38] underline underline-offset-4 font-bold"
                    : null
                }
                onClick={() => setShowMenu(false)}
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
                onClick={() => setShowMenu(false)}
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
                onClick={() => setShowMenu(false)}
                to="/vans">
                Vans
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C38] font-bold " : null
                }
                onClick={() => setShowMenu(false)}
                to="/login">
                <img src={Icon} alt="Login" className="min-w-fit" />
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;
