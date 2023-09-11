import React from "react";

type MessageProps = {
  messageDetails: {
    msg: string;
    to: string;
    from: string;
    imageUrl: string;
  };
};

export class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div>
        <h2> {this.props.messageDetails.msg} </h2>
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
