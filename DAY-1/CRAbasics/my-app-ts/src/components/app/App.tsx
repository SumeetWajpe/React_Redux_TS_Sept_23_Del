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
        "https://grammarist.com/wp-content/uploads/Grammarist-Featured-Image-V7-2023-02-12T210904.857.png",
    },
  ];
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.messages.map((message: MessageModel) => (
          <Message messageDetails={message} />
        ))}
      </div>
    );
  }
}

export default App;
