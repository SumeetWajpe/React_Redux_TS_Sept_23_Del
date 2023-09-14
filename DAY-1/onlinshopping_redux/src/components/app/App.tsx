import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes } from "../../redux/reducers/products.reducer";
import { AppState } from "../../redux/store/store";

function App() {
  const products = useSelector((store: AppState) => store.products);
  console.log(products);
  return <div>Using Redux</div>;
}

export default App;
