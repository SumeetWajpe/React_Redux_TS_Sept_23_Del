import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostModel } from "../../models/postmodel";

type PostsData = {
  posts: PostModel[];
  isLoading: boolean;
  error: string;
};

let initialState: PostsData = { posts: [], isLoading: true, error: "" };

export const fetchposts = createAsyncThunk(
  "posts/fetchallposts",
  async (_, { rejectWithValue }) => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        let posts = await res.json();
        return { posts, isLoading: false, error: "" };
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store: PostsData, action: PayloadAction<number>) => {
      console.log("Within deletePost reducer !");
      return store;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchposts.fulfilled, (store: PostsData, { payload }) => {
      store.posts = payload.posts;
      store.isLoading = payload.isLoading;
      store.error = payload.error;
      return store;
    });
    builder.addCase(fetchposts.rejected, (store: PostsData, { payload }) => {
      store.posts = [];
      store.isLoading = false;
      store.error = payload as string;
      return store;
    });
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
