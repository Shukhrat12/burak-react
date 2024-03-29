import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import HelpPage from "./screens/helpPage/helpPage";
import { HomeHeader } from "./components/headers/HomeHeader";
import { CommonHeader } from "./components/headers/CommonHeader";
import { Footer } from "./components/footer/index";

function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === "/" ? <HomeHeader /> : <CommonHeader/>}
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
