import { createSlice } from "@reduxjs/toolkit";

let initialState = [{ id: 1, title: "Dummy" }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store, action) => {
      console.log("Within deletePost reducer !");
      return store;
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
