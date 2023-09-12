import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";

const App: React.FC = () => {
  return (
    <>
      {/* <ListOfProducts /> */}
      {/* <Posts /> */}
      <GetPostById />
    </>
  );
};

export default App;
