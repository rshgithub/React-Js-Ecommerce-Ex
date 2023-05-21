import { Rate, Image, Card, Typography, Row, Col } from "antd";
import React from "react";

const FeaturedProductCard = ({ obj }) => {
  const { Text, Paragraph } = Typography;

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
          width={160}
          height={160}
          style={{ objectFit: "cover" }}
          preview={false}
        />

        <Col style={{ marginLeft: 10 }} xs={8} sm={10} md={12}>
          <div style={{ marginTop: 30 }}>
            <Paragraph
              ellipsis={{ rows: 2, expandable: true }}
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {obj.title}
            </Paragraph>
            <Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {obj.description}
            </Paragraph>
          </div>
          <Rate
            style={{ fontSize: "16px" }}
            allowClear={false}
            allowHalf
            disabled
            value={obj.rating}
          />
          <Paragraph
            type="danger"
            style={{
              fontSize: "20px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          >
            {"$ "}
            {obj.lastPrice}{" "}
            <Text
              disabled
              delete
              style={{
                fontSize: "20px",
                marginTop: "2px",
                marginBottom: "2px",
              }}
            >
              {"$ "}
              {obj.originalPrice}
            </Text>
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default FeaturedProductCard;
