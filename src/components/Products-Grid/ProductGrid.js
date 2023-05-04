import { Col, Layout, Pagination, Row } from 'antd';
import {CenterSidbarSection,Banner,Gridview} from './index' 
const {Sider, Content } = Layout;

const contentStyle = {
textAlign: 'center',
minHeight: 120,
lineHeight: '120px',
backgroundColor: '#fff',
};
const siderStyle = {
textAlign: 'center',
lineHeight: '120px',
backgroundColor: '#fff',
};

const ProductGrid = () => (
<Layout 
className='container'
style={{backgroundColor:'#fff'}}>
<Row>
<Col span={6}>
<Sider style={siderStyle}><CenterSidbarSection/></Sider>
</Col>
<Col span={18}>
<Content style={contentStyle}>
<Banner/>
<Gridview/>
</Content>
<Pagination  style={{color:'black' ,background:'rgb(250,250,251)',textAlign:'center'}} defaultCurrent={3} total={50} />
</Col>
</Row>
</Layout>
);
export default ProductGrid;