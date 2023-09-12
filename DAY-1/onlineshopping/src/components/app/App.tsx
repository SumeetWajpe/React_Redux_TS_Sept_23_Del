import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";

class App extends React.Component {
  render() {
    // return <ListOfProducts />;
    return <Posts />;
  }
}

export default App;
