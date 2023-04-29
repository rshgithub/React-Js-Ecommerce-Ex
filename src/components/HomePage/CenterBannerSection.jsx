import React from "react";
import { Button,  Image, Row, Col } from "antd";
import "./HomePage.css";

const CenterBannerSection = () => {
  return (
    <div>
      <Row style={{ backgroundColor: "#2E90E5" }}>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: 'white' , fontSize: 50 , fontWeight: 'lighter' ,   }} >iPhone 6 Plus</h2>
          <p style={{ color: 'white' , fontSize: 20 }} >Performance and design. Taken right to the edge.</p> 
          <Button className="shop-now-button" >SHOP NOW</Button>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Image
            preview={false}
            src="https://priceanywhere.com/wp-content/uploads/iPhone-6s-Plus-Price-in-Nigeria.png"
            height="500px"
            width="600px"
          />
        </Col>
      </Row>
    </div>
  );
};

export default CenterBannerSection;
