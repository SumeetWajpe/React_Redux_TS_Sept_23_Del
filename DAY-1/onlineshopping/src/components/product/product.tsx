import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";

type ProductProps = {
  productdetails: ProductModel;
};

export default class Product extends Component<ProductProps> {
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

            <button className="btn btn-primary">
              {this.props.productdetails.likes}{" "}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
