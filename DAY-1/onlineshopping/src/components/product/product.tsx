import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";

type ProductProps = {
  productdetails: ProductModel;
  DeleteAProduct: (id: number) => void;
};

export default class Product extends Component<ProductProps> {
  state = { currLikes: this.props.productdetails.likes };
  incrementLikes() {
    console.log("++");
    //this.props.productdetails.likes++; // Props are readonly
    // this.state.currLikes++; // State is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="card p-2 m-2">
          <img
            src={this.props.productdetails.imageUrl}
            className="card-img-top"
            alt="..."
            height="150px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.productdetails.title}</h5>
            <p className="card-text">
              <Rating starscount={this.props.productdetails.rating} />
            </p>

            <p className="card-text">₹.{this.props.productdetails.price}</p>

            {/* <p className="card-text">{this.props.productdetails.rating}</p> */}

            <button
              className="btn btn-primary"
              onClick={() => this.incrementLikes()}
            >
              {/* {this.props.productdetails.likes}{" "} */}
              {this.state.currLikes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() =>
                this.props.DeleteAProduct(this.props.productdetails.id)
              }
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
