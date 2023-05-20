import { Col, Layout, Pagination, Row } from "antd";
import { CenterSidbarSection, Banner } from "../components/Products-Grid/index";
import Gridview from "../components/Products-List/Gridview";
import { CategoryNavbar } from "../../src/common";
const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  backgroundColor: "#fff",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  backgroundColor: "#fff",
};

const ProductList = () => (
  <>
    <CategoryNavbar />
    <Layout className="container" style={{ backgroundColor: "#fff" }}>
      <Row>
        <Col flex="0 1 200px" style={{ marginRight: "15%" }}>
          <Sider style={siderStyle}>
            <CenterSidbarSection />
          </Sider>
        </Col>
        <Col flex="1 1 300px">
          <Content style={contentStyle}>
            <Banner />
            <Gridview />
          </Content>
          <Pagination
            style={{
              color: "black",
              background: "rgb(250,250,251)",
              textAlign: "center",
              marginTop: "15px",
            }}
            defaultCurrent={3}
            total={50}
            responsive={true}
          />
        </Col>
      </Row>
    </Layout>
  </>
);
export default ProductList;
