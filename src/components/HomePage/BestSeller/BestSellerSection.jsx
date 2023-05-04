import React from "react";
import { List, Button } from "antd";
import { default as BestSellerNavbar } from "./BestSellerNavbar";
import { default as BestSellerProductCard } from "../../../common/BestSellerProductCard";

const data = [
  {
    key: 1,
    title: "Title 1",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: true,
    rating: 2,
  },
  {
    key: 2,
    title: "Title 2",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 5,
  },
  {
    key: 3,
    title: "Title 3",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 4,
  },
  {
    key: 4,
    title: "Title 4",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 3,
  },
  {
    key: 5,
    title: "Title 5",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 2.5,
  },
  {
    key: 6,
    title: "Title 6",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "22",
    ifNew: false,
    rating: 4.5,
  },
  {
    key: 7,
    title: "Title 7",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "55",
    originalPrice: "99",
    ifNew: true,
    rating: 4.5,
  },
  {
    key: 8,
    title: "Title 8",
    image: "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    lastPrice: "22",
    originalPrice: "99",
    ifNew: true,
    rating: 3.5,
  },
];

const BestSellerSection = () => {
  return (
    <div
      style={{
        marginLeft: 200,
        marginRight: 200,
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <BestSellerNavbar />

      <List
        grid={{ gutter: 10, column: 4 }}
        dataSource={data}
        renderItem={(item, index) => (
          <BestSellerProductCard key={index} index={index} obj={item} />
        )}
      />
      <Button
        type="link"
        style={{ borderBottom: "2px solid blue", marginTop: 40 }}
      >
        LOAD MORE{" "}
      </Button>
    </div>
  );
};

export default BestSellerSection;
