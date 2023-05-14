import React from "react";
import { Rate, Card, List, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProductReviewsList from "../../utils/ProductsLists/ProductReviewsList";

const ProductReviewsCard = () => {
 
  const { Meta } = Card;

  return (
    <div>
      <div style={{ height: 500, overflowY: "scroll" , }}>
        {ProductReviewsList.map((review) => (
          <Card
            key={review.id}
            style={{ height: 150, width: 1000, margin: 5 , textAlign: "start" }}
          >
            <Meta
              title={
                <p class="centered" >
                   <Space size="large">
                    <Avatar src={review.avatar} icon={<UserOutlined />} />
                    {review.username}
                    {review.date}
                    <Rate
                    style={{ fontSize: 12 , textAlign: "center"}}
                    allowClear={false}
                    allowHalf
                    disabled
                    value={review.rating}
                  />
                  </Space>
                </p>
              } 
            /> 
            <p style={{ marginTop: 10 }}>{review.review}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductReviewsCard;
