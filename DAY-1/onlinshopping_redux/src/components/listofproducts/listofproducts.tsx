import React, { useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { SagaActions } from "../../saga/sagaActions";

const ListOfProduct: React.FC = () => {
  let products = useSelector((store: AppState) => store.products);
  let dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: SagaActions.FETCH_ALL_PRODUCTS });
        }}
      >
        Get All Products
      </button>
      <div className="row">
        {products.map((product: ProductModel) => (
          <Product key={product.id} productdetails={product} />
        ))}
      </div>
    </>
  );
};

export default ListOfProduct;
