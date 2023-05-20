import { Typography, Row, Col } from "antd";
import "../../App.css";
import { BestSellerProductCard } from "../../common";
import RelatedProductsList from "../../utils/ProductsLists/RelatedProductsList";
const RelatedProductsSections = () => {
  return (
    <Row justify="center" align="middle">
      <Col align="middle" justify="center">
        <Typography.Title style={{ marginBottom: 20 }} level={3}>
          RELATED PRODUCTS
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {RelatedProductsList.map((product, index) => (
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
