import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../models/postmodel";

let initialState: PostModel[] = [];

export const fetchposts = createAsyncThunk("posts/fetchallposts", async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  return posts;
});
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store: PostModel[], action: PayloadAction<number>) => {
      console.log("Within deletePost reducer !");
      return store;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchposts.fulfilled,
      (store: PostModel[], action: PayloadAction<PostModel[]>) => {
        return action.payload;
      },
    );
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
