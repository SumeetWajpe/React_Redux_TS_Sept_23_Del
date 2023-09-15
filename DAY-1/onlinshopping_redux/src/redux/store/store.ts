import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../../saga/saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { products, posts, cart },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
