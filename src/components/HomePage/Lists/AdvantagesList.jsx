import React from "react";
import { List, Row } from "antd";

import AdvantagesListData from "../../../utils/ProductsLists/AdvantagesListData";
import AdvantageCard from "../Cards/AdvantageCard";

const AdvantagesList = () => {
  return (
    <Row justify="center" align="middle" style={{ margin: "5%" }}>
      <List
        size="large"
        style={{
          width: "100%",
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={AdvantagesListData}
        renderItem={(item, key) => (
          <List.Item>
            <AdvantageCard key={key} index={key} obj={item} />
          </List.Item>
        )}
      />
    </Row>
  );
};

export default AdvantagesList;
