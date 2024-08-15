import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Carousel, Layout, Steps } from "antd";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
const { Content } = Layout;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
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
        <Card>
          <Steps
            progressDot
            current={1}
            direction="vertical"
            items={[
              {
                title: "Finished",
                description: "This is a description. This is a description.",
              },
              {
                title: "Finished",
                description: "This is a description. This is a description.",
              },
              {
                title: "In Progress",
                description: "This is a description. This is a description.",
              },
              {
                title: "Waiting",
                description: "This is a description.",
              },
              {
                title: "Waiting",
                description: "This is a description.",
              },
            ]}
          />
        </Card>
      </Content>
      <Footer />
    </Layout>
  );
};
export default Home;
