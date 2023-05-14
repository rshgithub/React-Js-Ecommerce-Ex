import { Breadcrumb, Divider } from 'antd'; 
const centerStyle = {
  marginBottom: 50,
  padding: 10,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor:"#F6F7F8",
  };

const CategoryNavbar = () => (
  <>
  <Breadcrumb
  style={centerStyle}
    items={[
      {
        title: <a style={{color:"blue"}}  href="">Home</a>,
      },
      {
        title: <a href="">ACCESORIES</a>,
      },
      {
        title: <a href="">Beat Solo2 on Ear Headphones - Black</a>,
      }
    ]}
  >
  </Breadcrumb>
  </>
);
export default CategoryNavbar;