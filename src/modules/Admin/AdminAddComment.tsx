import { useMutation } from "@apollo/client";
import { Button, Col, Form, Input, message, Row, Popconfirm } from "antd";
import React from "react";
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
  const deleteHandler = () =>{
    deleteComment({
      variables:{
        _id: props.dataProp._id
      }
    })

    if(error){
      message.error("Deleted successfully!");
    }else{
      message.success("Delete Error!")
    }
  }
  
  return (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      initialValues={props.dataProp}
    >
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
          {props.dataProp && (
            <Popconfirm
              title={`Once deleted, this field can't be recovered !`}
              okButtonProps={{ danger: true }}
              onConfirm={deleteHandler}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          )}
          <Button style={{ margin: "0 8px" }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AdminAddComment;
