import React from "react";
import { Link } from "react-router-dom";
import {
  CiDeliveryTruck,
  CiBadgeDollar,
  CiBullhorn,
  CiHeadphones,
  CiCreditCard1,
} from "react-icons/ci";
import Marquee from "react-fast-marquee";
import Blog from "../../components/client/Blog";
import ProductCard from "../../components/client/ProductCard";
import SpecialProduct from "../../components/client/SpecialProduct";
import FamousCard from "../../components/client/FamousCard";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="img/main-content-2.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHANGED FOR PROS</h4>
                  <h5>MacBook Air PRO</h5>
                  <p>From $999.00 or $41.23/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between aligh-items-center gap-10">
                <div className="small-banner position-relative">
                  <img
                    src="img/small-content-1.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHANGED FOR PROS</h4>
                    <h5>MacBook Air PRO</h5>
                    <p>From $999.00 or $41.23/mo.</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="img/small-content-2.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHANGED FOR PROS</h4>
                    <h5>Headphone</h5>
                    <p>From $999.00 or $41.23/mo.</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="img/small-content-3.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHANGED FOR PROS</h4>
                    <h5>Iphone 14</h5>
                    <p>From $999.00 or $41.23/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="img/small-content-5.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHANGED FOR PROS</h4>
                    <h5>HD screen</h5>
                    <p>From $999.00 or $41.23/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex aligh-items-center justify-content-between">
                <div className="d-flex gap-10 aligh-items-center">
                  <CiDeliveryTruck className="services fs-1" />
                  <div>
                    <h6>Free Shiping</h6>
                    <p className="mb-0">From all order over $100</p>
                  </div>
                </div>
                <div className="d-flex gap-15 aligh-items-center">
                  <CiHeadphones className="services fs-1" />
                  <div>
                    <h6>Dayly Supprise Offer</h6>
                    <p className="mb-0">Save up to 25%</p>
                  </div>
                </div>
                <div className="d-flex gap-15 aligh-items-center">
                  <CiBullhorn className="services fs-1" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an exper</p>
                  </div>
                </div>
                <div className="d-flex gap-15 aligh-items-center">
                  <CiBadgeDollar className="services fs-1" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex gap-15 aligh-items-center">
                  <CiCreditCard1 className="services fs-1" />
                  <div>
                    <h6>Secure payment</h6>
                    <p className="mb-0">100% protection payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between aligh-items-center flex-wrap">
                <div className="d-flex gap-30 aligh-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-1.jpg" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-5.png" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Smart Watchs</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-6.jpg" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/service-4.jpg" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-1.jpg" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-5.png" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Smart Watchs</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/services-6.jpg" alt="" />
                </div>
                <div className="d-flex gap aligh-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="img/service-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feature Collection</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <FamousCard
              title={"Big Screen"}
              name={"Smart Watch Series 7"}
              decs={"From $399.0 or $16.45/mo. 24 mo."}
            />
            <FamousCard
              title={"Studio Display"}
              name={"600 nits of brightness"}
              decs={"27 inch 5k Retine display"}
              img={"famous-2.jpg"}
              darkText={true}
            />
            <FamousCard
              title={"Smartphone"}
              name={"Smartphone 13 Pro"}
              decs={"Now in green from $999.00 or $41.21/mo. 24 mo."}
              img={"famous-3.jpg"}
              darkText={true}
            />
            <FamousCard
              title={"Home Speaker"}
              name={"Room filling sound"}
              decs={"From $399.0 or $16.45/mo. 24 mo."}
              img={"famous-4.jpg"}
              darkText={true}
            />
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Product</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-warpper card-wrapper">
                <Marquee className="d-flex aligh-items-center">
                  <div className="mx-4 w-25">
                    <img src="img/brand-1.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/brand-2.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/brand-3.svg" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/brand-4.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/brand-5.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our lastest Blogs</h3>
            </div>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
