import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import InputMessage from "../message/inputMessage";
import NewProductWithRHF from "../newproduct/newproduct.reacthookform";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import ProductDetails from "../productdetails/productdetails";
import PostDetails from "../postdetails/postdetails";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <a href="/">Products</a> | <a href="/posts">Posts</a> */}
      {/* <Link to="/">Products</Link> | <Link to="/posts">Posts</Link> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
        <Route path="/newproduct" element={<NewProductWithRHF />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
