import { Card, Divider, Image, Rate, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React, { Component } from "react";

export class ListCardProducts extends Component {
  render() {
    return (
      <Card
        style={{
          width: 250,
          margin: "5px",
        }}
        cover={
          <>
            <Image src="https://www.pcgalore.com/public/assets/images/pcgalore-macbook-pro-13-a2159-i5-1-4ghz-8gb-128gb-ssd-2019--192389717-16938.webp" />
            <Divider></Divider>
          </>
        }
      >
        <Meta
          title="Apple Macbook Pro"
          description={
            <>
              <Rate disabled defaultValue={4} style={{ marginTop: "15px" }} />

              <Typography.Text
                type="secondary"
                style={{ fontSize: "18px", color: "red" }}
              >
                $499
              </Typography.Text>

              <Typography.Text
                delete
                type="secondary"
                style={{
                  fontSize: "18px",
                  padding: "10px",
                  color: "rgb(0,0,0,.3)",
                }}
              >
                $599
              </Typography.Text>
            </>
          }
        />
      </Card>
    );
  }
}

export default ListCardProducts;
