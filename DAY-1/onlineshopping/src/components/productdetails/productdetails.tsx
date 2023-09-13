import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";

export default function ProductDetails() {
  const { id } = useParams();
  const [theProduct, setTheProduct] = useState(new ProductModel());
  useEffect(() => {
    fetch(`http://localhost:3500/products/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((product: ProductModel) => setTheProduct(product));
  }, []);
  return (
    <div>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theProduct.imageUrl}
              className="card-img-top"
              alt={theProduct.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theProduct.title}</h2>
            <Rating starscount={theProduct.rating} />
            <p className="card-text">₹.{theProduct.price}</p>

            <div>{theProduct.description}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
