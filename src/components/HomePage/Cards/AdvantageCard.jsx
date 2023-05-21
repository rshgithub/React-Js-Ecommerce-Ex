import React from "react";
import { Card, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AdvantageCard = ({ obj }) => {
  return (
    <Card style={{ border: "none" }}>
      <Col
        align="middle"
        justify="center"
        style={{
          marginTop: "2%",
          marginBottom: "5%",
        }}
      >
        {obj.icon}
        <Title level={5}>{obj.title}</Title>
        <Paragraph style={{ fontSize: "1.5rem", width: "80%" }}>
          {obj.desc}
        </Paragraph>
      </Col>
    </Card>
  );
};

export default AdvantageCard;
