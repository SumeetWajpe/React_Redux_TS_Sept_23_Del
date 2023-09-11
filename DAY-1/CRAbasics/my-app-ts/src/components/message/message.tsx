import React from "react";
import { MessageModel } from "../../models/message.models";
import "./message.css";
type MessageProps = {
  messageDetails: MessageModel;
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div className="col-md-3">
        <div className="card p-2 m-2">
          <img
            src={this.props.messageDetails.imageUrl}
            className="card-img-top"
            alt="..."
            height="150px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.messageDetails.msg}</h5>
            <p className="card-text">From : {this.props.messageDetails.from}</p>
            <p className="card-text">To : {this.props.messageDetails.to}</p>
          </div>
        </div>
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
