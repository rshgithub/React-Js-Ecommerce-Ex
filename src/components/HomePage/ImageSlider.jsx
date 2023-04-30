import React from "react";
import { Carousel,Row,Col,Button,Image} from 'antd';
import Banner from '../../assets/Banners.png'
import Iphone from '../../assets/MaskGroup1.png'
import "../HomePage.css";
import {  ArrowRightOutlined, LeftSquareOutlined } from "@ant-design/icons";

const ImageSlider = () => {
  return (
    <>
    <Row style={{backgroundImage: "linear-gradient(to right, rgba(255,0,0), rgba(213,83,151),rgba(153,98,240))",}}>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <h2 style={{ color: 'white' , fontSize: 36 , fontWeight:"bold" ,  }} >iPhone X</h2>
          <p style={{ color: 'white' , fontSize: 14 }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
            </p> 
          <a href="#" style=
          {{color: 'white' ,fontWeight:"bold"}}>MORE</a>
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
            height="500px"
            width="500px"
            preview={false}
          />
        </Col>
        <Col>
        <Image src={Banner} style={{
          position: "absolute",
           alignItems: "center",
           justifyContent: "center",
           flexWrap: "wrap"
        }} 
        preview={false}/>
        </Col>
      </Row>


    
  </>
  );
        }
        
 export default ImageSlider;