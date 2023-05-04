import { List, Card, Button, Space, Badge, Typography, Rate } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../App.css";



const BestSellerProductCard  = (props) => { 
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const {index} = props.index ;
  const {obj} = props.obj ; 

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (

        <List.Item
          onMouseEnter={() => handleCardMouseEnter(index)}
          onMouseLeave={() => handleCardMouseLeave()}
 
        >
          <Card
            hoverable
            style={{ width: 310, padding: 5 }}
            cover={
              props.obj.ifNew ? (
                <Badge.Ribbon placement="start" text="HOT" color="red">
                  <div>
                    {/* <Badge  style={{ position: 'absolute', right: 280, top: 20 }} count={isRecent ? "HOT" : ""}  color="red"className="soppingCartIcon"> */}
                    <img
                      style={{ height: 300, width: 300 }}
                      alt="example"
                      src={props.obj.image}
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
                      src={props.obj.image}
                    />

                    {/* </Badge> */}
                  </div>
                </Badge.Ribbon>
              )
            }
          >
            <Card.Meta
              title={props.obj.title}
              description={
                <Typography.Paragraph style={{ fontSize: "18px" }}>
                  {"$ "}
                  {props.obj.lastPrice}{" "}
                  <Typography.Text
                    delete
                    type="danger"
                    style={{ fontSize: "18px" }}
                  >
                    {"$ "}
                    {props.obj.originalPrice}
                  </Typography.Text>
                </Typography.Paragraph>
              }
            ></Card.Meta>
            <Rate
              style={{ fontSize: 16 }}
              allowClear={false}
              allowHalf
              disabled
              value={props.obj.rating}
            />

            {hoveredCardIndex === index && (
              <div className="button-overlay">
                <Space size="small">
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

  );
};

export default BestSellerProductCard;
