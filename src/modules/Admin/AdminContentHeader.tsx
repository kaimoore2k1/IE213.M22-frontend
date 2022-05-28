import { Button, Drawer, Input, Typography } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AdminCreateUser from "./AdminCreateUser";
import AdminAddProduct from "./AdminAddProduct";
import AdminAddBlog from "./AdminAddBlog";
import AdminAddComment from "./AdminAddComment";
import {ExportCSV} from "../../components/core/ExportCSV";

const { Title } = Typography;
const { Search } = Input;

function AdminContentHeader(props: {
  title: string;
  setSearchValue(value: string): void;
  current: number;
  exportData: any
}) {
  const [visible, setVisible] = useState(false);
  const onSearch = (value: any) => {
    props.setSearchValue(value);
  };
  let titleDrawer: string = "";
  let contentDrawer: JSX.Element = <></>;
  const data: any = null;
  const id = "";
  switch (props.current) {
    case 1: {
      titleDrawer = "CREATE USER";
      contentDrawer = (
        <AdminCreateUser visibleProp={setVisible} dataProp={data} id={id} />
      );
      break;
    }
    case 2: {
      titleDrawer = "ADD PRODUCT";
      contentDrawer = (
        <AdminAddProduct visibleProp={setVisible} dataProp={data} id={id} />
      );
      break;
    }
    case 3: {
      titleDrawer = "ADD BLOG";
      contentDrawer = <AdminAddBlog visibleProp={setVisible} dataProp={data} />;
      break;
    }
    case 4: {
      titleDrawer = "ADD COMMENT";
      contentDrawer = (
        <AdminAddComment visibleProp={setVisible} dataProp={data} />
      );
      break;
    }
    default: {
      titleDrawer = "error";
      break;
    }
  }
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        title={titleDrawer}
        placement="right"
        onClose={onClose}
        visible={visible}
        size="large"
      >
        {contentDrawer}
      </Drawer>
      <Title level={2}>{props.title}</Title>
      <div className="Admin_Header_Add">
        <Button type="primary" shape="default" icon={<DownloadOutlined />} onClick={e => ExportCSV({csvData: props.exportData, fileName: props.title})}/>
        {props.current ? (
          <Button
            type="primary"
            shape="default"
            icon={<PlusOutlined />}
            onClick={showDrawer}
            style={{ margin: "0 8px" }}
          />
        ) : (
          <></>
        )}
        <Search
          placeholder="Search Name"
          onSearch={onSearch}
          enterButton
          allowClear
        />
      </div>
    </>
  );
}

export default AdminContentHeader;
