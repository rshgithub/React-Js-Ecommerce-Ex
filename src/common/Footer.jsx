import React from "react";
import Payment from "../../assets/payments.png";
import { Button, Col, Divider,Image, Row} from 'antd';
import { FacebookFilled, TwitterOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const Footer = () => {
return (
<div className="footer">
<Divider orientation="left"></Divider>
<Row className="footer-content">
<Col xs={24} xl={6}>
<div className="super-title">BOUNCER</div>
<div className="text">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever.
Since the 1500s, when an unknown printer.
</div>
</Col>
<Col xs={24} xl={6}>
<div className="title">Follow Us</div>
<div className="text">
Since the 1500s, when an unknown printer took a galley of type and scrambled.
</div>
<Space>
<Button type="link" href="#"><FacebookFilled style={{color:"#385C8E"}} /></Button>
<Button type="link" href="#"><TwitterOutlined  style={{color:"#03A9F4"}}/></Button>

</Space>
</Col>
<Col xs={24} xl={6}>
<div className="title">Contact Us</div>
<div className="c-item">
<div className="text">
My Company , 4578 Marmora Road, Glasgow
</div>
</div>
<div className="c-item">
<div className="text">D04 89GR</div>
</div>
<div className="c-item">
<div className="text">Call us now: 0123-456-789</div>
</div>
<div className="c-item">
<div className="text">Email: support@whatever.com</div>
</div>
</Col>
<Divider orientation="left"></Divider>
<Col xs={24} xl={3}>
<div className="title">Information</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">Service</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">Useful Links</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">Extras</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">My Account</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">Userful Links</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
<Col xs={24} xl={3}>
<div className="title">Our Offers</div>
<span className="text">About Us</span>
<span className="text">Information</span>
<span className="text">Privacy Policy</span>
<span className="text">Terms & Conditions</span>
</Col>
</Row>
<Divider orientation="left"></Divider>
<div className="bottom-bar">
<div className="bottom-bar-content">
<span className="text">
© 2018 Ecommerce theme by www.bisenbaev.com
</span>
<Image src={Payment} preview={false}/>
</div>
</div>
</div>

);
};

export default Footer;
