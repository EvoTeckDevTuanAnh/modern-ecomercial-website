import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="img/product-3.jpg" alt="" className="img-fluid " />
          </div>
          <div className="special-product-content">
            <h6 className="brand">havels</h6>
            <h5>Kids headphone bulk 10 pack multi colored for students</h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100.00</span> <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-3">
              <p className="mb-0 ">
                <b>5 days {" "}</b>
              </p>
              <div className="d-flex gap-10  align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span> :
                <span className="badge rounded-circle p-3 bg-danger">1</span> :
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
                Products : 5
                <div className="progress mt-2">
                    <div className="progress-bar" style={{width : "25%"}} aria-valuemax={100} aria-valuenow={25} aria-valuemin={0} ></div>
                </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
