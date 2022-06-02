import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import AdminAddBlog from "./AdminAddBlog";
import "../../sass/Admin/Admin.scss";
import { Drawer, Table } from "antd";
import { blogColumns } from "./type";
import { useQuery } from "@apollo/client";
import { getAllBlogsAdmin } from "../../graphql/schema/blog.graphql";

function AdminBlog() {
  const blogs = useQuery(getAllBlogsAdmin);
  const title = "Blog Management";
  const initialValues: any[] = [];
  const [dataSource, setDataSource] = useState(initialValues);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {
    if (blogs.data) {
      let i = 0;
      const newData = blogs.data.getAllBlogs.map((data: any) => {
        return { ...data, ...{ id: ++i } };
      });
      
      setDataSource(
        newData.filter((entry: any) => {
          
          return entry.title.includes(searchValue);
        })
      );
    }
  }, [blogs.data, searchValue]);
  const [visible, setVisible] = useState(false);
  const titleDrawer = "UPDATE BLOG";
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: { id: number }) => {
    setVisible(true);
    setContentDrawer(
      <AdminAddBlog visibleProp={setVisible} dataProp={record} />
    );
  };
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={3}
        exportData={dataSource}
      />
      <Drawer
        title={titleDrawer}
        placement="right"
        onClose={onClose}
        visible={visible}
        size="large"
      >
        {contentDrawer}
      </Drawer>
      <Table
        size="small"
        columns={blogColumns}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              showDrawer(record);
            },
          };
        }}
      />
    </>
  );
}

export default AdminBlog;
