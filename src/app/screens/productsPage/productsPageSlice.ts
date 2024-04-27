import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";


const initialState: ProductsPageState = {
    restaurant: null,
    products: [],
    chosenProduct: null,
}

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },

        setProducts: (state, action) => {
            state.products = action.payload
        },

        setChosenProduct: (state, action) => {
            state.chosenProduct = action.payload
        }
    }
})

export const { setRestaurant, setProducts, setChosenProduct } = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;

export default ProductsPageReducer;