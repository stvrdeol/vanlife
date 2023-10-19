import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Van from "./pages/Van";
import Vans from "./pages/Vans";
import "./server";
function App() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex bg-[#FFF7ED]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="*" element={<Home />} />
          <Route path="/vans/:id" element={<Van />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
