import React from "react";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((store: any) => store.products);
  console.log(products);
  return <div>Using Redux</div>;
}

export default App;
