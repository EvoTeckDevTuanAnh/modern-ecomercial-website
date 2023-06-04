import React from "react";
import ReactStars from "react-rating-stars-component";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { AiOutlineEye, AiOutlineTag } from "react-icons/ai";

import { Link } from "react-router-dom";
const ProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <CiHeart className="text-dark" />
          </Link>
        </div>
        <div className="product-image justify-content-center d-flex mb-4">
          <img src="img/product-3.jpg" alt="" className="img-fluid " />
          <img src="img/product-4.jpg" alt="" className="img-fluid " />
        </div>
        <div className="product-details">
          <h6 className="brand">havels</h6>
          <h5>Kids headphone bulk 10 pack multi colored for students</h5>
          <ReactStars count={5} size={24} edit={false} activeColor="#ffd700" />
          <p className="price">$100.00</p>
        </div>
        <div className="action-btn position-absolute">
          <div className="d-flex flex-column gap-15 item">
            <Link>
              <CiShuffle className="text-dark" />
            </Link>
            <Link>
              <AiOutlineEye className="text-dark" />
            </Link>
            <Link>
              <AiOutlineTag className="text-dark" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
