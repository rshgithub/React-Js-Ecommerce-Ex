import React, {  useState } from "react";
import { Carousel,Row,Col,Image} from 'antd';
import Iphone from '../../assets/MaskGroup1.png'
import "../HomePage.css";

const ImageSlider = (props) => {
  const [dotPosition, setDotPosition] = useState('bottom');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
   <>
      <Carousel dotPosition={dotPosition} autoplay
     style={{backgroundImage: "linear-gradient(to right, rgba(255,0,0), rgba(213,83,151),rgba(153,98,240))",}}>
      <Row>
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
          <Image
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",}}
            src={Iphone}
            height="400px"
            width="400px"
            preview={false}/>
        </Col>
      
            {/* <Col span={6}>
        <Image
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",}}
            src={Iphone}
            height="400px"
            width="400px"
            preview={false}/>
            </Col> */}
        {/*<Image src={Banner} style={{
          position: "absolute",
           alignItems: "center",
           justifyContent: "center",
           flexWrap: "wrap"
        }} 
      preview={false}/>*/}

      </Row>
      </Carousel>


        
      </>
  );
        }

      
        
 export default ImageSlider;