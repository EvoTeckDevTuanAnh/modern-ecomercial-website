import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-img">
          <img src="img/blog.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec , 2023</p>
          <h5 className="title">A beautiful sunday morning remaining</h5>
          <p className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <Link className="button">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
