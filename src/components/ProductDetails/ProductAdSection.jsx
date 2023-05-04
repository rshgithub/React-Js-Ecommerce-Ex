import React from "react";
import { Image } from "antd";

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
    <div
      style={{
        width: 270,
        height: 380,
        backgroundColor: "lightGrey",
        padding: 20,   
        marginTop : 40 ,
      }}
    >
      <h1  style={{
          textAlign: "left",
        }}>{product.name}</h1>
      <p
        style={{
          textAlign: "left",
        }}
      >
        {product.description}
      </p>
      <h2 style={{ fontSize: 30, textAlign: "left" , fontWeight: "normal" , fontColor: "#707070" }}>{product.lastPrice}</h2>
      <Image width={200} src={product.image} />
    </div>
  );
};

export default ProductAdSection;
