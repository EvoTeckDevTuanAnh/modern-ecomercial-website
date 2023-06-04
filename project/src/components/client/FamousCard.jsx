import React from "react";

const FamousCard = ({darkText,img , title , name , decs}) => {
  return (
    <div className="col-3">
      <div className="famous-card position-relative">
        <img src={img ?"img/"+ img: "img/famous-1.jpg"} className="img-fluid" alt="" />
        <div className="famous-content position-absolute">
          <h5 className={darkText && "text-dark"}>{title}</h5>
          <h6 className={darkText && "text-dark"}>{name}</h6>
          <p  className={darkText && "text-dark"}>{decs}</p>
        </div>
      </div>
    </div>
  );
};

export default FamousCard;
