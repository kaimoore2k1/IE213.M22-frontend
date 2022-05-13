import { Form, Button, Rate, Input } from "antd";
import { createComment } from "../../graphql/schema/productDetail.graphql";
import { useMutation } from "@apollo/client";
const CommentEditor = ({ idProduct, idBlog }: any) => {
  var [submit, { error, reset }] = useMutation(createComment);
  function submitHandler(value: any) {
    console.log(
      JSON.stringify({
        ...value,
        idProduct,
        idBlog,
        user: "626fd8e94c3052c6b5de23d5",
      })
    );
  }
  return (
    <Form
      onFinish={(value) => {
        submit({
          variables: {
            ...value,
            idProduct,
            idBlog,
            user: "626fd8e94c3052c6b5de23d5",
          },
        });
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
        <Button htmlType="submit" type="primary">
          Gửi bình luận
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CommentEditor;
