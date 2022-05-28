import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Image,
  message,
  Popconfirm,
} from "antd";
import { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import { encode, decode } from "html-entities";
import toSlug from "../../assets/toSlug";
import {
  CREATE_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
} from "../../graphql/mutations/blog.graphql";
import { getAllBlogsAdmin } from "../../graphql/schema/blog.graphql";
import { useMutation } from "@apollo/client";
// import PicturesWall from "../../components/core/PicturesWall";
const joditConfig = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};

function AdminAddBlog(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
}) {
  const [createBlog] = useMutation(CREATE_BLOG);
  const [updateBlog] = useMutation(UPDATE_BLOG);
  const [deleteBlog] = useMutation(DELETE_BLOG);
  const [form] = Form.useForm();
  const editor = useRef(null);
  const [content, setContent] = useState(decode(props.dataProp?.content) ?? "");
  const [url, setUrl] = useState(props.dataProp?.image.url ?? "");
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const handleSubmit = (value: any) => {
    // if there are data in props.dataProp (only editing mode have this props), then update
    // else create
    if (props.dataProp)
      updateBlog({
        variables: {
          _id: props.dataProp._id,
          ...value,
          content: encode(content),
          slug: toSlug(value.title),
        },
        onCompleted: () => {
          message.success("Cập nhật thành công");
          props.visibleProp(false);
          form.resetFields();
          setUrl("");
          setContent("");
        },
        onError: () => {
          message.error("Cập nhật thất bại");
        },
        refetchQueries: [getAllBlogsAdmin],
      });
    else
      createBlog({
        variables: {
          ...value,
          content: encode(content),
          slug: toSlug(value.title),
        },
        onCompleted: () => {
          message.success("Thêm thành công");
          props.visibleProp(false);
          form.resetFields();
          setUrl("");
          setContent("");
        },
        onError: () => {
          message.error("Thêm thất bại");
        },
        refetchQueries: [getAllBlogsAdmin],
      });
  };
  const deleteHandler = () => {
    deleteBlog({
      variables: { _id: props.dataProp._id },
      onCompleted: () => {
        message.success("Xóa thành công");
        props.visibleProp(false);
        form.resetFields();
        setUrl("");
        setContent("");
      },
      onError: () => {
        message.error("Xóa thất bại");
      },
      refetchQueries: [getAllBlogsAdmin],
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="title"
        label="Title"
        initialValue={props.dataProp?.title ?? ""}
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        initialValue={props.dataProp?.image.url ?? ""}
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Image url"
      >
        <Input
          placeholder="url"
          onBlur={({ target }: any) => {
            setUrl(target.value);
            console.log(target.value);
          }}
        />
      </Form.Item>
      <div
        className="preview-img-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          src={url}
          fallback={require("../../assets/images/fail_load.jpg")}
        />
      </div>
      <Form.Item
        initialValue={props.dataProp?.author ?? ""}
        name="author"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Author"
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={props.dataProp?.category ?? ""}
        name="category"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Categories"
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={props.dataProp?.description ?? ""}
        name="description"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Description"
      >
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Form.Item name="content" initialValue={content} label="Content">
        <JoditEditor
          ref={editor}
          value={content}
          config={joditConfig}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        />
      </Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          {props.dataProp && (
            <Popconfirm
              title={`Sau khi xoá sẽ không thể hồi phục`}
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

export default AdminAddBlog;
