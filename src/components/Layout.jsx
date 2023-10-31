import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Nav from "../pages/Nav";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <Nav />
      <main className="flex-1 flex flex-col bg-[#FFF7ED]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
