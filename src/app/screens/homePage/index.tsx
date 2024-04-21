import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import "../../../css/home.css";
import { useEffect } from "react";

function HomePage() {
  //Selector: Store => Data

  useEffect(() => {
    // backend server data request => Data
    // slice: Data => Store
  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}

export default HomePage;
