import { Button, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
const { Title } = Typography;
const { Search } = Input;

function AdminContentHeader(props: { title: string, setSearchValue(value: string): void }) {
  const onSearch = (value: any) => {
    props.setSearchValue(value)
  };
  return (
    <>
      <Title level={2}>{props.title}</Title>
      <div className="Admin_Header_Add">
        <Button type="primary" shape="default" icon={<PlusOutlined />} />
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
