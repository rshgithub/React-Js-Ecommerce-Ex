import { List, Typography, Row, Col } from "antd";
import React from "react";
import LatestNewsListData from "../../../utils/ProductsLists/LatestNewsListData";
import LatestNewsCard from "../Cards/LatestNewsCard";

const LatestNewsList = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ margin: "5%", marginBottom: "5%", marginTop: "5%" }}
    >
      <Col align="middle" justify="center">
        <Typography.Title level={2}>LATEST NEWS</Typography.Title>
        <List
          size="small"
          style={{
            width: "100%",
          }}
          grid={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
          dataSource={LatestNewsListData}
          renderItem={(item, key) => (
            <List.Item>
              <List.Item>
                <LatestNewsCard key={key} index={key} obj={item} />
              </List.Item>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default LatestNewsList;
