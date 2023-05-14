import React from "react";
import { Icon , List, Card, Col } from "antd";
 import AdvantagesList from "../../utils/ProductsLists/AdvantagesList"

const AdvantageCard = () => {
  return (
<div className="list" >
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
        <Card style={{ border: 'none'  }}>
          <Col style={{textAlign : "center"}}>
            <div>
              {item.icon}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Col>
        </Card>
      </List.Item>
    )}
  />
</div>

  );
};

export default AdvantageCard;
