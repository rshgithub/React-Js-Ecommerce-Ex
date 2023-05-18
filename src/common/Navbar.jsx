import { Menu, Space } from "antd";
import React from "react";
import { Container } from "reactstrap";
import "../App.css";

const NavBar = () => {
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        <h1 style={{ color: "red" }}>BOUNCER</h1>
      </div>

      <div className="content">
        <ul className="exo-menu">
          <li className="mega-drop-down">
            <a className="active" href="#">
              HOME
            </a>
            <div className="mega-menu">
              <div className="mega-menu-wrap">
                <div className="row">
                  <div className="col-md-3">
                    <h4 className="row mega-title">Category</h4>
                    <ul className="stander">
                      <li>
                        <a href="#">AirPort & Wireless</a>
                      </li>
                      <li>
                        <a href="#">AppleCare</a>
                      </li>
                      <li>
                        <a href="#">Bags, Shells & Sleeves</a>
                      </li>
                      <li>
                        <a href="#">Business & Security</a>
                      </li>
                      <li>
                        <a href="#">Cables & Docks</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h4 className="row mega-title" style={{ color: "#fff" }}>
                      Category
                    </h4>
                    <ul className="stander">
                      <li>
                        <a href="#">Cameras & Video</a>
                      </li>
                      <li>
                        <a href="#">Car & Travel</a>
                      </li>
                      <li>
                        <a href="#">Cases & Films</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h4 className="row mega-title">Category</h4>
                    <ul className="description">
                      <li>
                        <a href="#">Charging Devices</a>
                      </li>
                      <li>
                        <a href="#">Connected Home</a>
                      </li>
                      <li>
                        <a href="#">Device Care</a>
                      </li>
                      <li>
                        <a href="#">Display & Graphic</a>
                      </li>
                      <li>
                        <a href="#">Fitness & Sport</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h4 className="row mega-title" style={{ color: "#fff" }}>
                      Category
                    </h4>
                    <ul className="icon-des">
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a href="#">HealhKit</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h4 className="row mega-title">Category</h4>
                    <ul className="description">
                      <li>
                        <a href="#">Mice & Keyboards</a>
                      </li>
                      <li>
                        <a href="#">Music Creation</a>
                      </li>
                      <li>
                        <a href="#">Networking & Server</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">STORE</a>
          </li>
          <li>
            <a href="#">IPHONE</a>
          </li>
          <li>
            <a href="#">IPAD</a>
          </li>
          <li>
            <a href="#">MACBOOK</a>
          </li>
          <li>
            <a href="#">ACCESORIES</a>
          </li>

          <a href="#" className="toggle-menu visible-xs-block">
            <i class=" fa fa-bars"></i>
          </a>
        </ul>
      </div>
    </Container>
  );
};

export default NavBar;
