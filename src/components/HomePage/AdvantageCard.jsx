import React from "react";
import { Icon , List, Card } from "antd";

import { DollarCircleOutlined , PhoneOutlined , ShoppingCartOutlined } from "@ant-design/icons";

const data = [
  {
    key: 1,
    title: "FREE SHIPPING",
    icon: (
      <ShoppingCartOutlined 
        style={{ fontSize: "36px", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: 2,
    title: "100% REFUND",
    icon: (
      <DollarCircleOutlined 
        style={{ fontSize: "36px", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: 3,
    title: "SUPPORT 24/7",
    icon: (
      <PhoneOutlined 
        style={{ fontSize: "36px", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

const AdvantageCard = () => {
  return (
    <div  style={{marginLeft : 300 , marginRight: 300 , marginTop : 40 , marginBottom: 40}} >
      <List
        grid={{ column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card bordered={false}>
              <div style={{ display: "flex" }}>
                <div >
                {item.icon}
                  <h3 style={{ marginTop : 15   }}>{item.title}</h3>
                  <p style={{ marginTop: 15 }}>{item.desc}</p>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AdvantageCard;
