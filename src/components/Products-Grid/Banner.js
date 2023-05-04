import React from "react";
import { Button,  Image, Row, Col } from "antd";
import "../HomePage.css";
import Iphone from '../../assets/pic.png'


const CenterBannerSection = () => {
return (
<div>
<Row style={{ backgroundColor: "#2E90E5",width:'100%',height:'300px' }}>
<Col
span={12}
style={{
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
}}
>
<h2 style={{ color: 'white' , fontSize: 50 , fontWeight: 'lighter'}} >iPhone 8</h2>
<p style={{ color: 'white' , fontSize: 20 }} >Performance and design. Taken right to the edge.</p> 
<Button className="shop-now-button" >SHOP NOW</Button>
</Col>
<Col
span={12}
style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<Image
src={Iphone}
height="300px"
width="300px"
preview={false}
/>
</Col>
</Row>
</div>
);
};

export default CenterBannerSection;
