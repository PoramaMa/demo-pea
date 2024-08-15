import { HomeOutlined, MailOutlined, PhoneOutlined, QuestionCircleOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Card, Carousel, Col, Layout, Row, Tabs } from "antd";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import MyTabs from "./tab";

const { Content } = Layout;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const bannerDiv = () => {
    return (
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
      </Carousel>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Card>{bannerDiv()}</Card>
        <Card>
          <Breadcrumb
            items={[
              {
                href: "",
                title: <HomeOutlined />,
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />
        </Card>
        <Row justify="center" align="middle" style={{ marginTop: 40 }}>
          <MyTabs />
        </Row>
        </Content>
      <Footer />
    </Layout>
  );
};
export default Home;

