import { Input, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import "../../sass/Home/Home.scss";
const { Search } = Input;
const Header = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

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
          <Link to={"/giohang"}>
            <button className="shopping_cart">
              <Badge count={1} offset={[8, -5]}>
                <img src={cart} alt="Giỏ hàng" />
              </Badge>
            </button>
          </Link>
          <Avatar className="sign_in-responsive" size={48} icon={<UserOutlined />} />
          <Button className="sign_in" type="primary" htmlType="submit">
            <span>Đăng nhập</span>
          </Button>
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
