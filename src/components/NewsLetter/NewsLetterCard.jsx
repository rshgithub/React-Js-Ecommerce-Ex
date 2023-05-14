import { Typography, Input, Checkbox, Image, Space, Button, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";

const NewsletterCard = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };
  const { Title, Text } = Typography;
  return (
    <div >
      <Card style={{ width: 800 }}>
        <Space size="middle">
          <div >
            <Title level={4}>Newsletter</Title>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Space.Compact style={{ width: "100%" }}>
                <Input placeholder="Email address" />
                <Button type="primary" onClick={handleSubscribe}>
                Subscribe
                </Button>
              </Space.Compact>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 20 }}
            >
              <Checkbox />
              <Text style={{ marginLeft: 10 }}>
              Don’t show this popup again</Text>
            </div>
          </div>

          <Image
           style={{   objectFit: "cover" }}
           preview={false}
          height={300}
            width={300}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ivf6EtmQAa_Aa7qfpPyy8jPZeW07Egx7VXshTwDGQKmZQvx7H3iGXbFsEfCd9XSFR68&usqp=CAU"
          />
        </Space>
      </Card>
    </div>
  );
};

export default NewsletterCard;
