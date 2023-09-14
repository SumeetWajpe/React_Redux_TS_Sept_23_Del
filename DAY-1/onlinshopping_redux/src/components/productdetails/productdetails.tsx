import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { incrementLikes } from "../../redux/reducers/products.reducer";

export default function ProductDetails() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const products: ProductModel[] = useSelector(
    (store: AppState) => store.products,
  );

  const theProduct = products.find((p: ProductModel) => p.id == +id);
  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theProduct?.imageUrl}
              className="card-img-top"
              alt={theProduct?.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theProduct?.title}</h2>
            <Rating starscount={theProduct?.rating || 0} />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementLikes(theProduct?.id || 0))}
            >
              {theProduct?.likes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <p className="card-text">₹.{theProduct?.price}</p>

            <div>{theProduct?.description}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
