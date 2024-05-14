import React from "react";
import "../css/home.css";
import {Link} from 'react-router-dom'
import MainImage from "../img/main.png";
// import oneImage from "../img/1.png";
import twoImage from "../img/2.png";
// import threeImage from "../img/3.png";
import fourImage from "../img/4.png";
import fiveImage from "../img/5.png";
import sixImage from "../img/6.png";
import sevenImage from "../img/7.png";
import eightImage from "../img/8.png";
import nineImage from "../img/9.png";
import tenImage from "../img/10.png";
import storeImage from "../img/store.png";
import cashImage from "../img/cashback.png";
import deliveryImage from "../img/delivery.png";
import paymentImage from "../img/payment.png";
import qualityImage from "../img/quality.png";

// import Footer from './inc/footer'

function Home() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 order-md-2 main-image-container">
          <img src={MainImage} alt={"main"} className="img-fluid main-image" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="main-header">
            Wrap your body nicely
            <br /> and comfy
          </h2>
          <p className="main-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            velit a est sagittis blandit. Mauris consectetur mollis sem, sed
            lobortis leo eleifend eu. Ut sit amet ipsum nulla. Nulla vel est
            quis mi congue egestas.{" "}
          </p>

          <div className="btn-container d-flex justify-content-center align-items-center">
            <Link to='/products'><button className="shop-btn">SHOP NOW</button></Link>
            <button className="about-btn">ABOUT US</button>
          </div>
        </div>
      </div>

      <div className="content container-fluid mb-5">
        <div className="container mt-5 mb-5 store-container">
          <div className="row mt-4">
            <div className="col-md-6">
              <img
                src={storeImage}
                alt={"store"}
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-md-6 mb-5">
              <h2 className="text-center store-header mb-5">Why Choosing Us </h2>
              <div className="row row-cols-2">
              <div className="col mb-5 ml-5">
              <img
                src={qualityImage}
                alt={"store"}
                className="img-fluid d-block col-md-3 float-left"
              />
              <h5 className="text-left">Top Quality</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut la</p>
              </div>
              <div className="col">
                <img
                src={deliveryImage}
                alt={"store"}
                className="img-fluid d-block col-md-3"
              />
              <h5 className="text-left">Fast Delivery</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut la</p>
              </div>
              <div className="col mb-5">
              <img
                src={cashImage}
                alt={"store"}
                className="img-fluid d-block col-md-3 float-left"
              />
              <h5 className="text-left">Cashback Reward</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut la</p>
              </div>
              <div className="col">
              <img
                src={paymentImage}
                alt={"store"}
                className="img-fluid d-block col-md-3"
              />
              <h5 className="text-left">Secure Payment</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut la</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="arrival-container">
        <div className="header mb-5 mt-5">New Arrival</div>
        <div className="row mt-5">
          <div className="col-md-3 arrival-img">
            <img
              src={twoImage}
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5>Frock</h5>
            <p className="mb-5">Rs 1000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src={twoImage}
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5>Frock</h5>
            <p className="mb-5">Rs 1000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src={fourImage}
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5>Frock</h5>
            <p className="mb-5">Rs 1000</p>
          </div>
          <div className="col-md-3 arrival-img">
            <img
              src={fourImage}
              alt={"atrrival "}
              className="img-fluid arrival-img"
            />
            <h5>Frock</h5>
            <p className="mb-5">Rs 1000</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="summer-container"></div>
        <div className="header mb-5">Summer Collection</div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={fiveImage} alt={"atrrival "} className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src={sixImage} alt={"atrrival "} className="img-fluid mt-5" />
          </div>
          <div className="col-md-4">
            <img src={sevenImage} alt={"atrrival "} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="header mb-3 mt-5">Popular This Week</div>
        <div className="row">
          <div className="col-md-4">
            <img src={eightImage} alt={"atrrival "} className="img-fluid" />
            <h5>Frock</h5>
            <p>Rs 1000</p>
            <button className="add-to-cart d-flex justify-content-center align-items-center">
              Add to Cart
            </button>
          </div>
          <div className="col-md-4">
            <img src={nineImage} alt={"atrrival "} className="img-fluid" />
            <h5>Frock</h5>
            <p>Rs 1000</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="col-md-4">
            <img src={tenImage} alt={"atrrival "} className="img-fluid" />
            <h5>Frock</h5>
            <p>Rs 1000</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
