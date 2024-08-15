import { HomeOutlined, MailOutlined, PhoneOutlined, QuestionCircleOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Card, Carousel, Col, Layout, Row, Tabs } from "antd";
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
  const onChange = (key) => {
    console.log(key);
  };
  const bannerDiv = () => {
    return (
      <Carousel>
        <div>
          <img src="https://www.pea.co.th/portals/0/Images/Banner/pea_mission.jpg" />
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
        <Row justify="space-evenly" align="middle" style={{ marginTop: 40, textAlign: 'center' }}>
          <Col span={6}>
            <Card style={{ height: "500px", backgroundColor: "#b97fd3", color: "black" }}>
              <h1>วิสัยทัศน์</h1>
              <hr />
              <span>"ไฟฟ้าสุดอัจฉริยะเพื่อคุณภาพชีวิตที่ดีอย่างยั่งยืน"</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: "500px", backgroundColor: "#dcbfe9", color: "black" }}>
              <h1>ภารกิจ (Mission)</h1>
              <hr />
              <span>
                ผลิต จัดหา ให้บริการพลังงานไฟฟ้า <br/>
                และดำเนินธุรกิจอื่นที่เกี่ยวเนื่อง <br/>
                เพื่อตอบสนองความต้องการของลูกค้า <br/>
                ให้เกิดความพึงพอใจทั้งด้านคุณภาพและบริการ <br/>
                โดยการพัฒนาองค์กรอย่างต่อเนื่อง <br/>
                มีึความรับผิดชอบต่อสังคมและสิ่งแวดล้อม
              </span>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ height: "500px", backgroundColor: "#b97fd3", color: "black" }}>
              <h1>ค่านิยม (Core Value)</h1>
              <hr />
              <span>
                ทันโลก บริการดี มีคุณธรรม
              </span>
            </Card>
          </Col>
        </Row>
        </Content>
      <Footer />
    </Layout>
  );
};
export default Home;

