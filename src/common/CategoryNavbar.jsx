import { Breadcrumb } from "antd";
const centerStyle = {
  marginTop: 10,
  marginBottom: 40,
  padding: 10,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F6F7F8",
  fontWeight: '500'

};

const CategoryNavbar = () => (
  <>
    <Breadcrumb
      style={centerStyle}
      items={[
        {
          title: (
            <a style={{ color: " #009fe1" }} href="Home">
              Home
            </a>
          ),
        },
        {
          title: (
            <a style={{ color: " #009fe1" }} href="ACCESORIES">
              ACCESORIES
            </a>
          ),
        },
        {
          title: (
            <a style={{ color: " black" }} href="Beat Solo2 on Ear Headphones - Black">
              Beat Solo2 on Ear Headphones - Black
            </a>
          ),
        },
      ]}
    ></Breadcrumb>
  </>
);
export default CategoryNavbar;
