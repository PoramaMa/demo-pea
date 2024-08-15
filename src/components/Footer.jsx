import { Col, Layout, Row } from "antd";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterStyle } from "./FooterStyle";
const { Footer } = Layout;

const _Footer = () => {
  return (
    <FooterStyle>
      <Footer
        style={{
          background: "#4C0B5F",
          color: "#fff",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <Row>
            <Col span={24}>
              <div style={{ textAlign: "right" }}>
                {/* IPv6-test.com button BEGIN */}
                <a href="//ipv6-test.com/validate.php?url=https://www.pea.co.th">
                  <img
                    src="//ipv6-test.com/button-ipv6-small.png"
                    alt="ipv6 ready"
                    title="ipv6 ready"
                  />
                </a>
                {/* IPv6-test.com button END */}
              </div>
              <div className="contact">
                <p lang="th-TH">
                  การไฟฟ้าส่วนภูมิภาค สำนักงานใหญ่
                  <br />
                  200 ถนนงามวงศ์วาน ลาดยาว จตุจักร กรุงเทพ 10900 &nbsp; | &nbsp;
                  <span lang="en-US">
                    PEA Contact Center : <a href="tel:1129">1129</a>
                  </span>{" "}
                  | &nbsp;
                  <span lang="en-US">Social </span> : &nbsp;
                  <a
                    href="https://www.facebook.com/Provincial.Electricity.Authority"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com/pea_thailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/user/PEAchannelThailand"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <FaYoutube size={20} />
                  </a>
                  <a
                    href="https://instagram.com/peathailand/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="copyright">
                ©
                <span lang="en-US">
                  <span
                    id="dnn_dnnCopyright_lblCopyright"
                    className="SkinObject"
                  >
                    Copyright {new Date().getFullYear()} by PEA
                  </span>
                </span>
                |
                <a lang="th-TH" href="/นโยบายเว็บไซต์">
                  นโยบายเว็บไซต์
                </a>
                |
                <a lang="th-TH" href="/นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์">
                  นโยบายการรักษาความมั่นคงปลอดภัยเว็บไซต์
                </a>
                |
                <a lang="th-TH" href="/นโยบายการคุ้มครองข้อมูลส่วนบุคคล">
                  นโยบายการคุ้มครองข้อมูลส่วนบุคคล
                </a>
                |
                <a lang="th-TH" href="/การปฏิเสธการรับผิด">
                  การปฏิเสธการรับผิด
                </a>
                |
                <a lang="th-TH" href="/แนะนำการใช้งานเว็บไซต์">
                  แนะนำการใช้งานเว็บไซต์
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: "10px" }}>
              <div id="dnn_BannerBottom" className="DNNEmptyPane"></div>
            </Col>
          </Row>
        </div>
      </Footer>
    </FooterStyle>
  );
};

export default _Footer;
