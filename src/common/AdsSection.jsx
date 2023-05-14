import React from "react";
import { Button, Image, Row, Col } from "antd";
import "../App.css";

const AdsSection = () => {
  return (
    <div>
  <Row style={{ backgroundColor: "#2E90E5" }}>
    <Col
      xs={{ span: 24 }}
      md={{ span: 12 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", fontSize: "clamp(24px, 4vw, 50px)", fontWeight: "lighter" }}>
        iPhone 6 Plus
      </h2>
      <p style={{ color: "white", fontSize: "clamp(12px, 2vw, 20px)" }}>
        Performance and design. Taken right to the edge.
      </p>
      <Button className="shop-now-button">SHOP NOW</Button>
    </Col>
    <Col
      xs={{ span: 24 }}
      md={{ span: 12 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        preview={false}
        src="https://priceanywhere.com/wp-content/uploads/iPhone-6s-Plus-Price-in-Nigeria.png"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Col>
  </Row>
</div>

  );
};

export default AdsSection;
