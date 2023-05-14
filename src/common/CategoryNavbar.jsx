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
          title: <a href="Home">Home</a>,
        },
        {
          title: <a href="ACCESORIES">ACCESORIES</a>,
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
