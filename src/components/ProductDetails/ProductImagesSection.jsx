import React, { useState } from "react";
import { Row, Col, Image } from "antd";

const ProductImagesSection = () => {
  const [productMainImage, setProductMainImage] = useState(
    "https://iplus.com.ge/images/detailed/5/iPhone_13_Pro_Max_Q222_Green_PDP_Image_Position-3__ww-GE_c74k-ty.jpg"
  );
  const [productSmallImages, setProductSmallImages] = useState([
    "https://www.sbsmobile.com/eir/218286-thickbox_default/full-cover-glass-screen-protector-for-iphone-13-pro-max-14-plus.jpg",
    "https://cdn.shopify.com/s/files/1/1352/5175/products/IP13PM_FUS__Main_11cut_2048x.jpg?v=1637091488",
    "https://www.apple.com/newsroom/videos/iphone-13-pro-ceramic-shield/posters/Apple_iPhone-13-Pro-Ceramic-Shield-09142021.jpg.large_2x.jpg",
    "https://www.starcomputacion.com.ar/files/products/632923c5521d1-8655-3.jpg",
  ]);

  const handleSmallProductImageClick = (imageUrl) => {
    setProductMainImage(imageUrl);
  };

  return (
    <div style={{ marginBottom: 100 }}>

        <Image
          style={{ objectFit: "cover" }}
          width={450}
          height={450}
          preview={false}
          src={productMainImage}
        />

        <div style={{ marginTop: 10 }}>
          <Row gutter={[16, 16]}>
            {productSmallImages.map((imageUrl) => (
              <Col key={imageUrl}>
                <Image
                  width={100}
                  height={100}
                  style={{ border: "2px solid #d9d9d9", padding: 5 }}
                  src={imageUrl}
                  onClick={() => handleSmallProductImageClick(imageUrl)}
                  preview={false}
                />
              </Col>
            ))}
          </Row>
        </div> 
    </div>
  );
};

export default ProductImagesSection;
