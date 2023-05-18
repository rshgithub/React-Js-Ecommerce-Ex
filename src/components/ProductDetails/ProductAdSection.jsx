import React from "react";
import { Image , Col} from "antd";

const product = {
  id: 1,
  name: "GoPro Hero 6",
  description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor",
  lastPrice: "$299",
  image:
    "https://www.dpreview.com/files/p/E~products/gopro_hero6_black/shots/d9bbb5b06b5e4555adf4ee89ce047b77.png",
};

const ProductAdSection = () => {
  return (
<Col
  style={{ 
    maxWidth: 300,
    height: "auto",
    backgroundColor: "lightGrey",
    padding: "20px",   
    marginTop : 10 ,
    textAlign: "left",
  }}
>
  <h1>{product.name}</h1>
  <p>{product.description}</p>
  <h2 style={{ fontSize: "2rem", fontWeight: "normal", color: "#707070" }}>
    {product.lastPrice}
  </h2>
  <Image
  preview={false}
    style={{ width: "100%", maxWidth: 200, height: "auto" }}
    src={product.image}
  />
</Col>

  );
};

export default ProductAdSection;
