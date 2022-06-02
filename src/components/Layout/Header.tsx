import { Input, Button, Badge, Dropdown, Space, Menu, Tabs } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import "../../sass/Home/Home.scss";
import { useAuthContext } from "../../modules/context/AuthContext";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations/logout.graphql";
import JWTManager from "../../modules/utils/jwt";
import { LogoutOutlined } from "@ant-design/icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import toSlug from "../../assets/toSlug";
import { getProductBooked } from "../../graphql/schema/user.graphql";
const { Search } = Input;
const { TabPane } = Tabs;
const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logoutClient } = useAuthContext();
  const currentUsername = String(JWTManager.getUsername())
  const cartUser = useQuery(getProductBooked(currentUsername))
  let quantityProduct = useRef(0)
  useEffect(() => {
    if(isAuthenticated) {
      if(cartUser.data) {
        quantityProduct.current = cartUser.data.getProductBooked.length
      }
    }
    else {
      if (!window.localStorage.getItem("products")) {
        window.localStorage.setItem("products", "[]");
      }
      quantityProduct.current = JSON.parse(
        window.localStorage.getItem("products") as string
      ).length;
    }
  }, [cartUser.data, isAuthenticated])
  
  const onSearch = (value: string) => {
    if (value) {
      sessionStorage.setItem("valueSearch", value);
      navigate(`/search/${toSlug(value)}`);
    }
  };
  const [logoutServer, _] = useMutation(LOGOUT);

  const logoutHandler = async () => {
    logoutClient();
    await logoutServer({ variables: { username: JWTManager.getUsername() } });
    navigate("..");
  };

  const [user, setUser] = useState();
  

  useEffect(() => {
    // const headers:any = ({
    //   Accept: "application/json",
    //   "Access-Control-Allow-Credentials": true, 
    //   "Content-Type": "application/json",
    // })
    // const getUserProvider = async () => {
      
    //   await fetch("https://d9da-2001-ee0-5321-4c10-9969-874e-f83c-14a7.ap.ngrok.io/auth/login/success", {
    //     method: "GET",
    //     credentials: "include",
    //     headers,
    //   })
    //   .then((response) => {
    //     if (response.status === 200) return response.json();
    //     throw new Error("authentication has been failed!");
    //   })
    //   .then((resObject) => {
    //     setUser(resObject.user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // };
    // getUserProvider();

    
    axios.get('https://890c-116-109-196-38.ap.ngrok.io/auth/home',{
      withCredentials: true
      }).then((res) => {
        setUser(res.data);
        console.log('user provider: ', res.data)
      })
  }, []);  
  

  const [visible, setVisible] = useState(false);
  // const showDrawer = () => {
  //   setVisible(true);
  // };
  // const onClose = () => {
  //   setVisible(false);
  // };

  const menu = (
    <Menu>
      {/* <Menu.Item icon={<UserOutlined />} onClick={showDrawer}>
        <Link to="/profile">Profile</Link>
      </Menu.Item> */}
      <Menu.Item icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} onClick={logoutHandler}>
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
              <Badge count={quantityProduct.current} offset={[8, -5]}>
                <img src={cart} alt="Giỏ hàng" />
              </Badge>
            </button>
          </Link>
          {isAuthenticated ? (
            <>
              <Dropdown overlay={menu}>
                <Space
                  style={{
                    marginLeft: "30px",
                    position: "relative",
                    zIndex: "99",
                    fontSize: "18px",
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
          ) : (
            <>
              <Link to={"/login"}>
                <Button className="sign_in" type="primary" htmlType="submit">
                  <span>Đăng nhập</span>
                </Button>
              </Link>
              <Link to={"/login"}>
                <Avatar
                  className="sign_in-responsive"
                  size={48}
                  icon={<UserOutlined />}
                />
              </Link>
            </>
          )}
        </div>
      </div>
      <Search
        className="search_input-responsive"
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />

      {/* <Drawer
        className="drawer_profile"
        title="Profile"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h2>HỒ SƠ TÀI KHOẢN</h2>
        <Tabs type="card">
          <TabPane tab="Thông tin cá nhân" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Đổi mật khẩu" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Drawer> */}
    </>
  );
};

export default Header;
