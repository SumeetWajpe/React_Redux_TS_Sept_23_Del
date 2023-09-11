import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "../message/message";
import { MessageModel } from "../../models/message.models";

class App extends React.Component {
  messages: MessageModel[] = [
    {
      msg: "Hello",
      from: "Joe",
      to: "Jim",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg",
    },
    {
      msg: "Hi",
      from: "Loe",
      to: "Kim",
      imageUrl:
        "https://img.freepik.com/premium-vector/hi-word-speech-bubble-funny-lettering-typography-sticker-social-media-content_102918-48.jpg",
    },
    {
      msg: "Hey",
      from: "Joe",
      to: "Lim",
      imageUrl:
        "https://cdn2.vectorstock.com/i/1000x1000/59/56/hey-comic-word-vector-15865956.jpg",
    },
  ];
  render() {
    return (
      <div>
        {this.messages.map((message: MessageModel) => (
          <Message messageDetails={message} />
        ))}
      </div>
    );
  }
}

export default App;
