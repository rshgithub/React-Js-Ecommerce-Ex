import { Breadcrumb, Divider } from 'antd';
import { useState } from 'react';
const centerStyle = {
  margin:"30px",
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor:"#F6F7F8",
  };

const App = () => (
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
export default App;