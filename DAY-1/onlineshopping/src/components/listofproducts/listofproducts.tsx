import React, { Component } from "react";
import { ProductModel } from "../../models/product.model";
import Product from "../product/product";

export default class ListOfProducts extends Component {
  state = {
    products: [
      new ProductModel(
        1,
        "Mac Book Pro",
        250000,
        5,
        200,
        "https://media.wired.com/photos/616dbbf068e20e14c563bb3f/master/pass/Gear-Apple-Macbook-Pros-M1-Pro-2021.jpg",
      ),
      new ProductModel(
        2,
        "Mac Book Air",
        200000,
        4,
        100,
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/macbook_air_m1-sixteen_nine.jpg?size=948:533",
      ),
      new ProductModel(
        3,
        "Headphones",
        2000,
        4,
        300,
        "http://cdn.shopify.com/s/files/1/0057/8938/4802/articles/boAt-Rockerz-510---Best-Wireless-Headphones-of-2021_1.jpg?v=1611915753",
      ),
      new ProductModel(
        4,
        "Apple iPod",
        10000,
        4,
        100,
        "https://photos5.appleinsider.com/gallery/50934-100709-ipods-xl.jpg",
      ),
      new ProductModel(
        5,
        "JBL Speaker",
        20000,
        3,
        400,
        "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/What-Is-the-Newest-JBL-Speaker-Out-Now.png?fit=935%2C523&ssl=1",
      ),
    ],
  };

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
  }

  DeleteAProduct(id: number) {
    console.log("Deleting..", id);
    let newProductList = this.state.products.filter(p => p.id !== id);
    this.setState({ products: newProductList });
  }

  render() {
    console.log("Render..");
    return (
      <div className="row">
        {this.state.products.map((product: ProductModel) => (
          <Product
            productdetails={product}
            DeleteAProduct={(id: number) => this.DeleteAProduct(id)}
          />
        ))}
      </div>
    );
  }
}
