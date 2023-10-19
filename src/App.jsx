import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Van from "./pages/Van";
import Vans from "./pages/Vans";
import "./server";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="*" element={<Home />} />
          <Route path="/vans/:id" element={<Van />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
