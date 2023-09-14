import React, { useState } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";

type ProductProps = {
  productdetails: ProductModel;
};

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card p-2 m-2">
          {/* <Link to={"/productdetails/" + props.productdetails.id}> */}
          <img
            src={props.productdetails.imageUrl}
            className="card-img-top"
            alt="..."
            height="150px"
            width="200px"
          />
          {/* </Link> */}
          <div className="card-body">
            <h5 className="card-title">{props.productdetails.title}</h5>
            <p className="card-text">
              <Rating starscount={props.productdetails.rating} />
            </p>

            <p className="card-text">₹.{props.productdetails.price}</p>

            <button className="btn btn-primary">
              {props.productdetails.likes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button className="btn btn-danger mx-1">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
