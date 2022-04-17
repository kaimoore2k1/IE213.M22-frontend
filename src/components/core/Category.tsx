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
          width: 256,
          borderLeft: "1px solid #c0c0c0",
          fontSize: 16,
          fontWeight: 500,
        }}
        selectedKeys={[!current[2] ? current[1] : current[2]]}
        defaultOpenKeys={[current[1]]}
        mode="inline"
      >
        <SubMenu
          key="thucung"
          title={
            <Menu.Item key="thucung">
              Thú cưng
              <Link to={"/thucung"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="chocanh">
            Chó cảnh
            <Link to={"/thucung/chocanh"} />
          </Menu.Item>
          <Menu.Item key="meocanh">
            Mèo cảnh
            <Link to={"/thucung/meocanh"} />
          </Menu.Item>
          <Menu.Item key="thukieng">
            Thú kiểng
            <Link to={"/thucung/thukieng"} />
          </Menu.Item>
          <Menu.Item key="hamster">
            Hamster
            <Link to={"/thucung/hamster"} />
          </Menu.Item>
          <Menu.Item key="thucungkhac">
            Khác (bò sát, bọ ú,...)
            <Link to={"/thucung/thucungkhac"} />
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="thucanthucung"
          title={
            <Menu.Item key="thucanthucung">
              Thức ăn thú cưng
              <Link to={"/thucanthucung"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="ta_cho">
            Thức ăn cho chó
            <Link to={"/thucanthucung/ta_cho"} />
          </Menu.Item>
          <Menu.Item key="ta_meo">
            Thức ăn cho mèo
            <Link to={"/thucanthucung/ta_meo"} />
          </Menu.Item>
          <Menu.Item key="ta_khac">
            Thức ăn khác
            <Link to={"/thucanthucung/ta_khac"} />
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="phukienthucung">
          Phụ Kiện thú cưng
          <Link to={"/phukienthucung"} />
        </Menu.Item>
        <Menu.Item key="vatdungthucung">
          Vật dụng thú cưng
          <Link to={"/vatdungthucung"} />
        </Menu.Item>
        <Menu.Item key="dochoithucung">
          Đồ chơi thú cưng
          <Link to={"/dochoithucung"} />
        </Menu.Item>
        <SubMenu
          key="dichvu"
          title={
            <Menu.Item key="dichvu">
              Dịch vụ
              <Link to={"/dichvu"} />
            </Menu.Item>
          }
        >
          <Menu.Item key="cattia">
            Cắt móng, tỉa lông,...
            <Link to={"/dichvu/cattia"} />
          </Menu.Item>
          <Menu.Item key="tronggiu">
            Trông giữ thú cưng
            <Link to={"/dichvu/tronggiu"} />
          </Menu.Item>
          <Menu.Item key="spa">
            Spa
            <Link to={"/dichvu/spa"} />
          </Menu.Item>
          <Menu.Item key="benhvienthuy">
            Bệnh viện thú y
            <Link to={"/dichvu/benhvienthuy"} />
          </Menu.Item>
          <Menu.Item key="sanphamthuy">
            Sản phẩm thú y
            <Link to={"/dichvu/sanphamthuy"} />
          </Menu.Item>
          <Menu.Item key="chiase">
            Góc chia sẻ
            <Link to={"/dichvu/chiase"} />
          </Menu.Item>
          <Menu.Item key="dathen">
            Đặt hẹn trước
            <Link to={"/dichvu/dathen"} />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Category;
