import React from "react";

export class Message extends React.Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}
