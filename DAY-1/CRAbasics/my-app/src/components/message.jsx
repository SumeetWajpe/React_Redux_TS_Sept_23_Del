import React from "react";

export class Message extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.imageUrl}
          alt={this.props.msg}
          height="200px"
          width="300px"
        />
        <h2>{this.props.msg}</h2>
        <h3>From : {this.props.from} </h3>
        <h3>To : {this.props.to} </h3>
      </div>
    );
  }
}
