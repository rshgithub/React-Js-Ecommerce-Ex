import React from 'react';
import '../../App.scss'
import { CaretDownFilled, SearchOutlined} from '@ant-design/icons';
import { Breadcrumb, Col, Divider, Dropdown, Image, Row , Space} from 'antd';
import { Container } from "reactstrap";
import BreadcrumbSeparator from 'antd/es/breadcrumb/BreadcrumbSeparator';
import MyProfile from '../../assets/profile_close_2.png';
import Bag from '../../assets/bag_3.png';

const AppHeader = () => (
  <Container>
       <Row>
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
    <Image src={MyProfile} />
    <span>My profile</span>
    </BreadcrumbSeparator>
    <BreadcrumbSeparator>
    <Image src={Bag} />
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