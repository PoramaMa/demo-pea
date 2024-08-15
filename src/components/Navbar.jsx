import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Image, Layout, Menu, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const items1 = [
  {
    key: "/",
    label: (
      <Image.PreviewGroup>
        <Image
          preview={false}
          width={200}
          src="https://www.pea.co.th/Portals/0/New-pea-logo.png?ver=2020-12-07-134117-813"
        />
      </Image.PreviewGroup>
    ),
  },
];

const dataMenu = [
  {
    label: "เกี่ยวกับเรา",
    submenu: [
      {
        key: "/about/history",
        label: "ประวัติความเป็นมา",
      },
    ],
  },
  {
    label: "ข่าวสารประกาศ",
    submenu: [
      {
        key: "/nesw/advertise",
        label: "ข่าวประชาสัมพันธ์",
      },
    ],
  },
  {
    label: "ความรุ้เกี่ยวกับไฟฟ้า",
    submenu: [
      {
        key: "/knowledge/electricity",
        label: "ไฟฟ้าน่ารู้",
      },
    ],
  },
  {
    label: "ดาวน์โหลดเอกสาร",
  },
  {
    label: "บริการอื่นๆ",
  },
  {
    label: "ติดต่อเรา",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const menu = () => {
    return dataMenu.map((item, index) => {
      if (item.submenu) {
        return (
          <Dropdown
            key={index}
            menu={{
              items: item.submenu,
              onClick: handleMenuClick,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
          >
            <Typography.Link style={{ margin: "20px" }}>
              <Space>
                {item.label}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        );
      } else {
        return (
          <Typography.Link style={{ margin: "20px" }} key={index}>
            <Space>{item.label}</Space>
          </Typography.Link>
        );
      }
    });
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          onClick={handleMenuClick}
        />
        {menu()}
      </Header>
    </Layout>
  );
};
export default Navbar;
