import { Card, Carousel, Col, Layout, Row, Tabs } from "antd";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { HomeStyle } from "./HomeStyle";
const { Meta } = Card;
const { Content } = Layout;
// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const contentStyle = {
  width: "100%",
  objectFit: "cover", // ปรับขนาดรูปภาพให้พอดีกับ container
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const bannerDiv = () => {
    return (
      <Carousel
        style={{
          "border-radius": "none !important",
        }}
        loading={loading}
        autoplay
      >
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/Banner.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%A7%E0%B8%B0%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%A5%20%E0%B8%9B%E0%B8%B5%202567.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 2"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/volta_banner_2.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 3"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2023/www-%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99%20%E0%B8%81%E0%B8%9F%E0%B8%A0_.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 4"
            style={contentStyle}
          />
        </div>
      </Carousel>
    );
  };

  const dataCard = [
    {
      text: "ช่องทางการชำระค่าไฟฟ้า",
      img: "https://www.pea.co.th/portals/0/Images/Services/pea-services-2.jpg?ver=2016-08-29-162501-827",
    },
    {
      text: "รับฟังเสียงลูกค้า",
      img: "https://www.pea.co.th/portals/0/images/services/pea-services-3.jpg",
    },
    {
      text: "ขอใช้บริการออนไลน์",
      img: "https://www.pea.co.th/portals/0/Images/Services/e-service.png",
    },
    {
      text: "ติดต่อเรา",
      img: "https://www.pea.co.th/portals/0/Images/PEA-Contact-Center-1129.png",
    },
  ];

  const imgCardStyle = {
    width: "100%",
  };

  const cardDiv = () => {
    return (
      <Row gutter={16}>
        {[...Array(4)].map((_, index) => (
          <Col span={6} key={index}>
            <Card
              hoverable
              loading={loading}
              title={dataCard[index].text}
              extra={<a href="#">เพิ่มเติม</a>}
            >
              <img
                src={dataCard[index].img}
                alt="Banner 1"
                style={imgCardStyle}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const dataTab = [
    {
      img: "https://www.pea.co.th/Portals/0/EasyDNNNews/156101/240160c514EDNthumb1723725755548.jpg",
      title: `PEA ร่วมเสวนาหัวข้อ "Direct PPA & UGT จะตอบโจทย์นักลงทุนอย่างไร" ในงานนิทรรศการ SustainAsia Week 2024`,
      text: "ข่าวประชาสัมพันธ์",
    },
    {
      img: "https://www.pea.co.th/Portals/0/EasyDNNNews/156098/240160c514EDNthumbS__240132121_0.jpg",
      title: `PEA เปิดการใช้งานระบบกักเก็บพลังงานไฟฟ้าด้วยแบตเตอรี่ (BESS) บนพื้นที่เกาะสมุย จังหวัดสุราษฎร์ธานี`,
      text: "ประกาศไฟดับ",
    },
    {
      img: "https://www.pea.co.th/Portals/0/EasyDNNNews/156091/240160c514EDNthumbIMG_8366.jpeg",
      title: `PEA ศึกษาดูงานการพัฒนาองค์กรอย่างยั่งยืนและการบริหารจัดการผู้มีส่วนได้ส่วนเสีย ที่ บริษัท เครือเจริญโภคภัณฑ์ จำกัด`,
      text: "ประกาศจัดซื้อจัดจ้าง",
    },
    {
      img: "https://www.pea.co.th/Portals/0/EasyDNNNews/156089/240150c542EDNthumbDSC_3455.jpg",
      title: `
PEA ร่วมแสดงความยินดีเนื่องในโอกาสวันครบรอบ 21 ปี บริษัท ไปรษณีย์ไทย จำกัด และ 141 ปี กิจการไปรษณีย์ไทย`,
      text: "ข่าวรับสมัครงาน",
    },
  ];

  const dataDetailTab = () => {
    return (
      <Row gutter={16}>
        {dataTab.map((item, index) => (
          <Col span={6} key={index}>
            <Card
              loading={loading}
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  loading={loading}
                  style={{
                    height: "213px",
                    objectFit: "cover",
                  }}
                  alt="example"
                  src={item.img}
                />
              }
            >
              <Meta title={item?.title} description={item?.title} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const bannerDiv2 = () => {
    return (
      <Carousel loading={loading} autoplay>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/%E0%B9%81%E0%B8%9A%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%B6%E0%B8%87%E0%B8%9E%E0%B8%AD%E0%B9%83%E0%B8%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%20PEA%20Website%20%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5%202567%20.jpeg" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 1"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/ppim/%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%20%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%A3%E0%B8%81.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 2"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/solar0.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 3"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://www.pea.co.th/portals/0/Images/Banner/2024/ONLINE_SURVEY.png" // ใส่ URL ของรูปภาพที่ต้องการ
            alt="Banner 4"
            style={contentStyle}
          />
        </div>
      </Carousel>
    );
  };

  const dataCard2 = [
    {
      img: "https://www.pea.co.th/portals/0/Home/img_1.png",
      text: "ค่า Ft",
    },
    {
      img: "https://www.pea.co.th/portals/0/Home/img_2.png",
      text: "การศึกษาลักษณะการใช้ไฟฟ้า",
    },
    {
      img: "https://www.pea.co.th/portals/0/Home/img_3.png",
      text: "โครงสร้างอัตราค่าไฟฟ้า",
    },
    {
      img: "https://www.pea.co.th/portals/0/Home/img_4.png",
      text: "สถานการณ์การจำหน่ายไฟฟ้า",
    },
  ];

  const cardDiv2 = () => {
    return (
      <Row gutter={16}>
        {[...Array(4)].map((_, index) => (
          <Col span={6} key={index}>
            <img
              src={dataCard2[index].img}
              alt="Banner 1"
              style={imgCardStyle}
            />
            <Meta
              style={{ textAlign: "center" }}
              title={dataCard2[index].text}
            />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <HomeStyle>
      <Layout
        style={{
          padding: "0 0",
          margin: "0 0",
          width: "100%",
        }}
      >
        <Content
          style={{
            padding: "0 0",
            margin: "0 0",
          }}
        >
          <Card
            className="pea-card"
            style={{
              background: "#151a1d",
            }}
            loading={loading}
          >
            <Navbar />

            {bannerDiv()}
          </Card>
          <Card
            className="pea-card"
            style={{
              background: "#ffffff",
            }}
          >
            {cardDiv()}
          </Card>
          <Card
            className="pea-card"
            style={{
              background: "#fafafa",
            }}
            loading={loading}
          >
            <Tabs
              loading={loading}
              defaultActiveKey="1"
              type="card"
              centered
              style={{
                width: "1200px",
                margin: "auto",
              }}
              items={dataTab.map((_, i) => {
                const id = String(i + 1);
                return {
                  label: dataTab[i]?.text,
                  key: id,
                  children: dataDetailTab(),
                };
              })}
            />
          </Card>
          <Card
            className="pea-card"
            style={{
              background: "#ffffff",
            }}
          >
            <Card>{bannerDiv2()}</Card>
          </Card>
          <Card style={{}}>{cardDiv2()}</Card>
          <Card>
            <Card>{bannerDiv()}</Card>
          </Card>
        </Content>
        <Footer />
      </Layout>
    </HomeStyle>
  );
};
export default Home;
