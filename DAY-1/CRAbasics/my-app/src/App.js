import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message
          msg="Hello"
          from="Joe"
          to="Jim"
          imageUrl="https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg"
        />
        {/* <Message msg="Hi" from="Loe" to="Kim" />
        <Message msg="Hey" from="Joe" to="Lim" /> */}
      </div>
    );
  }
}

export default App;
