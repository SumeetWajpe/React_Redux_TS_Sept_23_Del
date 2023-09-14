import React from "react";
import ListOfProduct from "../listofproducts/listofproducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../productdetails/productdetails";
import Navbar from "../navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Products</a> | <a href="/posts">Posts</a> */}
      {/* <Link to="/">Products</Link> | <Link to="/posts">Posts</Link> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfProduct />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        {/* <Route path="/postdetails/:id" element={<PostDetails />} /> */}
        {/* <Route path="/newproduct" element={<NewProductWithRHF />} /> */}
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
