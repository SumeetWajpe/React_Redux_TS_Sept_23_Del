import React from "react";
import { useForm } from "react-hook-form";
type NewProductInputs = {
  id: number;
  title: string;
  price: number;
  rating: number;
  likes: number;
  imageUrl: string;
};
export default function NewProductWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductInputs>({ mode: "onChange" });
  return (
    <div>
      <h1>New Product</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit(newProduct => {
            // fetch api (JSON server)
          })}
        >
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductId">Id : </label>
            </div>
            <div className="col-md-8">
              <input
                type="number"
                id="txtProductId"
                {...register("id", { required: true })}
              />
              {errors.id ? (
                <p style={{ color: "red" }}>Id is required !</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input type="text" id="txtProductTitle" {...register("title")} />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductPrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductPrice"
                {...register("price")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductRating"
                {...register("rating")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtProductLikes"
                {...register("likes")}
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-4">
              <label htmlFor="txtProductImageUrl">Image : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtProductImageUrl"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <button className="btn btn-success">
                Add new product{" "}
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
