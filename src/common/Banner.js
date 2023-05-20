import React from "react";
import { Image, Row, Col, Typography } from "antd";
import Iphone from "../assets/pic.png";
import "../App.css";

const CenterBannerSection = () => {
  return (
    <Row className="hero">
      <Col span={12} className="hero-text">
        <h2> iPhone 8 </h2>
        <Typography.Paragraph className="text">
          Performance and design.Taken right to the edge.
        </Typography.Paragraph>
        <a>SHOP NOW</a>
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          position: "absolute",
          left: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={Iphone}
          style={{
            objectFit: "cover",
          }}
          height="300px"
          width="400px"
          preview={false}
        />
      </Col>
    </Row>
  );
};

export default CenterBannerSection;
