import { Link } from "react-router-dom";
import logo from "../assets/logog.png";
function Nav() {
  return (
    <header className="flex bg-[#FFF7ED] p-8 items-center justify-between  ">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40" />
      </Link>
      <nav>
        <ul className="flex gap-6">
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
