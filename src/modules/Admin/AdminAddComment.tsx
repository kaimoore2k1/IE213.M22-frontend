import { useMutation } from "@apollo/client";
import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import PicturesWall from "../../components/core/PicturesWall";
import { DELETE_COMMENT } from "../../graphql/mutations/comment.graphql";
// import { createComment, deleteComment } from "../../graphql/schema/comment.graphql";

function AdminAddComment(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
}) {
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const [deleteComment,{data, loading, error}] = useMutation(DELETE_COMMENT);
  const handleDelete = () =>{
    deleteComment({
      variables:{
        _id: props.dataProp._id
      }
    })

    if(error){
      message.error("Xóa comment không thành công");
    }else{
      message.success("Xóa comment thành công")
    }
  }
  
  return (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      initialValues={props.dataProp}
    >
      <Row align="middle" justify="center">
        <Col span={9}>
          <Form.Item>
            <PicturesWall />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="content"
        label="Content"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="rating" label="Rating">
        <Input />
      </Form.Item>

      <Form.Item name="user" label="User">
        <Input />
      </Form.Item>

      <Form.Item name="date" label="Date">
        <Input.TextArea className="adminCustomTextArea"/>
      </Form.Item>
      <Form.Item name="idProduct" label="ID Product">
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Form.Item name="idBlog" label="ID Blog">
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handleCancel}>
            Cancel
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handleDelete} loading={loading}>
            Delete
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AdminAddComment;
