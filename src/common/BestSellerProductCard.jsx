import {
  List,
  Card,
  Button,
  Space,
  Badge,
  Typography,
  Rate,
  Divider,
} from "antd";

import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../App.css";

const BestSellerProductCard = ({ index, obj }) => {
  // const history = useHistory();

  // const onClickItem = () => {
  //   if (!obj) return;

  //   if (obj.id) {
  //     history.push(`/product/${obj.id}`);
  //   }
  // };

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  const overlayStyle = {
    position: "absolute",
    top: "44%",
    left: "50%",
    width: "50%",
    height: "37%",
    padding: "25% ",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.742)",
    zIndex: "1",
  };

  return (
    <List.Item
      onMouseEnter={() => handleCardMouseEnter(index)}
      onMouseLeave={() => handleCardMouseLeave()}
    >
      <Card
        // onClick={onClickItem}
        bordered
        hoverable
        style={{ width: "100%", borderWidth: 3, padding: "5% " }}
        cover={
          obj.ifNew ? (
            <Badge.Ribbon
              placement="start"
              text="HOT"
              color="red"
              style={{
                fontSize: "12px",
                position: "absolute",
                top: "-8px",
                left: "-10px",
              }}
            >
              <div className="card-image">
                <img
                  style={{ height: "auto", maxWidth: "100%" }}
                  alt="example"
                  src={obj.image}
                />
                <div
                  className="card-image-overlay"
                  style={{
                    ...overlayStyle,

                    opacity: hoveredCardIndex === index ? 1 : 0,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Space size="middle">
                      <Button
                        ghost
                        type="primary"
                        size="large"
                        shape="circle"
                        icon={<HeartOutlined />}
                        style={{
                          backgroundColor: "#ccc",
                          margin: "50%",
                          width: "100%",
                          height: "100%",
                        }}
                      ></Button>
                      <Button
                        ghost
                        type="primary"
                        size="large"
                        shape="circle"
                        icon={<ShoppingCartOutlined />}
                        style={{
                          backgroundColor: "#ccc",
                          margin: "50%",
                          width: "100%",
                          height: "100%",
                        }}
                      ></Button>
                    </Space>
                  </div>
                </div>
                <Divider />
              </div>
            </Badge.Ribbon>
          ) : (
            <Badge.Ribbon placement="start" color="transparent">
              <div className="card-image">
                <img
                  style={{ height: "auto", maxWidth: "100%" }}
                  alt="example"
                  src={obj.image}
                />
                <div
                  className="card-image-overlay"
                  style={{
                    ...overlayStyle,

                    opacity: hoveredCardIndex === index ? 1 : 0,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Space size="middle">
                      <Button
                        ghost
                        type="primary"
                        size="large"
                        shape="circle"
                        icon={<HeartOutlined />}
                        style={{
                          backgroundColor: "#ccc",
                          margin: "50%",
                          width: "100%",
                          height: "100%",
                        }}
                      ></Button>
                      <Button
                        ghost
                        type="primary"
                        size="large"
                        shape="circle"
                        icon={<ShoppingCartOutlined />}
                        style={{
                          backgroundColor: "#ccc",
                          margin: "50%",
                          width: "100%",
                          height: "100%",
                        }}
                      ></Button>
                    </Space>
                  </div>
                </div>
                <Divider />
              </div>
            </Badge.Ribbon>
          )
        }
      >
        <Card.Meta
          style={{
            fontSize: "100%",
            textAlign: "center",
          }}
          title={obj.title}
          description={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {" "}
              <Rate
                className="responsive-rate"
                allowClear={false}
                allowHalf
                disabled
                value={obj.rating}
                style={{ marginTop: "2%", marginBottom: "2%" }}
              />
              <Typography.Paragraph style={{ fontSize: "18px" }}>
                <Space size="middle">
                  <Typography.Text type="danger" style={{ fontSize: "120%" }}>
                    {"$ "}
                    {obj.lastPrice}
                  </Typography.Text>
                  <Typography.Text delete disabled style={{ fontSize: "120%" }}>
                    {"$ "}
                    {obj.originalPrice}
                  </Typography.Text>
                </Space>
              </Typography.Paragraph>
            </div>
          }
        ></Card.Meta>
      </Card>
    </List.Item>
  );
};

export default BestSellerProductCard;
