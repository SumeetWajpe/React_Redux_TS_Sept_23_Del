import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (
      store: ProductModel[],
      action: PayloadAction<ProductModel>,
    ) => {
      store.push(action.payload);
      return store;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
