import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../models/postmodel";

let initialState: PostModel[] = [
  { id: 1, title: "Dummy", userId: 1, body: "Dummy" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store: PostModel[], action: PayloadAction<number>) => {
      console.log("Within deletePost reducer !");
      return store;
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
