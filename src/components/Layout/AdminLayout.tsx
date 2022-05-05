import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  BookOutlined,
} from "@ant-design/icons";
import AdminLogin from "../../modules/Admin/AdminLogin";

function AdminLayout() {
  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!(window.innerWidth > 500)) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize, true);

    return () => {
      window.removeEventListener("resize", handleResize, true);
    };
  });
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "2",
      icon: <CodeSandboxOutlined />,
      label: "Product",
    },
    {
      key: "3",
      icon: <BookOutlined />,
      label: "Blog",
    },
  ];
  return (
    <Layout>
      <Sider
        width="15%"
        style={{ height: "100vh" }}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" style={{ padding: "10px", height: "30%", position: "relative", top: "1%"}}>
          <img
            src="https://senshop.tech/static/media/logo.bc588d992055212e8997a878ac242940.svg"
            alt="logo"
            style={{ width: "100%" }}
          />
        </div>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          {items.map((item) => {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "white" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              style: { marginRight: "1%" },
              className: "trigger",
              onClick: onToggle,
            }
          )}
          Welcome to Admin!
          <AdminLogin />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer style={{ backgroundColor: "white" }}></Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
