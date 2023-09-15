import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";

export default function CartCount() {
  let cartItems = useSelector((store: AppState) => store.cart);
  return (
    <div>
      <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="badge text-bg-warning">{cartItems?.length}</span>
    </div>
  );
}
