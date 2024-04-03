import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom"
import ChosenProducts from "./ChosenProducts";
import Products from "./Products";

function ProductsPage() {
    const products = useRouteMatch();
    console.log("products: ", products)

    return <div>
        <Switch>
            <Route path={`${products.path}/:productId`}>
                <ChosenProducts />
            </Route>
            <Route path={`${products.path}`}>
                <Products />
            </Route>
        </Switch>
    </div>
}

export default ProductsPage;