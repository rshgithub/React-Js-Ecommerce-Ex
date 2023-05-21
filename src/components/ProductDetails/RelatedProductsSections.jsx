import { Typography, Row, Col } from "antd";
import "../../App.css";
import { BestSellerProductCard } from "../../common";
import RelatedProductsListData from "../../utils/ProductsLists/RelatedProductsListData";
const RelatedProductsSections = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <Col align="middle" justify="center">
        <Typography.Title style={{ paddingBottom: "5%" }} level={3}>
          RELATED PRODUCTS
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {RelatedProductsListData.map((product, index) => (
            <Col key={product.id}>
              <BestSellerProductCard index={index} obj={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default RelatedProductsSections;
