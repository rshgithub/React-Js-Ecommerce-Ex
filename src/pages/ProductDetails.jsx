import React, { useState } from "react";
import { Row, Col } from "antd";
import { CategoryNavbar } from "../common";
import "../App.css";

import {
  BestSellerSection,
  ProductAdSection,
  ProductDescriptionSection,
  ProductImagesSection,
  RelatedProductsSections,
} from "../components/ProductDetails";
import ProductDetailsSection from "../components/ProductDetails/ProductDetailsSection";

const product = {
  id: 1,
  name: "Beats Solo2 On Ear Headphones - Black",
  description:
    "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
  lastPrice: "22",
  originalPrice: "99",
  rating: 4,
  image: "https://example.com/product-image.jpg",
  category: "Clothing",
  brand: "Brand Name",
  Availability: false,
  freeShipping: false,
};

const ProductDetails = () => {
  // const { product } = useParams();

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
    <Col
      style={{ 
        padding : "5%",
       
      }}
    >
      <CategoryNavbar />
      <Row >
        <Col xs={24} lg={18}>
          <Row gutter={[16, 16]}     >
            <Col>
              <ProductImagesSection className="productImagesPart" />
            </Col>

            <Col className="ProductDetails" >
              <ProductDetailsSection product={product} />
            </Col>
          </Row>
          <ProductDescriptionSection product={product} />
        </Col>
 
        <Col className="adsPart"   xs={24} sm={12} md={10} lg={6} xl={6} xxl={6} >
          <h1
            style={{
              color: "lightGrey",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            Best Seller
          </h1>
          <BestSellerSection />
          <ProductAdSection />
        </Col>
      </Row>

      <RelatedProductsSections />
    </Col>
  );
};

export default ProductDetails;
