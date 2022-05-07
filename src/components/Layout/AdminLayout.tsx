import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "../../sass/Admin/AdminLayout.scss";
import AdminLogin from "../../modules/Admin/AdminLogin";

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/users");
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (!(window.innerWidth > 800) && collapsed === false) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
      if (!(window.innerHeight > 400)) {
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
      path: "users",
    },
    {
      key: "2",
      icon: <CodeSandboxOutlined />,
      label: "Product",
      path: "products",
    },
    {
      key: "3",
      icon: <BookOutlined />,
      label: "Blog",
      path: "blogs",
    },
  ];
  return (
    <Layout className="Admin_Layout" style={{ height: "100%" }}>
      <Sider
        width="15%"
        style={{ height: "100vh", position: "sticky", top: "0" }}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            padding: "10px",
            height: "30%",
            position: "relative",
            top: "1%",
          }}
        >
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
                <Link to={item.path} />
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: "white",
            position: "sticky",
            top: "0",
            zIndex: "9999",
          }}
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
            backgroundColor: "white",
            wordWrap: "break-word",
            display: "block",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            backgroundColor: "white",
            textAlign: "center",
            position: "sticky",
            bottom: "0"
          }}
        >
          {" "}
          Sen Shop &copy;2022 Created by senshop.tech
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
