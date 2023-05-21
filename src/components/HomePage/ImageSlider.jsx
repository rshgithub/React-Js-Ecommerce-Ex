import React from "react";
import Iphone from "../../assets/MaskGroup1.png";
import Banner from "../../assets/Banners.png";
import "../../App.css";
import { Image } from "antd";

const ImageSlider = () => {
  return (
    <>
      <div className="carousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src={Iphone} />
              <div className="carousel-caption">
                <h1>iPhone X</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <a href="#">MORE</a>
              </div>
            </div>

            <div className="item">
              <img src={Iphone} />
              <div className="carousel-caption">
                <h1>iPhone X</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <a href="#">MORE</a>
              </div>
            </div>

            <div className="item">
              <img src={Iphone} />
              <div className="carousel-caption">
                <h1>iPhone X</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <a href="#">MORE</a>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="slider">
        <Image src={Banner} preview={false} />
      </div>
    </>
  );
};

export default ImageSlider;
