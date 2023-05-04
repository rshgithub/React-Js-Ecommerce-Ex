import React from "react";
import { Rate, Card, List, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ProductReviewsCard = () => {
  const reviews = [
    {
      id: 1,
      avatar: "https://example.com/avatar.jpg",
      username: "John",
      rating: 4,
      review: "Great product, highly recommend it!",
      date: "2023-04-29",
    },
    {
      id: 2,
      avatar: "https://example.com/avatar.jpg",
      username: "Sarah",
      rating: 5,
      review: "Absolutely love this product, it exceeded my expectations!",
      date: "2023-04-30",
    },
    {
      id: 3,
      avatar: "https://example.com/avatar.jpg",
      username: "Tom",
      rating: 3,
      review: "Decent product, but not worth the price.",
      date: "2023-04-30",
    },
    {
      id: 4,
      avatar: "https://example.com/avatar.jpg",
      username: "Sarah",
      rating: 5,
      review: "Absolutely love this product, it exceeded my expectations!",
      date: "2023-04-30",
    },
    {
      id: 5,
      avatar: "https://example.com/avatar.jpg",
      username: "Tom",
      rating: 3,
      review: "Decent product, but not worth the price.",
      date: "2023-04-30",
    },
  ];

  const { Meta } = Card;

  return (
    <div>
      <div style={{ height: 500, overflowY: "scroll" , }}>
        {reviews.map((review) => (
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
