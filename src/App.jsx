import {
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
import { hostVan, hostVans, van } from "./pages/hostVan/loader";
import Van from "./pages/vans/Van";
import Vans from "./pages/vans/Vans";
import { loader as vansLoader } from "./pages/vans/vansLoader";
import "./server";
import { authUsers } from "./utils/utils";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="host"
          loader={async () => await authUsers()}
          element={<Host />}>
          <Route
            index
            loader={async () => await authUsers()}
            element={<Dashboard />}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => await authUsers()}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => await authUsers()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVans} />
          <Route
            path="vans/:hostVanId"
            element={<HostVanLayout />}
            loader={hostVan}>
            <Route index element={<HostVanDetails />} />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => await authUsers()}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => await authUsers()}
            />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="vans" loader={vansLoader} element={<Vans />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="vans/:id" element={<Van />} loader={van} />
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
