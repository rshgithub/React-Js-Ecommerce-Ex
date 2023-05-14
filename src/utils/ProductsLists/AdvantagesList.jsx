import { DollarCircleOutlined , PhoneOutlined , ShoppingCartOutlined } from "@ant-design/icons";

const AdvantagesList = [
{
    key: 1,
    title: "FREE SHIPPING",
    icon: (
      <ShoppingCartOutlined 
        style={{ fontSize: "300%", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: 2,
    title: "100% REFUND",
    icon: (
      <DollarCircleOutlined 
        style={{ fontSize: "300%", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: 3,
    title: "SUPPORT 24/7",
    icon: (
      <PhoneOutlined 
        style={{ fontSize: "300%", color: "#f5222d"  }}
      />
    ),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

export default AdvantagesList