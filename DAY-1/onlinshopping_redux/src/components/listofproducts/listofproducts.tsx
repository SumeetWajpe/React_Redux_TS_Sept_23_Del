import React, { useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

const ListOfProduct: React.FC = () => {
  let products = useSelector((store: AppState) => store.products);

  return (
    <div className="row">
      {products.map((product: ProductModel) => (
        <Product key={product.id} productdetails={product} />
      ))}
    </div>
  );
};

export default ListOfProduct;
