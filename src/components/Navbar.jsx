import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { NavbarStyle } from "./NavbarStyle";

import { Image } from "antd";
import logo from "../assets/img/logo3.png";

const { Header } = Layout;

const logoItem = {
  key: "/",
  label: (
    <Link to="/">
      <Image
        preview={false}
        width={200}
        src={logo}
        style={{ margin: "auto" }}
      />
    </Link>
  ),
  disabled: true, // ป้องกันไม่ให้คลิกเลือกเมนูนี้ได้
};

const menuAboutUs = (
  <Menu>
    <Menu.Item key="1">
      <Link
        to="https://www.pea.co.th/เกี่ยวกับเรา/ประวัติความเป็นมา"
        style={{ textDecoration: "none" }}
      >
        ประวัติความเป็นมา
      </Link>
    </Menu.Item>
    <Menu.SubMenu key="sub1" title="คณะกรรมการและผู้บริหาร">
      <Menu.Item key="2">
        <Link
          to="https://www.pea.co.th/เกี่ยวกับเรา/คณะกรรมการและผู้บริหาร/คณะกรรมการ"
          style={{ textDecoration: "none" }}
        >
          คณะกรรมการ
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          to="https://www.pea.co.th/เกี่ยวกับเรา/คณะกรรมการและผู้บริหาร/คณะผู้บริหาร"
          style={{ textDecoration: "none" }}
        >
          คณะผู้บริหาร
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link
          to="https://www.pea.co.th/เกี่ยวกับเรา/คณะกรรมการและผู้บริหาร/ทำเนียบอดีตผู้ว่าการ"
          style={{ textDecoration: "none" }}
        >
          ทำเนียบอดีตผู้ว่าการ
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="5">
      <Link
        to="https://www.pea.co.th/เกี่ยวกับเรา/กองทุนวิจัยและพัฒนาเทคโนโลยีของกฟภ"
        style={{ textDecoration: "none" }}
      >
        กองทุนการวิจัย พัฒนา และนวัตกรรม
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link
        to="https://www.pea.co.th/เกี่ยวกับเรา/ยุทธศาสตร์และแผนการดำเนินงานขององค์กร"
        style={{ textDecoration: "none" }}
      >
        ยุทธศาสตร์และแผนการดำเนินงานขององค์กร
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link
        to="https://www.pea.co.th/เกี่ยวกับเรา/นโยบายองค์กร"
        style={{ textDecoration: "none" }}
      >
        นโยบายองค์กร
      </Link>
    </Menu.Item>
  </Menu>
);

const menuNews = (
  <Menu>
    <Menu.Item key="1">
      <Link
        to="https://eservice.pea.co.th/PowerOutage"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        ประกาศดับไฟ
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/ข่าวประชาสัมพันธ์"
        style={{ textDecoration: "none" }}
      >
        ข่าวประชาสัมพันธ์
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link
        to="https://bidding.pea.co.th"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        ประกาศจัดซื้อจัดจ้าง
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/ประกาศขายทอดตลาด"
        style={{ textDecoration: "none" }}
      >
        ประกาศขายทอดตลาด
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/ข่าวรับสมัครงาน"
        style={{ textDecoration: "none" }}
      >
        ข่าวรับสมัครงาน
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/ปฏิทิน-Off-Peak"
        style={{ textDecoration: "none" }}
      >
        ปฏิทิน Off Peak
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/Product-List"
        style={{ textDecoration: "none" }}
      >
        Product List
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link
        to="https://www.pea.co.th/downloads/PID/610/evl/0/CategoryID/510/CategoryName/หลักเกณฑ์การขึ้นทะเบียนและรับรองผลิตภัณฑ์"
        style={{ textDecoration: "none" }}
      >
        PEA Product Acceptance
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link
        to="https://www.pea.co.th/downloads/PID/610/evl/0/CategoryID/519/CategoryName/หลักเกณฑ์การขึ้นทะเบียนผลิตภัณฑ์-Pre-Qualification-Lists"
        style={{ textDecoration: "none" }}
      >
        Pre-Qualification Lists
      </Link>
    </Menu.Item>
    <Menu.Item key="10">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/PEA-จิตอาสา"
        style={{ textDecoration: "none" }}
      >
        PEA จิตอาสา
      </Link>
    </Menu.Item>
    <Menu.Item key="11">
      <Link
        to="https://www.gridmag.co/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        GRID by PEA
      </Link>
    </Menu.Item>
    <Menu.Item key="12">
      <Link
        to="https://www.pea.co.th/บริการอื่น-ๆ/งานด้านพลังงาน/การขึ้นทะเบียนผลิตภัณฑ์"
        style={{ textDecoration: "none" }}
      >
        การขึ้นทะเบียนผลิตภัณฑ์
      </Link>
    </Menu.Item>
    <Menu.Item key="13">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/DRPilot"
        style={{ textDecoration: "none" }}
      >
        DRPilot
      </Link>
    </Menu.Item>
    <Menu.Item key="14">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/การให้บริการทดสอบเครื่องวัดพลังงานไฟฟ้าเพื่อออกหนังสือรับรอง"
        style={{ textDecoration: "none" }}
      >
        การให้บริการทดสอบเครื่องวัดพลังงานไฟฟ้าเพื่อออกหนังสือรับรอง
      </Link>
    </Menu.Item>
    <Menu.Item key="15">
      <Link
        to="https://www.pea.co.th/ข่าวสารประกาศ/ข้อมูลสำคัญการทดสอบอุปกรณ์"
        style={{ textDecoration: "none" }}
      >
        ข้อมูลสำคัญการทดสอบอุปกรณ์
      </Link>
    </Menu.Item>
  </Menu>
);

