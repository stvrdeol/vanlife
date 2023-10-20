import { Link } from "react-router-dom";
import logo from "../assets/logog.png";
function Nav() {
  return (
    <header className="flex bg-[#FFF7ED] py-8 px-[5vw] items-center gap-3 justify-between  ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40" />
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/host">Host</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
