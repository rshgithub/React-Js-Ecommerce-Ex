import { Rate, List, Card, Typography, Row, Col } from "antd";
import React from "react";
import FeaturedProductsList from "../../utils/ProductsLists/FeaturedProductsList";

const FeaturedProductCard = () => {
  const { Title, Text, Paragraph } = Typography;

  return (
    <div className="list" style={{ border: "none", width: "100%" }}>
      <Typography.Title level={2}>FEATURED PRODUCTS</Typography.Title>

      <List 
        grid={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }}
        dataSource={FeaturedProductsList}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ border: "none", width: "100%" , textAlign: "start" }}>
              <Row>
                <Col span={6}>
                  <img
                    src={item.image}
                    alt="example"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col span={18} style={{ paddingLeft: 15 }}>
                  <div>
                    {" "}
                    <div style={{ marginTop: 20 }}>
                      <Paragraph
                        ellipsis={{ rows: 2, expandable: true }}
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: 10,
                        }}
                      >
                        {item.title}
                      </Paragraph>
                      <Paragraph ellipsis={{ rows: 2, expandable: true }}>
                        {item.description}
                      </Paragraph>
                    </div>
                    <Rate
                      style={{ fontSize: "16px" }}
                      allowClear={false}
                      allowHalf
                      disabled
                      value={item.rating}
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
                      {item.lastPrice}{" "}
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
                        {item.originalPrice}
                      </Text>
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FeaturedProductCard;
