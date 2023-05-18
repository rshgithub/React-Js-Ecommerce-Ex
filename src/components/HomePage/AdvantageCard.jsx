import React from "react";
import { Icon, List, Card, Col, Typography } from "antd";

import AdvantagesList from "../../utils/ProductsLists/AdvantagesList";
const { Title, Text } = Typography;

const AdvantageCard = () => {
  return (
    <div className="list">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={AdvantagesList}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ border: "none" }}>
              <Col style={{ textAlign: "center" }}>
                {item.icon}
                <Title level={5} >
                  {item.title}
                </Title>
                <Text style={{ fontSize: "1rem" }}>{item.desc}</Text>
              </Col>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AdvantageCard;
