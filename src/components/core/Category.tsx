import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { SubMenu } = Menu;

function Category() {
  const location = useLocation();
  const current = location.pathname.split("/");
  return (
    <div className="category">
      <div className="category_tag">Danh mục sản phẩm</div>
      <Menu
        className="category_menu"
        style={{
          width: "100%",
          borderLeft: "1px solid #c0c0c0",
          fontSize: 16,
          fontWeight: 500,
        }}
        selectedKeys={[!current[2] ? current[1] : current[2]]}
        defaultOpenKeys={[current[1]]}
        mode="inline"
      >
        <SubMenu
          key="thu-cung"
          title={
            <Menu.Item key="thu-cung">
              Thú cưng
              <Link to={"/thu-cung"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="cho-canh">
            Chó cảnh
            <Link to={"/thu-cung/cho-canh"} />
          </Menu.Item>
          <Menu.Item key="meo-canh">
            Mèo cảnh
            <Link to={"/thu-cung/meo-canh"} />
          </Menu.Item>
          <Menu.Item key="thu-kieng">
            Thú kiểng
            <Link to={"/thu-cung/thu-kieng"} />
          </Menu.Item>
          <Menu.Item key="hamster">
            Hamster
            <Link to={"/thu-cung/hamster"} />
          </Menu.Item>
          <Menu.Item key="thu-cung-khac">
            Khác (bò sát, bọ ú,...)
            <Link to={"/thu-cung/thu-cung-khac"} />
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="thuc-an-thu-cung"
          title={
            <Menu.Item key="thuc-an-thu-cung">
              Thức ăn thú cưng
              <Link to={"/thuc-an-thu-cung"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="ta-cho">
            Thức ăn cho chó
            <Link to={"/thuc-an-thu-cung/ta-cho"} />
          </Menu.Item>
          <Menu.Item key="ta-meo">
            Thức ăn cho mèo
            <Link to={"/thuc-an-thu-cung/ta-meo"} />
          </Menu.Item>
          <Menu.Item key="ta-khac">
            Thức ăn khác
            <Link to={"/thuc-an-thu-cung/ta-khac"} />
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="phu-kien-thu-cung">
          Phụ Kiện thú cưng
          <Link to={"/phu-kien-thu-cung"} />
        </Menu.Item>
        <Menu.Item key="vat-dung-thu-cung">
          Vật dụng thú cưng
          <Link to={"/vat-dung-thu-cung"} />
        </Menu.Item>
        <Menu.Item key="do-choi-thu-cung">
          Đồ chơi thú cưng
          <Link to={"/do-choi-thu-cung"} />
        </Menu.Item>
        <Menu.Item key="san-pham-thu-y">
          Sản phẩm thú y
          <Link to={"/san-pham-thu-y"} />
        </Menu.Item>
        <SubMenu
          key="dich-vu"
          title={
            <Menu.Item key="dich-vu">
              Dịch vụ
              <Link to={"/dich-vu"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="cat-tia">
            Cắt móng, tỉa lông,...
            <Link to={"/dich-vu/cat-tia"} />
          </Menu.Item>
          <Menu.Item key="trong-giu">
            Trông giữ thú cưng
            <Link to={"/dich-vu/trong-giu"} />
          </Menu.Item>
          <Menu.Item key="spa">
            Spa
            <Link to={"/dich-vu/spa"} />
          </Menu.Item>
          <Menu.Item key="benh-vien-thu-y">
            Bệnh viện thú y
            <Link to={"/dich-vu/benh-vien-thu-y"} />
          </Menu.Item>
          <Menu.Item key="dat-hen">
            Đặt hẹn trước
            <Link to={"/dich-vu/dat-hen"} />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Category;
