import React from "react";
import { CiCloudOn,CiFacebook,CiInstagram,CiTwitter,CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <CiCloudOn className="text-white footer-icon" />
                <h4 className="text-white mb-0">
                  Sign up for best option advide
                </h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email ... "
                  aria-label="Your email ...."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscire
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6 ">Hno : 115 Van Chuong , Ton Duc Thang Stress <br />
                </address>
                <a href="tel: +084 379063485" className="text-white mt-4 d-block mb-2">+084 379063485</a>
                <a href="mailto:nguyenta881999@gmail.com" className="text-white mt-3 d-block mb-2">nguyenta881999@gmail.com</a>
                <div className="social-icon mt-4 mb-2 d-flex aligh-items-center gap-15">
                  <a href=""><CiFacebook className="text-white fs-3"/></a>
                  <a href=""><CiInstagram className="text-white fs-3"/></a>
                  <a href=""><CiTwitter className="text-white fs-3"/></a>
                  <a href=""><CiYoutube className="text-white fs-3"/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infomation</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refuse Policy</Link>
                <Link className="text-white py-2 mb-1">Shiping Policy</Link>
                <Link className="text-white py-2 mb-1">Term & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Fag</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quicl Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy : {new Date().getFullYear()} : Powered by developer N.T.A
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
