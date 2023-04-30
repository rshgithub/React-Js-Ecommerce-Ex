import { Rate, List, Card, Typography } from "antd";
import React from "react";

const data = [
  {
    key: 1,
    title: "Beats Solo 2 On Ear Headphones - Black",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 5,
    lastPrice: "55",
    originalPrice: "22",
    image:
      "https://www.energysistem.com/cdnassets/products/45303/front_2000.jpg",
  },
  {
    key: 2,
    title: "H-Squared tvTray",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    lastPrice: "55",
    originalPrice: "22",
    rating: 3,
    image: "https://thebookyard.com/images/HSQTVTRAYX2_gall1.jpg",
  },
  {
    key: 3,
    title: "Netatmo Rain Gauge",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    lastPrice: "55",
    originalPrice: "22",
    rating: 2,
    image:
      "https://shop.netatmo.com/img/600/744/resize/catalog/product//n/r/nrg.png",
  },
];

const FeaturedProductCard = () => {
  return (
    <div
      style={{
        marginLeft: 200,
        marginRight: 200,
        marginTop: 80,
        marginBottom: 40,
      }}
    >
      <h2> FEATURED PRODUCTS </h2>
      <List
        grid={{ column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ border: 'none' , width: 430, height: 210 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={item.image}
                  alt="example"
                  style={{ width: 150, height: 180, objectFit: "cover" }}
                />
                <div style={{ marginLeft: 15 }}>
                  <Card.Meta
                    style={{
                      paddingTop:20,
                    }}
                    description={
                      <Typography.Paragraph style={{ fontSize: "16px" }}>
                        <h5>{item.title}</h5>
                        {"$ "}
                        {item.lastPrice}{" "}
                        <Typography.Text
                          delete
                          type="danger"
                          style={{ fontSize: "18px" }}
                        >
                          {"$ "}
                          {item.originalPrice}
                        </Typography.Text>
                      </Typography.Paragraph>
                    } 
                  ></Card.Meta>
                  <Rate
                    style={{ fontSize: 10 }}
                    allowClear={false}
                    allowHalf
                    disabled
                    value={item.rating}
                  />
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FeaturedProductCard;
