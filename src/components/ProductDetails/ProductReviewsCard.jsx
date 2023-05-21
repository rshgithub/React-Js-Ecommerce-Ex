import React from "react";
import { Rate, Card, Row, Avatar, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProductReviewsListData from "../../utils/ProductsLists/ProductReviewsListData";

const ProductReviewsCard = () => {
  const { Meta } = Card;

  return (
    <div style={{ height: "60vh" }}>
      {ProductReviewsListData.map((review) => (
        <Card
          key={review.id}
          style={{
            width: "90%",
            marginBottom: " 10px ",
            textAlign: "start",
            "@media (min-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <Meta
            title={
              <Row align="middle">
                <Col flex="0 0 auto">
                  <Avatar
                    src={review.avatar}
                    icon={<UserOutlined />} 
                  />
                </Col>
                <Col flex="auto">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "clamp(12px, 1.5vw, 15px)",
                    }}
                  >
                    <span style={{ marginLeft: "10px", flex: 1 }}>
                      {review.username}
                    </span>
                    <span style={{ marginRight: "10px" }}>{review.date}</span>
                    <Rate
                      style={{
                        fontSize: "clamp(12px, 2vw, 15px)",
                        marginLeft: "5",
                      }}
                      allowClear={false}
                      allowHalf
                      disabled
                      value={review.rating}
                    />
                  </p>
                </Col>
              </Row>
            }
          />

          <p style={{
                        fontSize: "clamp(12px, 2vw, 15px)",
                        marginLeft: "5",
                       marginTop: "10 auto" }}>{review.review}</p>
        </Card>
      ))}
    </div>
  );
};

export default ProductReviewsCard;
