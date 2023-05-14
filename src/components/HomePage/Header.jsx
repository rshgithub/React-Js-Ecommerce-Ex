import React from 'react';
import '../../App.scss'
import { CaretDownFilled, SearchOutlined, ShoppingOutlined, UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Button, Col, Divider, Dropdown, Row , Space} from 'antd';
import { Container } from "reactstrap";
import BreadcrumbSeparator from 'antd/es/breadcrumb/BreadcrumbSeparator';
const items = [
    {
      key: '1',
      label: 'EN'
    },
    {
      key: '2',
      label: 'AR'
    }
  ];

const AppHeader = () => (
<Container>
<Row
style={{
display: 'flex',
//justifyContent: 'left',
paddingTop:'10px'
}} justify={'start'}>
<Col xs={24} sm={6} md={6} lg={6} xl={6}>
<Space>
<Dropdown menu={{items}}>
<Space>
EN <CaretDownFilled /> 
</Space>
</Dropdown>
<Dropdown menu={{items}} >
<Space>
USD <CaretDownFilled /> 
</Space>
</Dropdown>
</Space>
</Col>
<Col xs={24} sm={6} md={8} lg={6} xl={16}
 style={{
display: 'flex',
justifyContent: 'right'
}}>
<Breadcrumb>
<BreadcrumbSeparator>
<a style={{color:'black'}}><UserOutlined/> My profile</a>
</BreadcrumbSeparator>
<BreadcrumbSeparator>
<a style={{color:'black'}}>
  <ShoppingOutlined/>0 Items</a>
</BreadcrumbSeparator>
<BreadcrumbSeparator>
<a>$0.00</a>
</BreadcrumbSeparator>
<BreadcrumbSeparator>
<Button type='ghost' size='small'><SearchOutlined /></Button>
</BreadcrumbSeparator>
</Breadcrumb>
</Col>
</Row>
<Divider></Divider>
</Container>
);

export default AppHeader;