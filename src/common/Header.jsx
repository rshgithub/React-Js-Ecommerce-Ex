import React from 'react';
import "../App.css"
import { CaretDownFilled, SearchOutlined, ShoppingOutlined, UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Col, Divider, Dropdown, Row , Space} from 'antd';
import { Container } from "reactstrap";
import BreadcrumbSeparator from 'antd/es/breadcrumb/BreadcrumbSeparator';

const AppHeader = () => (
  <Container>
       <Row className='container'>
      <Col span={12}>
      <Space>
        <Dropdown disabled >
      <Space>
      EN <CaretDownFilled /> 
      </Space>
  </Dropdown>
  <Dropdown disabled >
  <Space>
      USD <CaretDownFilled /> 
      </Space>
     </Dropdown>
     </Space>
      </Col>
      <Col span={12}>
      <Breadcrumb>
    <BreadcrumbSeparator>
    <UserOutlined /> 
    <span>My profile</span>
    </BreadcrumbSeparator>
    <BreadcrumbSeparator>
    <ShoppingOutlined />
      <span>0 Items</span>
    </BreadcrumbSeparator>
    <BreadcrumbSeparator>
      <span>$0.00</span>
    </BreadcrumbSeparator>
    <BreadcrumbSeparator>
    <SearchOutlined />
    </BreadcrumbSeparator>
  </Breadcrumb>

      </Col>
      <Divider orientation="left"></Divider>
    </Row>
       
    </Container>
  );

export default AppHeader;