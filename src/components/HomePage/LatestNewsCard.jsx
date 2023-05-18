import { List, Card, Typography, Row, Col, Image } from "antd";
import React from "react";
import LatestNewsList from "../../utils/ProductsLists/LatestNewsList";

const LatestNewsCard = () => {
  const { Title, Paragraph } = Typography;

  return (
    <div className="list" >
      <Typography.Title level={2} >
        LATEST NEWS
      </Typography.Title>
      <List 
        grid={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
        dataSource={LatestNewsList}
        renderItem={(item) => (
          <List.Item>
            <Card style={{  border: "none" , width: "300%", height: "210%" , textAlign: "start" }}>
              <Row style={{ display: "flex" }}>
                <Image
                  src={item.image}
                  alt="example"
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                  preview={false}
                />

                <Card.Meta 
                  description={
                    <Row>
                      <Col style={{ marginLeft: "5%" }} xs={8} sm={10}>

                        <Paragraph style={{ fontSize: "14px" }}>
                          <h5 style={{ color: "#C1C8CE", fontSize: "13px" }}>
                            {item.date}
                          </h5>
                          <Title level={5}  >
                          {item.title}
                        </Title>
                        </Paragraph>
                        <Paragraph style={{ fontSize: "0.8rem" }}>
                          {item.desc}
                        </Paragraph>
                      </Col>
                    </Row>
                  }
                ></Card.Meta> 
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default LatestNewsCard;
