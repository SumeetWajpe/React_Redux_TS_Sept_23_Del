import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store: ProductModel[], action: PayloadAction<number>) => {
      let productId = action.payload;
      let index: number = store.findIndex(p => p.id == productId);
      store[index].likes++; // changing the original object (wrapper with Immer object)
      return store;
    },
    setAllProducts: (
      store: ProductModel[],
      action: PayloadAction<ProductModel[]>,
    ) => {
      store = action.payload; // update store with response received from worker saga
      return store;
    },
  },
});

export const { incrementLikes ,setAllProducts} = productsSlice.actions;
export default productsSlice.reducer;
