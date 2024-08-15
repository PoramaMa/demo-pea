import { Card, Carousel, Col, Layout, Row, Tabs, Timeline } from "antd";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
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
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    );
  };
  const cardDiv = () => {
    return (
      <Row gutter={16}>
        {[...Array(4)].map((_, index) => (
          <Col span={6} key={index}>
            <Card title={`Card ${index + 1}`} extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        ))}
      </Row>
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
        <Card>{cardDiv()}</Card>
        <Card>
          <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: (
                  <Timeline
                    items={[
                      {
                        children: "Create a services site 2015-09-01",
                      },
                      {
                        children: "Solve initial network problems 2015-09-01",
                      },
                      {
                        children: "Technical testing 2015-09-01",
                      },
                      {
                        children: "Network problems being solved 2015-09-01",
                      },
                    ]}
                  />
                ),
              };
            })}
          />
        </Card>
        <Card>
          <Card>{bannerDiv()}</Card>
        </Card>
        <Card>{cardDiv()}</Card>
        <Card>
          <Card>{bannerDiv()}</Card>
        </Card>
      </Content>
      <Footer />
    </Layout>
  );
};
export default Home;
