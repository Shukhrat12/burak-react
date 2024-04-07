import React from "react";
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import "../css/products.css"
import { Link, Route, Switch, useLocation } from "react-router-dom";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import HelpPage from "./screens/helpPage/helpPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { CommonNavbar } from "./components/headers/CommonNavbar";
import  Footer from "./components/footer/index";

function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar /> : <CommonNavbar/>}
    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/users">
        <UserPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
