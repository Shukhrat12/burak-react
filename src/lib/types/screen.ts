import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/** PRODUCTSPAGE **/
export interface ProductsPageState {
    restaurant: Member | null;
    products: Product[]
    chosenProduct: Product | null;
}

/** ORDERSPAGE **/ 