import { Table } from 'antd';
import {CloseCircleFilled} from '@ant-design/icons'
const columns = [
  {
    title: 'PRODUCT',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'UNIT PRICE',
    dataIndex: 'unitprice',
    key: 'unitprice',
  },
];
const data = [
  {
    key: 1,
    img:'../../assets/kam.png',
    description: 'Philips Hue 7W BR30 Connected Downlight Lamp ',
    price:'$998',
    quality:'',
    unitprice:'$499'

  },
  {
    key: 2,
    img:'../../assets/kam.png',
    description: 'Apple Macbook Pro',
    price:'$998',
    qty:'',
    unitprice:'$499'
  }
];
const Cart = () => (
  <Table
  className='container'
    columns={columns}
    pagination={false}
    dataSource={data}
  />
);
export default Cart;