import { Route, Routes } from "react-router";

import Layout from "../components/layout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
