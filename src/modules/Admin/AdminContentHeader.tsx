import { Button, Drawer, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AdminCreateUser from "./AdminCreateUser";
const { Title } = Typography;
const { Search } = Input;

function AdminContentHeader(props: {
  title: string;
  setSearchValue(value: string): void;
  current: number;
}) {
  const [visible, setVisible] = useState(false);
  const onSearch = (value: any) => {
    props.setSearchValue(value);
  };
  let titleDrawer: string = ""
  let contentDrawer:JSX.Element = <></>
  const userData:any = null
  switch (props.current) {
    case 1: {
      titleDrawer = "CREATE USER";
      contentDrawer = <AdminCreateUser visibleProp={setVisible} dataProp={userData}/>
      break;
    }
    case 2: {
      //statements;
      break;
    }
    case 3: {
      //statements;
      break;
    }
    default: {
      console.log("error");
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
        <Button
          type="primary"
          shape="default"
          icon={<PlusOutlined />}
          onClick={showDrawer}
        />
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
