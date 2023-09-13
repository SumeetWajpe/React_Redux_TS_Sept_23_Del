import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import InputMessage from "../message/inputMessage";
import NewProduct from "../newproduct/newproduct";

const App: React.FC = () => {
  return (
    <>
      {/* <ListOfProducts /> */}
      {/* <Posts /> */}
      {/* <GetPostById /> */}
      {/* <InputMessage /> */}
      <NewProduct />
    </>
  );
};

export default App;
