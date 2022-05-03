import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function AdminLayout() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  };
  if (window.innerWidth < 100) {
    
  }
  
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  return (
    <Layout>
      <Sider width='15%' style={{height: '100vh'}} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ padding: '10px', height: '30%'}}>
          <img src='https://senshop.tech/static/media/logo.bc588d992055212e8997a878ac242940.svg' alt='logo' style={{width: '100%'}}/>
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
        <Header className="site-layout-background" style={{ padding: 0 , backgroundColor:'white'}}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: onToggle,
            }
          )}
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
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
