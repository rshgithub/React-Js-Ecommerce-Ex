import React from "react";
import Iphone from "../../assets/MaskGroup1.png";
import Banner from "../../assets/Banners.png";
import { Image } from "antd";

const ImageSlider = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,0,0), rgba(213,83,151),rgba(153,98,240))",
        }}
      >
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src={Iphone} style={{ width: "50%" }} />
              <div className="carousel-caption">
                <h3>iPhone X</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam etiam at quis ut convallis.
                </p>
                <a
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "3px solid white",
                  }}
                >
                  MORE
                </a>
              </div>
            </div>

            <div className="item">
              <img src={Iphone} style={{ width: "50%" }} />
              <div className="carousel-caption">
                <h3>iPhone X</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam etiam at quis ut convallis.
                </p>
                <a
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "3px solid white",
                  }}
                >
                  MORE
                </a>
              </div>
            </div>

            <div className="item">
              <img src={Iphone} style={{ width: "50%" }} />
              <div className="carousel-caption">
                <h3>iPhone X</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam etiam at quis ut convallis.
                </p>
                <a
                  href="#"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    borderBottom: "3px solid white",
                  }}
                >
                  MORE
                </a>
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
      <div
        style={{
          top: "108%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: "15%",
          right: "15%",
        }}
      >
        <Image src={Banner} preview={false} height="300px" />
      </div>
    </>
  );
};

export default ImageSlider;
