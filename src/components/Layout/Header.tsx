import { Input, Button, Badge, Dropdown, Space, Menu } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import "../../sass/Home/Home.scss";
import { useAuthContext } from "../../modules/context/AuthContext";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations/logout.graphql";
import JWTManager from "../../modules/utils/jwt";
import { LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Search } = Input;
const Header = () => {
  if (!window.localStorage.getItem("products")) {
    window.localStorage.setItem("products", "[]");
  }
  let quantityProduct = JSON.parse(window.localStorage.getItem("products") as string).length
  const onSearch = (value: string) => {
    console.log(value);
  };
  const { isAuthenticated, logoutClient } = useAuthContext();
  const [logoutServer, _] = useMutation(LOGOUT);

  const onClick = async () => {
    logoutClient();
    await logoutServer({ variables: { username: JWTManager.getUsername() } });
  };
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} onClick={onClick}>
        Logout
      </Menu.Item>
    </Menu>
  );
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
              <Badge count={quantityProduct} offset={[8, -5]}>
                <img src={cart} alt="Giỏ hàng" />
              </Badge>
            </button>
          </Link>
          <Link to={"/login"}>
            <Avatar
              className="sign_in-responsive"
              size={48}
              icon={<UserOutlined />}
            />
          </Link>
          {isAuthenticated ? (
            <>
              <Dropdown overlay={menu}>
                <Space
                  style={{
                    marginLeft: "30px",
                    position: "relative",
                    zIndex: "9999",
                    fontSize: "18px",
                  }}
                >
                  <Avatar
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
          ) : (
            <Link to={"/login"}>
              <Button className="sign_in" type="primary" htmlType="submit">
                <span>Đăng nhập</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Search
        className="search_input-responsive"
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />
    </>
  );
};

export default Header;
