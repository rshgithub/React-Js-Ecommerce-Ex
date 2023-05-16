import React from "react";
import Payment from "../assets/payments.png";
import { Space, Col, Divider, Image, Row } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import "../App.css";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Footer = () => {
  return (
    <div className="footer">
      <Divider orientation="left"></Divider>
      <Row className="footer-content">
        <Col xs={24} xl={6}>
          <div className="super-title">BOUNCER</div>
          <div className="super-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </div>
        </Col>
        <Col xs={24} xl={6}>
          <div className="title">Follow Us</div>
          <div className="super-text">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </div>
          <Space>
            <IconFont type="icon-facebook" style={{ color: "#385C8E" }} />
            <IconFont type="icon-twitter" style={{ color: "#03A9F4" }} />
          </Space>
        </Col>
        <Col xs={24} xl={6}>
          <div className="title">Contact Us</div>
          <div className="c-item">
            <div className="text-item">
              My Company , 4578 Marmora Road, Glasgow
            </div>
          </div>
          <div className="c-item">
            <div className="text-item">D04 89GR</div>
          </div>
          <div className="c-item">
            <div className="text-item">Call us now: 0123-456-789</div>
          </div>
          <div className="c-item">
            <div className="text-item">Email: support@whatever.com</div>
          </div>
        </Col>
        <Divider orientation="left"></Divider>
        <Col xs={24} xl={3}>
          <div className="title">Information</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">Service</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">Useful Links</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">Extras</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">My Account</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">Userful Links</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
        <Col xs={24} xl={3}>
          <div className="title">Our Offers</div>
          <span className="text-item">About Us</span>
          <span className="text-item">Information</span>
          <span className="text-item">Privacy Policy</span>
          <span className="text-item">Terms & Conditions</span>
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </span>
          <Image preview={false} src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
