import { Link, Outlet } from "react-router-dom";

function Host() {
  return (
    <section className="py-5 px-8">
      <nav>
        <ul className="flex  gap-3">
          <li>
            <Link to={"/host"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/host/income"}>Income</Link>
          </li>
          <li>
            <Link to={"/host/reviews"}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

export default Host;
