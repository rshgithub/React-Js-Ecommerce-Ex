import { Button, Card, Menu, Slider, Row, Col } from "antd";
import React from "react";
import ThemeToggler from "./ThemeToggler";
function CenterSidbarSection() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card
          title="ACCESORIES"
          bordered={false}
          style={{
            width: 280,
            textAlign: "left",
            backgroundColor: "rgb(250,250,251)",
          }}
        >
          <Menu
            mode="inline"
            style={{
              textAlign: "left",
              backgroundColor: "rgb(250,250,251)",
            }}
            items={[
              { key: "1", label: "Apple Car", itemIcon: 2 },
              { key: "2", label: "Air port & wireless", itemIcon: 48 },
              { key: "3", label: "Cables & Docks", itemIcon: 14 },
              { key: "4", label: "Cases & Films", itemIcon: 15 },
              { key: "5", label: "Charging Devices", itemIcon: 23 },
              { key: "6", label: "Connected home", itemIcon: "1" },
              { key: "7", label: "Headphones", itemIcon: "95" },
            ]}
          />
        </Card>

        <Card
          title="PRICES"
          bordered={false}
          style={{
            width: 280,
            marginTop: "1rem",
            textAlign: "left",
            backgroundColor: "rgb(250,250,251)",
          }}
        >
          <h5 style={{ fontWeight: "normal" }}>
            Renger : <span style={{ paddingLeft: "30%" }}>$13.99 - $25.99</span>
          </h5>
          <Slider
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 100]}
          />
        </Card>

        <Card
          title="COLOR"
          bordered={false}
          style={{
            width: 280,
            marginTop: "1rem",
            textAlign: "left",
            backgroundColor: "rgb(250,250,251)",
          }}
        >
          <ThemeToggler />
        </Card>

        <Card
          title="BRAND"
          bordered={false}
          style={{
            width: 280,
            marginTop: "1rem",
            textAlign: "left",
            backgroundColor: "rgb(250,250,251)",
          }}
        >
          <Menu
            mode="inline"
            style={{
              textAlign: "left",
              backgroundColor: "rgb(250,250,251)",
            }}
            items={[
              { key: "1", label: "Apple", itemIcon: 99 },
              { key: "2", label: "LG", itemIcon: 99 },
              { key: "3", label: "Samsung", itemIcon: 99 },
              { key: "4", label: "Siemens", itemIcon: 99 },
            ]}
          />
        </Card>

        <Button
          size="large"
          style={{
            width: 280,
            backgroundColor: "rgb(250,250,251)",
            border: "none",
          }}
        >
          MORE
        </Button>
      </Col>
    </Row>
  );
}
export default CenterSidbarSection;
