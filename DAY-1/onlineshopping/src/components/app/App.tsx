import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import InputMessage from "../message/inputMessage";
import NewProductWithRHF from "../newproduct/newproduct.reacthookform";

const App: React.FC = () => {
  return (
    <>
      {/* <ListOfProducts /> */}
      {/* <Posts /> */}
      {/* <GetPostById /> */}
      {/* <InputMessage /> */}
      <NewProductWithRHF/>
    </>
  );
};

export default App;
