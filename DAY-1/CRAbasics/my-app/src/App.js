import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/message";

class App extends React.Component {
  messageOne = {
    msg: "Hello",
    from: "Joe",
    to: "Jim",
    imageUrl:
      "https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg",
  };
  render() {
    return (
      <div>
        <Message messagedetails={this.messageOne} />
        {/* <Message
          msg="Hi"
          from="Loe"
          to="Kim"
          imageUrl="https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg"
        />
        <Message
          msg="Hey"
          from="Joe"
          to="Lim"
          imageUrl="https://cdn2.vectorstock.com/i/1000x1000/59/56/hey-comic-word-vector-15865956.jpg"
        /> */}
      </div>
    );
  }
}

export default App;
