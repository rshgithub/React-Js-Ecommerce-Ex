import React from "react";
import { Button, Image, Row, Col, Typography } from "antd";
import "../App.css";

const AdsSection = () => {
  const { Title, Paragraph } = Typography;

  return (
    <Row
      style={{
        backgroundColor: "#2E90E5",
        marginBottom: "5%",
        marginTop: "5%",
      }}
    >
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          paddingLeft: "10%",
        }}
      >
        <Title
          level={2}
          style={{
            color: "white",
            fontSize: "clamp(24px, 4vw, 50px)",
            fontWeight: "lighter",
          }}
        >
          iPhone 6 Plus
        </Title>
        <Paragraph style={{ color: "white", fontSize: "150%" }}>
          Performance and design. Taken right to the edge.
        </Paragraph>
        <Button type="link" className="shop-now-button">
          SHOP NOW
        </Button>
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
  );
};

export default AdsSection;
