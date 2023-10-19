import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Nav from "../pages/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex bg-[#FFF7ED]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
