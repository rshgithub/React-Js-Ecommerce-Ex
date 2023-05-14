import { Menu, Space } from "antd";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const centerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const items = [
    {
      label: "HOME",
      key: "home",
      children: [
        {
          label: <MegaMenu />,
          key: "megamenu",
          style: {
            height: "fit-content",
            padding: "0",
            backgroundColor: "white",
          },
        },
      ],
    },
    {
      label: "STORE",
      key: "store",
    },
    {
      label: "IPHONE",
      key: "iphone",
    },
    {
      label: "IPAD",
      key: "ipad",
    },
    {
      label: "MACBOOK",
      key: "macbook",
    },
    {
      label: "ACCESORIES",
      key: "accesories",
    },
  ];

  return (
    <Container>
      <Row align="center">
        <Col
          span={6}
          offset={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="logo">
            <h1>BOUNCER</h1>
          </div>
        </Col>
      </Row>
      <Row align="center">
        <Col
          span={12}
          offset={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Menu
            style={centerStyle}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          ></Menu>
        </Col>
      </Row>
    </Container>
  );
};

function MegaMenu() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onMenuItemClick = (item) => {
    setSelectedKeys([item.key]);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Space direction="horizontal">
        <Menu
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              type: "group",
              label: "Category",
              key: "category",
              children: [
                {
                  label: "AirPort & Wireless",
                  key: "air",
                },
                {
                  label: "AppleCare",
                  key: "applecare",
                },
                {
                  label: "Bags, Shells & Sleeves",
                  key: "bags",
                },
                {
                  label: "Business & Security",
                  key: "business",
                },
                {
                  label: "Cables & Docks",
                  key: "cables",
                },
              ],
            },
          ]}
          style={{ box: "none", border: "none" }}
        ></Menu>
        <Menu
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              type: "group",
              label: "",
              key: "",
              children: [
                {
                  label: " Cameras & Video",
                  key: "Cameras",
                },
                {
                  label: "Car & Travel",
                  key: "Car",
                },
                {
                  label: "Cases & Films",
                  key: "Cases",
                },
              ],
            },
          ]}
          style={{ box: "none", border: "none", marginBottom: "60%" }}
        ></Menu>
        <Menu
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              type: "group",
              label: "Category",
              key: "category",
              children: [
                {
                  label: "Charging Devices",
                  key: "Charging",
                },
                {
                  label: "Connected Home",
                  key: "Connected",
                },
                {
                  label: "Device Care",
                  key: "Device",
                },
                {
                  label: "Display & Graphic",
                  key: "Display",
                },
                {
                  label: "Fitness & Sport",
                  key: "Fitness",
                },
              ],
            },
          ]}
          style={{ box: "none", border: "none" }}
        ></Menu>

        <Menu
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              type: "group",
              label: "",
              key: "",
              children: [
                {
                  label: "Headphones",
                  key: "Headphones",
                },
                {
                  label: "HealhKit",
                  key: "HealhKit",
                },
              ],
            },
          ]}
          style={{ box: "none", border: "none", marginBottom: "70%" }}
        ></Menu>

        <Menu
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              type: "group",
              label: "Category",
              key: "category",
              children: [
                {
                  label: "Mice & Keyboards",
                  key: "Mice",
                },
                {
                  label: "Music Creation",
                  key: "Music",
                },
                {
                  label: "Networking & Server",
                  key: "Networking",
                },
              ],
            },
          ]}
          style={{ box: "none", border: "none", marginBottom: "60%" }}
        ></Menu>
      </Space>
    </div>
  );
}

export default NavBar;
