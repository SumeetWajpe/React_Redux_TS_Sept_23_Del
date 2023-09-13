import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import InputMessage from "../message/inputMessage";

const App: React.FC = () => {
  return (
    <>
      {/* <ListOfProducts /> */}
      {/* <Posts /> */}
      {/* <GetPostById /> */}
      <InputMessage />
    </>
  );
};

export default App;
