import { AppstoreTwoTone, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Row, Select, Typography } from "antd";
import React, { Component } from "react";
import ListCard from "./ListCard";

export class Gridview extends Component {
  render() {
    return (
      <>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            backgroundColor: "rgb(250,250,251)",
          }}
        >
          <Row>
            <Col xs={24} xl={6}>
              <Typography.Text>13 Items</Typography.Text>
            </Col>
            <Col xs={24} xl={6}>
              <Typography.Text>
                Sort By
                <Select
                  defaultValue="Name"
                  style={{ width: "120px", paddingLeft: "20px" }}
                >
                  <Select.Option>Name</Select.Option>
                </Select>
              </Typography.Text>{" "}
            </Col>
            <Col xs={24} xl={6}>
              <Typography.Text>
                Show
                <Select
                  defaultValue="12"
                  style={{ width: "120px", paddingLeft: "20px" }}
                >
                  <Select.Option>12</Select.Option>
                </Select>
              </Typography.Text>
            </Col>
            <Col xs={24} xl={6}>
              <Button
                size="middle"
                style={{
                  backgroundColor: "rgb(250,250,251)",
                  border: "none",
                  marginRight: "7px",
                }}
                icon={<AppstoreTwoTone style={{ fontSize: "1.5rem" }} />}
              />
              <Button
                size="middle"
                style={{ backgroundColor: "rgb(250,250,251)", border: "none" }}
                icon={
                  <MenuOutlined
                    style={{ fontSize: "1.5rem", color: "silver" }}
                  />
                }
              />
            </Col>
          </Row>
        </div>
        <Row gutter={[20, 20]}>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </Row>
      </>
    );
  }
}

export default Gridview;