const menuServices = (
  <Menu>
    <Menu.Item key="1">
      <Link
        to="https://sbiz.pea.co.th"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        ธุรกิจเกี่ยวเนื่อง
      </Link>
    </Menu.Item>
    <Menu.SubMenu key="sub2" title="งานด้านพลังงาน">
      <Menu.Item key="2">
        <Link
          to="https://www.pea.co.th/บริการอื่น-ๆ/งานด้านพลังงาน/งานส่งเสริมอนุรักษ์พลังงาน"
          style={{ textDecoration: "none" }}
        >
          งานส่งเสริมอนุรักษ์พลังงาน
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          to="https://www.pea.co.th/บริการอื่น-ๆ/งานด้านพลังงาน/งานรับเชื่อมต่อเครื่องกำเนิดพลังงานไฟฟ้า"
          style={{ textDecoration: "none" }}
        >
          งานรับเชื่อมต่อเครื่องกำเนิดพลังงานไฟฟ้า
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="https://ppim.pea.co.th" style={{ textDecoration: "none" }}>
          ระบบบริหารจัดการข้อมูลผู้ผลิตพลังงานไฟฟ้าจากพลังงานทดแทน (PPIM)
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link
          to="https://www.pea.co.th/บริการอื่น-ๆ/งานด้านพลังงาน/ระเบียบและประกาศที่เกี่ยวข้อง"
          style={{ textDecoration: "none" }}
        >
          ระเบียบและประกาศที่เกี่ยวข้อง
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link
          to="https://pea-gsee.com/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          มาตรฐาน GSEE
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link
          to="https://www.pea.co.th/บริการอื่น-ๆ/งานด้านพลังงาน/งานรับซื้อไฟฟ้าจากผู้ผลิตไฟฟ้าเอกชน"
          style={{ textDecoration: "none" }}
        >
          งานรับซื้อไฟฟ้าจากผู้ผลิตไฟฟ้าเอกชน
        </Link>
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

const Navbar = () => {
  return (
    <NavbarStyle>
      <Header
        style={{
          backgroundColor: "#001529",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[]}
          items={[logoItem]}
          style={{ flex: 1 }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <Menu.Item key="aboutus">
            <Dropdown overlay={menuAboutUs}>
              <a href="/">
                เกี่ยวกับเรา <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="news">
            <Dropdown overlay={menuNews}>
              <a href="/">
                ข่าวสารประกาศ <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="services">
            <Dropdown overlay={menuServices}>
              <a href="/">
                บริการอื่น ๆ <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="downloads">
            <Link
              to="https://www.pea.co.th/downloads"
              style={{ textDecoration: "none" }}
            >
              ดาวน์โหลดเอกสาร
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link
              to="https://www.pea.co.th/ติดต่อเรา"
              style={{ textDecoration: "none" }}
            >
              ติดต่อเรา
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </NavbarStyle>
  );
};

export default Navbar;
