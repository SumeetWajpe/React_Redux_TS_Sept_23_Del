import React, { useState } from "react";
import { ProductModel } from "../../models/product.model";
import Rating from "../molecules/rating/rating";
import { Link } from "react-router-dom";

type ProductProps = {
  productdetails: ProductModel;
};

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const [currLikes, setCurrLikes] = useState<number>(
    props.productdetails.likes,
  );
  return (
    <>
      <div className="col-md-3">
        <div className="card p-2 m-2">
          <Link to="/productdetails">
            <img
              src={props.productdetails.imageUrl}
              className="card-img-top"
              alt="..."
              height="150px"
              width="200px"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.productdetails.title}</h5>
            <p className="card-text">
              <Rating starscount={props.productdetails.rating} />
            </p>

            <p className="card-text">₹.{props.productdetails.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => setCurrLikes(currLikes + 1)}
            >
              {currLikes}
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
// export default class Product extends Component<ProductProps> {
//   state = { currLikes: this.props.productdetails.likes };
//   incrementLikes() {
//     console.log("++");
//     //this.props.productdetails.likes++; // Props are readonly
//     // this.state.currLikes++; // State is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }

//   render() {
//     return (
// <div className="col-md-3">
//   <div className="card p-2 m-2">
//     <img
//       src={this.props.productdetails.imageUrl}
//       className="card-img-top"
//       alt="..."
//       height="150px"
//       width="200px"
//     />
//     <div className="card-body">
//       <h5 className="card-title">{this.props.productdetails.title}</h5>
//       <p className="card-text">
//         <Rating starscount={this.props.productdetails.rating} />
//       </p>

//       <p className="card-text">₹.{this.props.productdetails.price}</p>

//       {/* <p className="card-text">{this.props.productdetails.rating}</p> */}

//       <button
//         className="btn btn-primary"
//         onClick={() => this.incrementLikes()}
//       >
//         {/* {this.props.productdetails.likes}{" "} */}
//         {this.state.currLikes}
//         <i className="fa-solid fa-thumbs-up"></i>
//       </button>
//       <button
//         className="btn btn-danger mx-1"
//         onClick={() =>
//           this.props.DeleteAProduct(this.props.productdetails.id)
//         }
//       >
//         <i className="fa-solid fa-trash"></i>
//       </button>
//     </div>
//   </div>
// </div>
//     );
//   }
// }
