import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Vans from "./components/Vans";

function App() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
