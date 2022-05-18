import { Input, Button, Badge, Dropdown, Space, Menu, Drawer, Tabs } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import "../../sass/Home/Home.scss";
import { useAuthContext } from "../../modules/context/AuthContext";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations/logout.graphql"
import JWTManager from "../../modules/utils/jwt"
import { LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Search } = Input;
const { TabPane } = Tabs;
const Header = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  const { isAuthenticated, logoutClient } = useAuthContext();
  const [logoutServer, _] = useMutation(LOGOUT)

  const onClick = async () => {
    logoutClient()
    await logoutServer({ variables: { username: JWTManager.getUsername() } })
  }

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />} onClick={showDrawer}>Profile</Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} onClick={onClick}>Logout</Menu.Item>
    </Menu>
  )
  return (
    <>
      <div className="Header">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <Search
          className="search_input"
          placeholder="Search..."
          onSearch={onSearch}
          enterButton
        />
        <div className="header__right">
          <Link to={"/gio-hang"}>
            <button className="shopping_cart">
              <Badge count={1} offset={[8, -5]}>
                <img src={cart} alt="Giỏ hàng" />
              </Badge>
            </button>
          </Link>
          {isAuthenticated ?
            <>
              <Dropdown overlay={menu} >
                <Space
                  style={{
                    marginLeft: "30px",
                    position: "relative",
                    zIndex: "99",
                    fontSize: "18px"

                  }}
                >
                  <Avatar
                    size={48}
                    style={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
                    icon={<UserOutlined />}
                  />
                  {JWTManager.getUsername()}
                </Space>
              </Dropdown>
              {/* <Button className="sign_in" type="primary" htmlType="submit" onClick={onClick}>
            <span>Đăng xuất</span>
          </Button> */}
            </>
            :
            <>
              <Link to={"/login"}>
                <Button className="sign_in" type="primary" htmlType="submit">
                  <span>Đăng nhập</span>
                </Button>
              </Link>
              <Link to={"/login"}>
                <Avatar className="sign_in-responsive" size={48} icon={<UserOutlined />} />
              </Link>
            </>

          }

        </div>
      </div>
      <Search
        className="search_input-responsive"
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />

      <Drawer className="drawer_profile" title="Profile" placement="right" onClose={onClose} visible={visible}>
        <h2>HỒ SƠ TÀI KHOẢN</h2>
        <Tabs type="card">
          <TabPane tab="Thông tin cá nhân" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Đổi mật khẩu" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Drawer>

    </>
  );
};

export default Header;
