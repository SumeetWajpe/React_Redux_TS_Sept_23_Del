import React, { Component } from "react";
import Icon from "../../atoms/icon/icon";

type RatingProps = {
  starscount: number;
};

export default class Rating extends Component<RatingProps> {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.starscount; index++) {
      ratings.push(<Icon />);
    }
    return <div>{ratings}</div>;
  }
}
