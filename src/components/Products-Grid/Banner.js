import React from "react";
import { Button,  Image, Row, Col } from "antd";
import "../../App.css";
import Iphone from '../../assets/pic.png'


const CenterBannerSection = () => {
return (
<Row style={{ backgroundColor: "#2E90E5",width:'100%',height:'300px', position: 'relative' }}>
<Col
span={12} 
style={{
display: "flex",
position: "absolute",
top:'10px',
//left: '20%',
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
>
<h2 style={{ color: 'white' , fontSize: '40px' , fontWeight: 'lighter'}} >iPhone 8</h2>
<h6 style={{ color: 'white' , fontSize: '20px',fontWeight:'lighter',padding:'10px'}} >Performance and design.Taken right to the edge.</h6> 
<Button href="#"  className="shop-now-button">SHOP NOW</Button>
</Col>
<Col
 span={12}
style={{
display: "flex",
position: 'absolute',
right: '4%',
justifyContent: "center",
alignItems: "center",
}}
>
<Image
src={Iphone}
style={{
    objectFit: 'cover',
}}
height="300px"
width="400px"
preview={false}
/>
</Col>
</Row>
);
};

export default CenterBannerSection;
