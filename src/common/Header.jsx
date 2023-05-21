import React from "react";
import "../App.css";
import {
  CaretDownFilled,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Divider, Dropdown, Space } from "antd";
import { Col, Row } from "reactstrap";
import BreadcrumbSeparator from "antd/es/breadcrumb/BreadcrumbSeparator";
const items = [
  {
    key: "1",
    label: "EN",
  },
  {
    key: "2",
    label: "AR",
  },
];

const AppHeader = () => (
  <>
    <Row className="header">
      <Col xs={24} xl={12} className="header-dropdown">
        <Space>
          <Dropdown menu={{ items }}>
            <Space>
              EN <CaretDownFilled />
            </Space>
          </Dropdown>
          <Dropdown menu={{ items }}>
            <Space>
              USD <CaretDownFilled />
            </Space>
          </Dropdown>
        </Space>
      </Col>
      <Col xs={24} xl={12} className="header-content">
        <Breadcrumb>
          <BreadcrumbSeparator>
            <a style={{ color: "black" }}>
              <UserOutlined /> My profile
            </a>
          </BreadcrumbSeparator>
          <BreadcrumbSeparator>
            <a style={{ color: "black" }}>
              <ShoppingOutlined />0 Items
            </a>
          </BreadcrumbSeparator>
          <BreadcrumbSeparator>
            <a>$0.00</a>
          </BreadcrumbSeparator>
          <BreadcrumbSeparator>
            <Button type="ghost" size="small">
              <SearchOutlined />
            </Button>
          </BreadcrumbSeparator>
        </Breadcrumb>
      </Col>
    </Row>
    <Divider></Divider>
  </>
);

export default AppHeader;
