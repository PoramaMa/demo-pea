import { Layout } from "antd";
const { Footer } = Layout;

const _Footer = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UEDs
      </Footer>
    </>
  );
};

export default _Footer;
