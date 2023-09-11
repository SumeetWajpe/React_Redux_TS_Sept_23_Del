import React from "react";
import { MessageModel } from "../../models/message.models";
import "./message.css";
type MessageProps = {
  messageDetails: MessageModel;
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div className="msg-card">
        <img
          src={this.props.messageDetails.imageUrl}
          alt={this.props.messageDetails.msg}
          height="200px"
          width="300px"
        />
        <h2>{this.props.messageDetails.msg}</h2>
        <h3>From : {this.props.messageDetails.from} </h3>
        <h3>To : {this.props.messageDetails.to} </h3>
      </div>
    );
  }
}

//  <img
//           src={this.props.messagedetails.imageurl}
//           alt={this.props.messagedetails.msg}
//           height="200px"
//           width="300px"
//         />
//         <h2>{this.props.messagedetails.msg}</h2>
//         <h3>From : {this.props.messagedetails.from} </h3 >
