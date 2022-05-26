import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import "../../sass/Admin/Admin.scss";
import { Drawer, Table } from "antd";
import { commentColumns } from "./type";
import { useQuery } from "@apollo/client";
import { getAllComments } from "../../graphql/schema/comment.graphql";
import AdminAddComment from "./AdminAddComment";


function AdminComment() {
  const comments = useQuery(getAllComments);

  const title = "Comment Management";
  const initialValues: any[] = [];
  const [dataSource, setDataSource] = useState(initialValues);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {

    if (comments.data) {
      let i = 0;
      const newData = comments.data.getAllComments.map((data: any) => {
        return { ...data, ...{ id: ++i } };
      });
     
      setDataSource(
        newData.filter((entry: any) => {
          
          return entry.content.includes(searchValue);
        })
      );
    }
  }, [comments.data, searchValue]);
  const [visible, setVisible] = useState(false);
  const titleDrawer = "UPDATE COMMENT";
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: { id: number }) => {
    setVisible(true);
    setContentDrawer(
      <AdminAddComment visibleProp={setVisible} dataProp={record} />
    );
  };
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={4}
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
        columns={commentColumns}
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

export default AdminComment;
