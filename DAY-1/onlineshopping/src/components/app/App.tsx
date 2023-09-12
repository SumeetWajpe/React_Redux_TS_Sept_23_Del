import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListOfProducts from "../listofproducts/listofproducts";
import Posts from "../posts/posts";
import { Message } from "../functional/functional.message";

class App extends React.Component {
  render() {
    // return <ListOfProducts />;
    // return <Posts />;
    return <Message />;
  }
}

export default App;
