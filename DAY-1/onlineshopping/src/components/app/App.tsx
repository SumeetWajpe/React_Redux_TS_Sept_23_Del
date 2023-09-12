import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import Counter from "../functional/counter";

const App: React.FC = () => {
  return (
    <>
      <Counter />
      {/* <ListOfProducts /> */}
    </>
  );
};

export default App;
