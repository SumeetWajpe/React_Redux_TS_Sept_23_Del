import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";

const App: React.FC = () => {
  return (
    <>
      {/* <ListOfProducts /> */}
      <Posts />
    </>
  );
};

export default App;
