import { message, Form, Button, Rate, Input, Typography, Popover } from "antd";
import { getCommentsByProductID,getCommentsByBlogID } from "../../graphql/schema/comment.graphql";
import {createComment} from "../../graphql/mutations/comment.graphql";
import { useAuthContext } from "../../modules/context/AuthContext";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import JWTManager from "../../modules/utils/jwt";
const CommentEditor = ({ idProduct, idBlog }: any) => {
  const [submit, { loading, error, reset }] = useMutation(createComment);
  const [state, setState] = useState(0);
  const { isAuthenticated } = useAuthContext();
  const [form] = Form.useForm();
  async function submitHandler(value: any) {
    const result = await submit({
      variables: {
        ...value,
        idProduct,
        idBlog,
        user: JWTManager.getUsername(),
      },
      refetchQueries: !!idProduct
        ? [getCommentsByProductID(idProduct)]
        : [getCommentsByBlogID(idBlog)],
      onCompleted: () => {
        reset();
        form.resetFields(["content"]);
        message.success({
          content: "Bình luận đã được gửi đi",
          key: "comment",
          duration: 1,
        });
      },
      onError: () => {
        reset();
        form.resetFields();
        message.error({
          content: "Bình luận không thành công",
          key: "comment",
          duration: 1,
        });
      },
    });
    setState((e) => e + 1);
    console.log(
      JSON.stringify({
        ...value,
        idProduct,
        idBlog,
        user: JWTManager.getUsername(),
      })
    );
  }
  return (
    <Form
      form={form}
      onFinish={(value) => {
        message.loading({ content: "Đang gửi bình luận", key: "comment" });

        submitHandler(value);
      }}
    >
      {!!idProduct && (
        <Form.Item name="rating" initialValue={3} className="rating-input">
          <Rate allowHalf />
        </Form.Item>
      )}
      <Form.Item name="content" className="content-input">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Popover
          content={
            <Typography.Text type="danger">
              Bạn phải đăng nhập để có thể bình luận
            </Typography.Text>
          }
          {...(!isAuthenticated ? { trigger: "hover" } : { visible: false })}
        >
          <Button
            htmlType="submit"
            disabled={!isAuthenticated}
            loading={loading}
            type="primary"
          >
            Gửi bình luận
          </Button>
        </Popover>
      </Form.Item>
    </Form>
  );
};
export default CommentEditor;
