import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../typings";
import { RootState } from "./store";

export interface basketState {
  items: Product[];
}

const initialState: basketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: basketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (
      state: basketState,
      action: PayloadAction<{ id: string }>
    ) => {
      // find the index if remove item
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newBasket = [...state.items];
      // remove item from basket
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`can not find product ${action.payload.id}`);
      }
      state.items = newBasket;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
// selectors for retriveing items in state to use in components
export const selectBasketItems = (state: RootState) => state.basket.items
export const selectBasketItemsWithId = (state: RootState, id:string) => state.basket.items.filter((item:Product) => item._id === id)
export const selectBasketTotal = (state:RootState) =>{
 return state.basket.items.reduce((total: number, item:Product) => (total += item.price), 0)
}
export default basketSlice.reducer;
