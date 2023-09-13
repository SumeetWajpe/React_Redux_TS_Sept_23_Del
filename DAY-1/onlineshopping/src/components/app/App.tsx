import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import InputMessage from "../message/inputMessage";
import NewProductWithRHF from "../newproduct/newproduct.reacthookform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
