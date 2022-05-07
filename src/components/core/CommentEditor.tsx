import { Form, Button, Rate, Input } from "antd";

const CommentEditor = ({ type }: any) => {
  function submitHandler(value: any) {
    console.log(value);
  }

  return (
    <Form onFinish={submitHandler}>
      {
        (type == "product" && (
          <Form.Item className="rating-input">
            <Rate allowHalf defaultValue={3} />
          </Form.Item>
        ))
      }
      <Form.Item className="content-input">
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
