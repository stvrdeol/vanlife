import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/host/Dashboard";
import Host from "./pages/host/Host";
import HostVans from "./pages/host/HostVans";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVanDetails from "./pages/hostVan/Details";
import HostVanLayout from "./pages/hostVan/HostVanLayout";
import HostVanPhotos from "./pages/hostVan/Photos";
import HostVanPricing from "./pages/hostVan/Pricing";
import Van from "./pages/vans/Van";
import Vans from "./pages/vans/Vans";
import { loader as vansLoader } from "./pages/vans/vansLoader";
import "./server";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="host"
          element={<Host />}
          loader={async () => {
            const isLoggedIn = false;
            if (!isLoggedIn) {
              return <Navigate to={"/login"} />;
            }
            return null;
          }}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:hostVanId" element={<HostVanLayout />}>
            <Route index element={<HostVanDetails />} />
            <Route path="photos" element={<HostVanPhotos />} />
            <Route path="pricing" element={<HostVanPricing />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="vans" loader={vansLoader} element={<Vans />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="vans/:id" element={<Van />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
