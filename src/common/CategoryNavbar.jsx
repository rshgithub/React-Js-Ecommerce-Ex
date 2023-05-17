import { Breadcrumb } from "antd";
const centerStyle = {
  margin: 50,
  padding: 10,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F6F7F8",
};

const CategoryNavbar = () => (
  <>
    <Breadcrumb
      style={centerStyle}
      items={[
        {
          title: (
            <a style={{ color: " #0275d8" }} href="Home">
              Home
            </a>
          ),
        },
        {
          title: (
            <a style={{ color: " #0275d8" }} href="ACCESORIES">
              ACCESORIES
            </a>
          ),
        },
        {
          title: (
            <a href="Beat Solo2 on Ear Headphones - Black">
              Beat Solo2 on Ear Headphones - Black
            </a>
          ),
        },
      ]}
    ></Breadcrumb>
  </>
);
export default CategoryNavbar;
