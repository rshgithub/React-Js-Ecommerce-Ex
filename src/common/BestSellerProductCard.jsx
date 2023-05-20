import {
  Col,
  Card,
  Button,
  Space,
  Badge,
  Typography,
  Row,
  Rate,
  Divider,
  Image,
} from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React, { useState } from "react";  
import "../App.css";

const BestSellerProductCard = ({ index, obj }) => {
  const { Title } = Typography;

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };
 

  return (
    <Card
      // onClick={onClickItem}
      bordered
      hoverable
      style={{ height: 430, width: 300, borderWidth: 3, padding: 5 }}
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
            <div
              className="card-image"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={() => handleCardMouseLeave()}
            >
              <Image
                style={{ height: 250, width: "100%", objectFit: "cover" }}
                alt="example"
                preview={false}
                src={obj.image}
              />
              <div
                className="card-image-overlay"
 
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
                        marginTop: "50%",

                        backgroundColor: "#ccc",
                      }}
                    ></Button>
                    <Button
                      ghost
                      type="primary"
                      size="large"
                      shape="circle"
                      icon={<ShoppingCartOutlined />}
                      style={{
                        marginTop: "50%",
                        backgroundColor: "#ccc",
                      }}
                    ></Button>
                  </Space>
                </div>
              </div>
            </div>
          </Badge.Ribbon>
        ) : (
          <Badge.Ribbon placement="start" color="transparent">
            <div
              className="card-image"
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={() => handleCardMouseLeave()}
            >
              <Image
                style={{ height: 250, width: "100%", objectFit: "cover" }}
                alt="example"
                preview={false}
                src={obj.image}
              />{" "}
              <div
                className="card-image-overlay"
 
              >
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                  {" "}
                  <Space size="middle">
                    <Button
                      ghost
                      type="primary"
                      size="large"
                      shape="circle"
                      icon={<HeartOutlined />}
                      style={{
                        marginTop: "50%",
                        backgroundColor: "#ccc",
                      }}
                    ></Button>
                    <Button
                      ghost
                      type="primary"
                      size="large"
                      shape="circle"
                      icon={<ShoppingCartOutlined />}
                      style={{
                        marginTop: "50%",
                        backgroundColor: "#ccc",
                      }}
                    ></Button>
                  </Space>
                </Row>
              </div>
            </div>
          </Badge.Ribbon>
        )
      }
    >
      <Card.Meta
        style={{
          textAlign: "center",
        }}
        description={
          <Link to={`/ProductDetails/${obj.Key}`}>
            <Col>
              <Divider />
              <Title level={3}>{obj.title}</Title>
              <Rate
                className="responsive-rate"
                allowClear={false}
                allowHalf
                disabled
                value={obj.rating}
                style={{ marginTop: 10, marginBottom: 10 }}
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
            </Col>
          </Link>
        }
      ></Card.Meta>
    </Card>
  );
};

export default BestSellerProductCard;
