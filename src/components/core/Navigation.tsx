import { Menu } from "antd";
import {
  CaretDownOutlined,
  CloseSquareOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import phone from "../../assets/images/phone.svg";
import face from "../../assets/images/face.svg";
import youtube from "../../assets/images/youtube.svg";
import { listSubMenu } from "../../modules/Home/type";

function Navigation() {
  const { SubMenu } = Menu;
  const location = useLocation();
  const current = location.pathname.split("/");
  const onClick = () => {
    document.getElementById("check-box-nav")?.click();
  };
  return (
    <>
      <div className="menu">
        <Menu
          className="navBar"
          selectedKeys={[
            listSubMenu.indexOf(current[2]) === -1 ? current[1] : current[2],
          ]}
          mode="horizontal"
        >
          <Menu.Item id="nav_item_home" key="">
            Trang chủ
            <Link to={"/"} />
          </Menu.Item>
          <SubMenu
            key="thu-cung"
            title={
              <>
                <span>Thú cưng</span>
                <CaretDownOutlined />
              </>
            }
          >
            <Menu.Item key="cho-canh">
              Chó cảnh
              <Link to={"thu-cung/cho-canh"} />
            </Menu.Item>
            <Menu.Item key="meo-canh">
              Mèo cảnh
              <Link to={"thu-cung/meo-canh"} />
            </Menu.Item>
            <Menu.Item key="thu-kieng">
              Thú kiểng
              <Link to={"thu-cung/thu-kieng"} />
            </Menu.Item>
            <Menu.Item key="hamster">
              Hamster
              <Link to={"thu-cung/hamster"} />
            </Menu.Item>
            <Menu.Item key="thu-cung-khac">
              Khác(Bò sát, bọ ú...)
              <Link to={"thu-cung/thu-cung-khac"} />
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="cua-hang"
            title={
              <>
                <span>Cửa hàng</span>
                <CaretDownOutlined />
              </>
            }
          >
            <Menu.Item key="thuc-an-thu-cung">
              Thức ăn thú cưng
              <Link to={"thuc-an-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="vat-dung-thu-cung">
              Vật dụng thú cưng
              <Link to={"vat-dung-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="phu-kien-thu-cung">
              Phụ kiện thú cưng
              <Link to={"phu-kien-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="do-choi-thu-cung">
              Đồ chơi thú cưng
              <Link to={"do-choi-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="san-pham-thu-y">
              Sản phẩm thú y
              <Link to={"san-pham-thu-y"} />
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="dich-vu">
            Dịch vụ
            <Link to={"dich-vu"} />
          </Menu.Item>

          <Menu.Item key="tap-chi">
            Tạp chí thú cưng
            <Link to={"tap-chi"} />
          </Menu.Item>
          <Menu.Item key="gioi-thieu">
            Giới thiệu
            <Link to={"gioi-thieu"} />
          </Menu.Item>
          <Menu.Item className="icon">
            <img src={phone} alt="Phone" />
            <span style={{ fontWeight: "500", fontSize: "16px" }}>
              0956789999
            </span>
            <a href="https://www.facebook.com/senshopdottech">
              <img style={{ marginLeft: "50px" }} src={face} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCEfOnxocSnSHgzmD2FFxnGQ">
              <img style={{ marginLeft: "20px" }} src={youtube} alt="Youtube" />
            </a>
          </Menu.Item>
        </Menu>
      </div>
      <div className="menu-responsive">
        <section className="nav_open">
          <label htmlFor="check-box-nav">
            <MenuOutlined className="open" />
          </label>
          <div className="icon-responsive">
            <img src={phone} alt="Phone" />
            <span style={{ fontWeight: "500", fontSize: "16px" }}>
              0956789999
            </span>
            <a href="https://www.facebook.com/senshopdottech">
              <img style={{ marginLeft: "10px" }} src={face} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCEfOnxocSnSHgzmD2FFxnGQ">
              <img style={{ marginLeft: "10px" }} src={youtube} alt="Youtube" />
            </a>
          </div>
        </section>
        <input
          type="checkbox"
          name=""
          className="check-box"
          id="check-box-nav"
        />
        <label htmlFor="check-box-nav" className="nav_overlay"></label>

        <Menu
          className="navBar-responsive"
          selectedKeys={[
            listSubMenu.indexOf(current[2]) === -1 ? current[1] : current[2],
          ]}
          mode="inline"
          onClick={onClick}
        >
          <div style={{ height: "40px" }}>
            <label htmlFor="check-box-nav">
              <CloseSquareOutlined className="close" />
            </label>
          </div>

          <Menu.Item key="">
            Trang chủ
            <Link to={"/"} />
          </Menu.Item>

          <SubMenu
            style={{ paddingLeft: "24px" }}
            key="thu-cung"
            title={
              <>
                <span>Thú cưng</span>
              </>
            }
          >
            <Menu.Item key="cho-canh">
              Chó cảnh
              <Link to={"thu-cung/cho-canh"} />
            </Menu.Item>
            <Menu.Item key="meo-canh">
              Mèo cảnh
              <Link to={"thu-cung/meo-canh"} />
            </Menu.Item>
            <Menu.Item key="thu-kieng">
              Thú kiểng
              <Link to={"thu-cung/thu-kieng"} />
            </Menu.Item>
            <Menu.Item key="hamster">
              Hamster
              <Link to={"thu-cung/hamster"} />
            </Menu.Item>
            <Menu.Item key="thu-cung-khac">
              Khác(Bò sát, bọ ú...)
              <Link to={"thu-cung/thu-cung-khac"} />
            </Menu.Item>
          </SubMenu>
          <SubMenu
            style={{ paddingLeft: "24px" }}
            key="cua-hang"
            title={
              <>
                <span>Cửa hàng</span>
              </>
            }
          >
            <Menu.Item key="thuc-an-thu-cung">
              Thức ăn thú cưng
              <Link to={"thuc-an-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="vat-dung-thu-cung">
              Vật dụng thú cưng
              <Link to={"vat-dung-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="phu-kien-thu-cung">
              Phụ kiện thú cưng
              <Link to={"phu-kien-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="do-choi-thu-cung">
              Đồ chơi thú cưng
              <Link to={"do-choi-thu-cung"} />
            </Menu.Item>
            <Menu.Item key="san-pham-thu-y">
              Sản phẩm thú y
              <Link to={"san-pham-thu-y"} />
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="dich-vu">
            Dịch vụ
            <Link to={"dich-vu"} />
          </Menu.Item>

          <Menu.Item key="tap-chi">
            Tạp chí thú cưng
            <Link to={"tap-chi"} />
          </Menu.Item>
          <Menu.Item key="gioi-thieu">
            Giới thiệu
            <Link to={"gioi-thieu"} />
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}

export default Navigation;
