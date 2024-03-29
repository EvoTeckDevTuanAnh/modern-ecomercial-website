import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs"; 
import { CiAlignLeft, CiHeart, CiUser, CiShoppingCart,CiGrid41 } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline : {" "}
                <a className="text-white" href="tel: +84 379063485">
                  +84 379063485
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white"> Ecom</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Search product here ...."
                  aria-label="Search product here ...."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-center">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <div className="icon">
                      <CiAlignLeft className="text-white" />
                    </div>
                    <p className="mb-0">Compare products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <div className="icon">
                      <CiHeart className="text-white" />
                    </div>
                    <p className="mb-0">Feature wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <div className="icon">
                      <CiUser className="text-white" />
                    </div>
                    <p className="mb-0">Log in my Account</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <div className="icon">
                      <CiShoppingCart className="text-white" />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom align-items-center d-flex gap-15">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 ps-0 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    <CiGrid41 className="text-white me-2"/>  <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-white" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-link align-items-center">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>Our Store</NavLink>
                    <NavLink to={"/"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
