import Pages from "../containers";

import { Routes as Switch, Route } from "react-router-dom";

const { Home, Watch, Product, Contact } = Pages;


export default function Routes() {
  return (
    <Switch>
      <Route path="/watch" element={<Watch />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
}