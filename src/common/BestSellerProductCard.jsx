import { List, Card, Button, Space, Badge, Typography, Rate } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../App.css";

const data = [
  {
    key: 1,
    title: "Title 1",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: true,
    rating: 2,
  },
  {
    key: 2,
    title: "Title 2",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 5,
  },
  {
    key: 3,
    title: "Title 3",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 4,
  },
  {
    key: 4,
    title: "Title 4",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 3,
  },
  {
    key: 5,
    title: "Title 5",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 2.5,
  },
  {
    key: 6,
    title: "Title 6",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 4.5,
  },
  {
    key: 7,
    title: "Title 7",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "99",
    ifNew: true,
    rating: 4.5,
  },
  {
    key: 8,
    title: "Title 8",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "22",
    originalPrice: "99",
    ifNew: true,
    rating: 3.5,
  },
];

const BestSellerProductCard = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <List
      grid={{ gutter: 10, column: 4 }}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          onMouseEnter={() => handleCardMouseEnter(index)}
          onMouseLeave={() => handleCardMouseLeave()}
 
        >
          <Card
            hoverable
            style={{ width: 310, padding: 5 }}
            cover={
              item.ifNew ? (
                <Badge.Ribbon placement="start" text="HOT" color="red">
                  <div>
                    {/* <Badge  style={{ position: 'absolute', right: 280, top: 20 }} count={isRecent ? "HOT" : ""}  color="red"className="soppingCartIcon"> */}
                    <img
                      style={{ height: 300, width: 300 }}
                      alt="example"
                      src={item.image}
                    />

                    {/* </Badge> */}
                  </div>
                </Badge.Ribbon>
              ) : (
                <Badge.Ribbon placement="start" color="transparent">
                  <div>
                    {/* <Badge  style={{ position: 'absolute', right: 280, top: 20 }} count={isRecent ? "HOT" : ""}  color="red"className="soppingCartIcon"> */}
                    <img
                      style={{ height: 300, width: 300 }}
                      alt="example"
                      src={item.image}
                    />

                    {/* </Badge> */}
                  </div>
                </Badge.Ribbon>
              )
            }
          >
            <Card.Meta
              title={item.title}
              description={
                <Typography.Paragraph style={{ fontSize: "18px" }}>
                  {"$ "}
                  {item.lastPrice}{" "}
                  <Typography.Text
                    delete
                    type="danger"
                    style={{ fontSize: "18px" }}
                  >
                    {"$ "}
                    {item.originalPrice}
                  </Typography.Text>
                </Typography.Paragraph>
              }
            ></Card.Meta>
            <Rate
              style={{ fontSize: 16 }}
              allowClear={false}
              allowHalf
              disabled
              value={item.rating}
            />

            {hoveredCardIndex === index && (
              <div className="button-overlay">
                <Space size="middle">
                  <Button
                    ghost
                    type="primary"
                    size="large"
                    shape="circle"
                    icon={<HeartOutlined />}
                    style={{ backgroundColor: "#ccc" }}
                  ></Button>
                  <Button
                    ghost
                    type="primary"
                    size="large"
                    shape="circle"
                    icon={<ShoppingCartOutlined />}
                    style={{ backgroundColor: "#ccc" }}
                  ></Button>
                </Space>
              </div>
            )}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default BestSellerProductCard;
