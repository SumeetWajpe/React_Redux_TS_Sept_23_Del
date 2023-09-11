import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

export default App;
