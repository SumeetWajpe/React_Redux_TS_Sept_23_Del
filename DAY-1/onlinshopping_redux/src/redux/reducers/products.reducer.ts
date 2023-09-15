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
  },
});

export const { incrementLikes } = productsSlice.actions;
export default productsSlice.reducer;
