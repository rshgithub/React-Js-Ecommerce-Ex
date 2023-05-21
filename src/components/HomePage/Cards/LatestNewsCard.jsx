import { Card, Typography, Row, Col, Image } from "antd";
import React from "react";
const LatestNewsCard = ({ obj }) => {
  const { Title, Paragraph } = Typography;
  return (
    <Card
      style={{
        border: "none",
        width: "100%",
        height: "auto%",
        textAlign: "start",
      }}
    >
      <Row style={{ display: "flex" }}>
        <Image
          src={obj.image}
          alt="example"
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          preview={false}
        />

        <Col
          style={{ marginLeft: 20 }}
          xs={10}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={14}
        >
          <Paragraph style={{ fontSize: "14px" }}>
            <h5 style={{ color: "#C1C8CE", fontSize: "13px" }}>{obj.date}</h5>
            <Title level={5}>{obj.title}</Title>
          </Paragraph>
          <Paragraph style={{ fontSize: "1.5rem", width: "100%" }}>
            {obj.desc}
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default LatestNewsCard;
