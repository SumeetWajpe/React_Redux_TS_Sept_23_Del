import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [
  {
    id: 1,
    title: "Mac Book Pro",
    price: 250000,
    rating: 5,
    likes: 200,
    imageUrl:
      "https://media.wired.com/photos/616dbbf068e20e14c563bb3f/master/pass/Gear-Apple-Macbook-Pros-M1-Pro-2021.jpg",
    description:
      "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
  },
  {
    id: 2,
    title: "Mac Book Air",
    price: 200000,
    rating: 4,
    likes: 100,
    imageUrl:
      "https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/macbook_air_m1-sixteen_nine.jpg?size=948:533",
    description:
      "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
  },
  {
    id: 3,
    title: "Headphones",
    price: 2000,
    rating: 4,
    likes: 300,
    imageUrl:
      "http://cdn.shopify.com/s/files/1/0057/8938/4802/articles/boAt-Rockerz-510---Best-Wireless-Headphones-of-2021_1.jpg?v=1611915753",
    description:
      "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
  },
  {
    id: 4,
    title: "Apple iPod",
    price: 10000,
    rating: 4,
    likes: 100,
    imageUrl:
      "https://photos5.appleinsider.com/gallery/50934-100709-ipods-xl.jpg",
    description:
      "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
  },
  {
    id: 5,
    title: "JBL Speaker",
    price: 20000,
    rating: 3,
    likes: 400,
    imageUrl:
      "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/What-Is-the-Newest-JBL-Speaker-Out-Now.png?fit=935%2C523&ssl=1",
    description:
      "MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.",
  },
];

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
