import { Input, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import "../../sass/Home/Home.scss";
const { Search } = Input;
const Header = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
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
      <Link to={"/giohang"}>
        <button className="shopping_cart">
          <Badge count={1} offset={[8, -5]}>
            <img src={cart} alt="Giỏ hàng" />
          </Badge>
        </button>
      </Link>
      <Button className="sign_in" type="primary" htmlType="submit">
        Đăng nhập
      </Button>

    </div>
  );
};

export default Header;
