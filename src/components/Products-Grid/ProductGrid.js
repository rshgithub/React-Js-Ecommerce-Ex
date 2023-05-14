import { Col, Layout, Pagination, Row } from 'antd';
import {CenterSidbarSection,Banner,Gridview} from './index' 
const {Sider, Content } = Layout;

const contentStyle = {
textAlign: 'center',
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
<Col flex="0 1 200px" style={{marginRight:'15%'}}> 
<Sider style={siderStyle}><CenterSidbarSection/></Sider>
</Col>
<Col flex="1 1 300px" >
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