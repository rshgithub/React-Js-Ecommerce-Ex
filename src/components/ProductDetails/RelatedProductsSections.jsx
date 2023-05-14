import { List , Row , Col} from "antd"; 
import { useState } from "react";
import "../../App.css";
import { BestSellerProductCard } from "../../common";
import RelatedProductsList from "../../utils/ProductsLists/RelatedProductsList";
const RelatedProductsSections = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  return (

    <Row gutter={[16, 16]}>
    {RelatedProductsList.map((product, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <BestSellerProductCard index={index} obj={product} />
      </Col>
    ))}
  </Row>
    // <div
    //   style={{
    //     marginTop: 50,
    //     marginBottom: 100,
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <h1 style={{ fontWeight: "normal" }}>RELATED PRODUCTS</h1>
    //   <List
      
    //   // grid={{
    //   //   gutter: 16,
    //   //   xs: 1,
    //   //   sm: 2,
    //   //   md: 3,
    //   //   lg: 4,
    //   //   xl: 4,
    //   //   xxl: 4,
    //   // }}
    //     dataSource={RelatedProductsList}
    //     size="small"
    //     style={{ marginTop: 50, width: "80%" }}
    //     renderItem={(item, index) => (
    //       <List.Item
    //       style={{ width: "100%", maxWidth: "310px" }}
    //         onMouseEnter={() => handleCardMouseEnter(index)}
    //         onMouseLeave={() => handleCardMouseLeave()}
    //       >
    //         <div key={index}>
    //           <BestSellerProductCard key={index} index={index} obj={item} />
    //         </div>
    //       </List.Item>
    //     )}
    //   />
    // </div>
  );
};

export default RelatedProductsSections;
